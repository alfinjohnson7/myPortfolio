import { motion } from "motion/react";
import { Linkedin, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-zinc-950 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-0.5 bg-red-600" />
            <span className="text-red-600 tracking-widest text-xs uppercase font-mono">Contact</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white mb-4" style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.1 }}>
                Let's Connect
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, collaborating on interesting projects, or just connecting with fellow IT professionals.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:alfinjohnsonca@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 border border-zinc-800 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-950/20 transition-all">
                    <Mail size={16} className="text-gray-500 group-hover:text-red-500 transition-colors" />
                  </div>
                  <div>
                    <p className="text-white text-sm" style={{ fontWeight: 500 }}>Email</p>
                    <p className="text-gray-600 text-xs">alfinjohnsonca@gmail.com</p>
                  </div>
                </a>
                

                <a
                  href="https://linkedin.com/in/alfin-johnson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 border border-zinc-800 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-950/20 transition-all">
                    <Linkedin size={16} className="text-gray-500 group-hover:text-red-500 transition-colors" />
                  </div>
                  <div>
                    <p className="text-white text-sm" style={{ fontWeight: 500 }}>LinkedIn</p>
                    <p className="text-gray-600 text-xs">www.linkedin.com/in/alfinjohnsonn333j</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 border border-zinc-800 flex items-center justify-center">
                    <MapPin size={16} className="text-gray-500" />
                  </div>
                  <div>
                    <p className="text-white text-sm" style={{ fontWeight: 500 }}>Location</p>
                    <p className="text-gray-600 text-xs">Halifax, Nova Scotia, Canada</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-zinc-800 bg-black p-8">
              <p className="text-xs text-red-600 tracking-widest uppercase font-mono mb-6">Available for</p>
              <div className="space-y-3">
                {["Full-time Roles", "Contract Positions", "IT Consulting", "Collaborative Projects"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-zinc-800">
                <p className="text-gray-600 text-xs font-mono">Open to · On-site · Hybrid · Remote</p>
                <p className="text-gray-600 text-xs font-mono">Canada &amp; internationally</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-zinc-700 text-xs font-mono">© 2026 Alfin Johnson</span>
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 bg-red-600 rounded-full" />
          <span className="text-zinc-700 text-xs font-mono">IT Support & Systems Specialist</span>
        </div>
      </div>
    </section>
  );
}