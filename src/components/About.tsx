import { motion } from "motion/react";
import { MapPin, Users } from "lucide-react";
import photo from "../assets/hero.jpg";

const competencies = [
  { label: "IT Support & Systems", level: 95 },
  { label: "Networking", level: 85 },
  { label: "Cloud & Virtualization", level: 80 },
  { label: "Programming & Automation", level: 75 },
];

const cardHover = {
  y: -6,
  boxShadow: "0 12px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(220,38,38,0.25)",
  transition: { type: "spring" as const, stiffness: 300, damping: 22 },
};

export function About() {
  return (
    <section id="about" className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-0.5 bg-red-600" />
            <span className="text-red-600 tracking-widest text-xs uppercase font-mono">About</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-white mb-6" style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.1 }}>
                Passionate about<br />
                <span className="text-red-600">IT & Infrastructure</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                I'm an IT Support and Network-focused professional with a background in computer programming. I have developed strong skills in various programming languages and technologies, including Java, C#, Python and .NET, and I use that knowledge to understand systems end-to-end and automate repetitive tasks when I can.
              </p>
              <p className="text-gray-400 leading-relaxed mb-10">
                In my recent roles I've supported users with hardware, software and network issues, working with Windows, Linux, Active Directory, Microsoft 365, VPNs and basic server and network monitoring. I'm especially interested in infrastructure, AI, Machine Learning and Cloud Computing
              </p>

              {/* Skill bars — fill on scroll */}
              <div className="space-y-5">
                {competencies.map((c, i) => (
                  <div key={c.label}>
                    <div className="flex justify-between items-baseline mb-1.5">
                      <span className="text-gray-300 text-xs tracking-widest uppercase font-mono">
                        {c.label}
                      </span>
                      <span className="text-red-500 text-xs font-mono">{c.level}%</span>
                    </div>
                    <div className="h-1 bg-zinc-900 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-red-800 to-red-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${c.level}%` }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 1.1, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Image reveal with scanline tech effect on hover — hidden on mobile */}
              <motion.div
                className="group relative overflow-hidden border border-zinc-800 hidden md:block"
                initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={photo}
                  alt="Alfin Johnson"
                  className="w-full h-56 object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {/* Corner brackets */}
                <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Scanline sweep */}
                <span
                  className="absolute left-0 right-0 h-px bg-red-500/70 shadow-[0_0_8px_rgba(220,38,38,0.8)] opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{ animation: "scanline 2.2s linear infinite" }}
                />
                {/* Subtle CRT lines on hover */}
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, rgba(0,0,0,0.25) 0px, rgba(0,0,0,0.25) 1px, transparent 1px, transparent 3px)",
                  }}
                />
              </motion.div>

              {/* Info cards — lift + shadow on hover */}
              <motion.div className="border border-zinc-800 p-6 bg-zinc-950" whileHover={cardHover}>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={16} className="text-red-600" />
                  <span className="text-gray-400 text-sm">Location</span>
                </div>
                <p className="text-white">Greater Halifax Metropolitan Area, Canada</p>
              </motion.div>

              <motion.div className="border border-zinc-800 p-6 bg-zinc-950" whileHover={cardHover}>
                <div className="flex items-center gap-3 mb-4">
                  <Users size={16} className="text-red-600" />
                  <span className="text-gray-400 text-sm">Interest</span>
                </div>
                <p className="text-white">AI & Machine Learning | Cloud Computing</p>
              </motion.div>

              <motion.div className="border border-red-900/40 p-6 bg-red-950/10" whileHover={cardHover}>
                <p className="text-red-400 text-xs tracking-widest uppercase mb-2 font-mono">Open to Work</p>
                <p className="text-gray-300 text-sm">Canada & more · On-site · Hybrid · Remote</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
