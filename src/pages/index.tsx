import { Geist, Geist_Mono } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import FeaturedPosts from "@/components/FeaturedPosts";
import NewsletterSignup from "@/components/NewsletterSignup";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans`}
    >
      <HeroSection />
      <FeaturedPosts />
      <NewsletterSignup />
      <StatsSection />
      <AboutSection />
    </div>
  );
}
