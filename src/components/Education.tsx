import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Sheridan College",
    degree: "Advanced Diploma",
    field: "Computer Systems Networking and Telecommunications",
    period: "Aug 2022 – 2024",
    grade: "3.8 / 4.0 GPA",
    description:
      "Built a strong foundation in networking and software development — covering Python, Java OOP, .NET/C#, Data Structures in C, web development, cloud-enabled networks, Linux, database design, computer & network security, AI/ML, and IT project management.",
    skills: ["Python", "Java", "C#", ".NET", "Linux", "SQL", "MongoDB", "Cloud Networking", "Security"],
  },
  {
    school: "LCC North Paravoor",
    degree: "Diploma",
    field: "Financial & Foreign Accounting with GST",
    period: "Aug 2021 – Apr 2022",
    grade: "99% Distinction",
    description:
      "Intensive diploma in Financial and Foreign Accounting with focus on GST compliance. Hands-on experience with QuickBooks, Tally ERP, Peachtree, and advanced Microsoft Excel for financial reporting.",
    skills: ["Microsoft Excel", "QuickBooks", "Tally ERP", "GST", "Financial Reporting", "Microsoft 365"],
  },
];

export function Education() {
  return (
    <section id="education" className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-0.5 bg-red-600" />
            <span className="text-red-600 tracking-widest text-xs uppercase font-mono">Education</span>
          </div>

          <h2 className="text-white mb-12" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            Academic Background
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="border border-zinc-800 bg-zinc-950 p-6 hover:border-red-900/60 transition-colors"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-950/30 border border-red-900/40 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={18} className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-white" style={{ fontWeight: 600 }}>{edu.school}</h3>
                    <p className="text-red-500 text-sm">{edu.degree}</p>
                    <p className="text-gray-500 text-xs">{edu.field}</p>
                  </div>
                </div>

                <div className="flex justify-between text-xs font-mono mb-4">
                  <span className="text-gray-600">{edu.period}</span>
                  <span className="text-red-400">{edu.grade}</span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">{edu.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {edu.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-gray-500 font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
