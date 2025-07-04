'use client';

import Footer from "@/components/footer";
import SpeakerCard from "@/components/speakerCard";
import { Speakers } from "@/data/speakerList";
export default function SpeakersPage() {
    return (
        <div>
            <div className="text-black flex flex-wrap gap-6 justify-center mt-5 mb-5">
                {Speakers.map((speaker, index) => (
                    <SpeakerCard key={index} name={speaker.name} designation={speaker.designation} imageSrc={speaker.imageSrc} bio={speaker.bio} detailedBio={speaker.bio} />
                ))}

            </div>
            <Footer />
        </div>

    );
}