import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manolostudio.com"), // Change this to your real domain when launching
  title: "Manolo Studio | Premium 2D Animation Agency",
  description: "Award-winning 2D animation agency. We turn complex ideas into stunning explainer videos, motion graphics, and character animation that drive results.",
  keywords: [
    "2D Animation Agency",
    "Explainer Videos",
    "Motion Graphics Studio",
    "Character Animation",
    "Custom 2D Animation",
    "Corporate Video Production",
    "Storyboarding",
    "Animated Commercials"
  ],
  authors: [{ name: "Manolo Studio" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Manolo Studio | Premium 2D Animation Agency",
    description: "Award-winning 2D animation agency. We turn complex ideas into stunning explainer videos, motion graphics, and character animation that drive results.",
    siteName: "Manolo Studio",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Manolo Studio 2D Animation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manolo Studio | Premium 2D Animation Agency",
    description: "Award-winning 2D animation agency. We turn complex ideas into stunning explainer videos, motion graphics, and character animation that drive results.",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
