"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    // Add the Web3Forms Access Key here!
    formData.append("access_key", "cba68084-587a-4c6e-af40-ea9f15ab8a7a");
    
    // Optional settings for Web3Forms
    formData.append("subject", "New Project Inquiry from Monalo Studio Website");
    formData.append("from_name", "Monalo Studio Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        // Reset the form
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-surface border-4 border-foreground hard-shadow p-6 md:p-10 relative">
      
      {/* Decorative dots */}
      <div className="absolute top-4 right-4 flex gap-1">
        <div className="w-3 h-3 rounded-full bg-foreground"></div>
        <div className="w-3 h-3 rounded-full bg-foreground"></div>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl md:text-5xl font-heading font-black uppercase mb-2">Let's Talk</h2>
        <p className="text-muted font-medium text-lg">Fill out the form below and we'll get back to you within 24 hours.</p>
      </div>

      {status === "success" ? (
        <div className="bg-[#E8F5E9] border-4 border-foreground hard-shadow p-8 text-center animate-in fade-in zoom-in duration-300">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-black font-heading uppercase text-foreground mb-2">Message Sent!</h3>
          <p className="font-medium text-muted mb-6">We've received your inquiry and will be in touch shortly.</p>
          <button 
            onClick={() => setStatus("idle")}
            className="px-6 py-3 bg-primary text-white font-black font-heading uppercase border-2 border-foreground hard-shadow hover:translate-y-1 hover:shadow-none transition-all"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {status === "error" && (
            <div className="bg-[#FFEBEE] border-2 border-red-500 p-4 flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-red-600 shrink-0" />
              <div>
                <h4 className="font-bold text-red-900">Failed to send</h4>
                <p className="text-sm text-red-800">{errorMessage}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block font-bold text-foreground">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full bg-background border-2 border-foreground p-3 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all font-medium"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block font-bold text-foreground">Email Address *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full bg-background border-2 border-foreground p-3 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all font-medium"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="block font-bold text-foreground">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                className="w-full bg-background border-2 border-foreground p-3 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all font-medium"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="budget" className="block font-bold text-foreground">Estimated Budget *</label>
              <select 
                id="budget" 
                name="budget" 
                required
                defaultValue=""
                className="w-full bg-background border-2 border-foreground p-3 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all font-medium appearance-none cursor-pointer"
              >
                <option value="" disabled>Select a budget...</option>
                <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000+">$10,000+</option>
                <option value="Not Sure Yet">Not Sure Yet</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="project_type" className="block font-bold text-foreground">What are you looking for?</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
              {["2D Explainer", "Character Animation", "Motion Graphics", "Other"].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer p-2 border-2 border-foreground hover:bg-gray-50 transition-colors">
                  <input type="radio" name="project_type" value={type} className="w-4 h-4 text-primary focus:ring-primary border-foreground" />
                  <span className="text-sm font-bold text-foreground">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block font-bold text-foreground">Project Details *</label>
            <textarea 
              id="message" 
              name="message" 
              required 
              rows={5}
              className="w-full bg-background border-2 border-foreground p-3 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all font-medium resize-y"
              placeholder="Tell us a bit about your company, your goals, and what you want to achieve with this video..."
            ></textarea>
          </div>

          {/* Honeypot field to prevent spam bots */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <button 
            type="submit" 
            disabled={status === "submitting"}
            className="w-full bg-foreground text-white py-4 px-8 font-black font-heading uppercase text-xl border-2 border-foreground hard-shadow hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
          >
            {status === "submitting" ? (
              <span className="animate-pulse">Sending Request...</span>
            ) : (
              <>
                Submit Request
                <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </button>
          
          <p className="text-xs text-center text-muted font-medium mt-4">
            Powered by Web3Forms. Your data is secure and sent directly to our team.
          </p>
        </form>
      )}
    </div>
  );
}
