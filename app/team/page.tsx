'use client';
import { teamMembers } from "@/data/coreTeam";
import TeamMemberCard from "@/components/MemberCard";
import { FacultCoordinators } from "@/data/facultyCoordinators";

export default function Team() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">

      {/* Headline */}
      <div className="headline text-center">
        <h2 className="font-heading text-5xl font-light text-black">Meet the Team</h2>
      </div>

      <div className="fac-coords text-left text-black">
        <h3 className="text-2xl font-heading font-light mb-2">Faculty Coordinators</h3>
        <div className="flex flex-wrap gap-6 font-body justify-center">  
          {FacultCoordinators.map((coordinator, index)=>(
            <TeamMemberCard key={index} name={coordinator.name} designation={coordinator.designation} imageSrc={coordinator.imageSrc} bio={coordinator.bio} linkedinUrl={coordinator.linkedinUrl} />
          ))}
        </div>


      </div>

      {/* Core Team */}
      <div className="core-team text-left text-black">
        <h3 className="text-2xl font-heading font-light mb-6 text-black">Core Team</h3>

        <div className="flex flex-wrap gap-6 font-body justify-start">
          {teamMembers.map((member, index)=>(
            <TeamMemberCard key={index} name={member.name} designation={member.designation} imageSrc={member.imageSrc} bio={member.bio} linkedinUrl={member.linkedinUrl} />
          ))}
          
        </div>
      </div>
    </div>
  );
}
