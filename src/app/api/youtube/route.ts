import { NextResponse } from 'next/server';

// YouTube Data API Base URL
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';

// Force Next.js to cache this route for 1 hour (3600 seconds)
export const revalidate = 3600;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const handle = searchParams.get('handle');
    
    if (!handle) {
      return NextResponse.json({ error: 'Channel handle is required' }, { status: 400 });
    }

    const apiKey = process.env.YOUTUBE_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'YouTube API key is missing' }, { status: 500 });
    }

    // 1. Get Channel ID from handle
    const channelRes = await fetch(
      `${YOUTUBE_API_URL}/channels?part=id&forHandle=${handle}&key=${apiKey}`
    );
    const channelData = await channelRes.json();

    if (!channelData.items || channelData.items.length === 0) {
      return NextResponse.json({ error: 'Channel not found' }, { status: 404 });
    }
    
    const channelId = channelData.items[0].id;

    // 2. Fetch highest viewed videos for the channel
    const searchRes = await fetch(
      `${YOUTUBE_API_URL}/search?part=snippet&channelId=${channelId}&maxResults=8&order=viewCount&type=video&key=${apiKey}`
    );
    const searchData = await searchRes.json();

    if (!searchData.items || searchData.items.length === 0) {
      return NextResponse.json({ videos: [] });
    }

    // Extract video IDs
    const videoIds = searchData.items.map((item: any) => item.id.videoId).join(',');

    // 3. Fetch video details (duration, view count)
    const videosRes = await fetch(
      `${YOUTUBE_API_URL}/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${apiKey}`
    );
    const videosData = await videosRes.json();

    // Map to a cleaner format for our frontend
    const formattedVideos = videosData.items.map((video: any) => {
      // Parse duration from ISO 8601 (PT1H2M10S -> MM:SS)
      const durationMatch = video.contentDetails.duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
      let durationStr = '';
      if (durationMatch) {
        const h = parseInt(durationMatch[1]) || 0;
        const m = parseInt(durationMatch[2]) || 0;
        const s = parseInt(durationMatch[3]) || 0;
        if (h > 0) durationStr += `${h}:`;
        durationStr += `${h > 0 ? m.toString().padStart(2, '0') : m}:${s.toString().padStart(2, '0')}`;
      }

      // Format views (e.g. 1.2M)
      const views = parseInt(video.statistics.viewCount) || 0;
      let viewsStr = views.toString();
      if (views >= 1000000) viewsStr = (views / 1000000).toFixed(1) + 'M';
      else if (views >= 1000) viewsStr = (views / 1000).toFixed(1) + 'K';
      
      return {
        id: video.id,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails?.maxres?.url || video.snippet.thumbnails?.high?.url || '',
        publishedAt: video.snippet.publishedAt,
        viewCount: viewsStr,
        rawViewCount: views,
        duration: durationStr || '0:00',
      };
    });

    // Sort videos by highest view count explicitly
    formattedVideos.sort((a: any, b: any) => b.rawViewCount - a.rawViewCount);

    return NextResponse.json({ videos: formattedVideos });
  } catch (error: any) {
    console.error('YouTube API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch YouTube videos' }, { status: 500 });
  }
}
