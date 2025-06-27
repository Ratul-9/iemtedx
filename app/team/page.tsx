'use client';
import TeamMemberCard from "@/components/MemberCard";

export default function Team() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      
      {/* Headline */}
      <div className="headline text-center">
        <h2 className="text-4xl font-bold text-[#E62B1E]">Meet the Team</h2>
      </div>

      {/* Faculty Coordinators */}
      <div className="fac-coords text-left text-black max-w-3xl">
        <h3 className="text-2xl font-semibold mb-2 text-[#E62B1E]">Faculty Coordinators</h3>
        <p className="text-base leading-relaxed">
          Our esteemed faculty members who guide and mentor us throughout the journey of TEDxIEMSaltLake, ensuring a perfect blend of professionalism and passion.
        </p>
      </div>

      {/* Core Team */}
      <div className="core text-left text-black max-w-3xl">
        <h3 className="text-2xl font-semibold mb-2 text-[#E62B1E]">Core Team</h3>
        <p className="text-base leading-relaxed">
          The driving force behind the event — a team of passionate individuals who handle planning, logistics, speaker coordination, and unforgettable experiences.
        </p>
      </div>
    </div>
  );
}
