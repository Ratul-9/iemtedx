"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="w-full bg-gradient-to-b from-white via-gray-50 to-white text-black">

      <main className="px-6 md:px-20 py-20 max-w-7xl mx-auto space-y-28">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-heading tracking-tight bg-gradient-to-r from-red-600  to-red-600 text-transparent bg-clip-text">
            Ideas Worth Spreading
          </h1>
          <p className="text-lg md:text-xl font-body text-gray-700 max-w-3xl mx-auto">
            Dive into the world of TED and TEDx—where innovation, curiosity, and community come together to shape the future.
          </p>
        </motion.section>

        {/* About TEDx Section */}
        <motion.section
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-heading font-bold">What is TEDx?</h2>
            <p className="text-lg font-body text-gray-700 leading-relaxed">
                About TEDx, x = independently organized event
                In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
            </p>
            <div className="flex gap-4 flex-wrap">
              <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full font-medium">Community</span>
              <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full font-medium">Innovation</span>
              <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full font-medium">Local Impact</span>
            </div>
          </div>
        </motion.section>

        {/* About TED Section */}
        <motion.section
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse items-center gap-12"
        >
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-heading font-bold">What is TED?</h2>
            <p className="text-lg font-body text-gray-700 leading-relaxed">
                TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community.

TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues. In addition to the TED Talks curated from our annual conferences and published on TED.com, we produce original podcasts, short video series, animated educational lessons (TED-Ed) and TV programs that are translated into more than 100 languages and distributed via partnerships around the world. Each year, thousands of independently run TEDx events bring people together to share ideas and bridge divides in communities on every continent. Through the Audacious Project, TED has helped catalyze more than $3 billion in funding for projects that seek to make the world more beautiful, sustainable and just. In 2020, TED launched Countdown, an initiative to accelerate solutions to the climate crisis and mobilize a movement for a net-zero future, and in 2023 TED launched TED Democracy to spark a new kind of conversation focused on realistic pathways towards a more vibrant and equitable future. View a full list of TED’s many programs and initiatives.

Follow TED on Facebook, Instagram, LinkedIn, TikTok, and X.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 font-medium">
              <div className="p-3 bg-gray-100 rounded-lg shadow-sm">Founded in 1984</div>
              <div className="p-3 bg-gray-100 rounded-lg shadow-sm">100+ Languages</div>
              <div className="p-3 bg-gray-100 rounded-lg shadow-sm">Global Events</div>
              <div className="p-3 bg-gray-100 rounded-lg shadow-sm">Non-Profit Mission</div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
