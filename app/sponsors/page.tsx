import type { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Sponsors & Partners - TEDxIEM Salt Lake 2025",
  description: "Meet our valued sponsors and partners supporting TEDxIEM Salt Lake 2025. Join us as a sponsor and help bring inspiring ideas to life at Kolkata's premier TEDx event on August 22, 2025.",
  keywords: [
    "TEDx sponsors",
    "event sponsors Kolkata",
    "partnership opportunities",
    "sponsor TEDxIEM",
    "event partners",
    "corporate sponsors",
    "sponsorship benefits",
    "TEDx partnership"
  ],
  openGraph: {
    title: "Sponsors & Partners - TEDxIEM Salt Lake 2025",
    description: "Join our valued sponsors and partners in supporting innovative ideas and inspiring talks.",
    url: "https://tedxiemsaltlake.com/sponsors",
    images: [
      {
        url: "/images/sponsors-og.jpg",
        width: 1200,
        height: 630,
        alt: "TEDxIEM Salt Lake 2025 Sponsors & Partners"
      }
    ]
  },
  alternates: {
    canonical: "https://tedxiemsaltlake.com/sponsors"
  }
};

export default function Sponsors(){
    return(
        <div className="min-h-screen bg-black text-white">
            <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-4xl font-bold text-red-600">Sponsors Coming Soon</h1>
            </div>
            <Footer />
        </div>
    );
}