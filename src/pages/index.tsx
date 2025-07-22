import { Geist, Geist_Mono } from "next/font/google";

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
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-1 min-h-screen`}
    >
      <div className="relative flex-1 flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20">
        This is your landing page!
      </div>
    </div>
  );
}
