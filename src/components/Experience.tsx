import { motion } from "motion/react";

const experiences = [
  {
    role: "Technical Support Specialist",
    company: "Concentrix",
    type: "Permanent Full-time",
    period: "Jan 2026 – Present",
    location: "Halifax, Nova Scotia · Hybrid",
    description:
      "Serving as an Apple Technical Specialist within a high-volume, multi-channel support environment, delivering expert-level diagnosis and resolution across the full Apple ecosystem.",
    highlights: [
      "In-depth technical support for iPhone, iPad, Mac, MacBook, Apple Watch, and Apple TV",
      "Apple ID, MFA, password recovery, and identity verification",
      "Troubleshoot Wi-Fi, Bluetooth, VPN, and cellular configurations",
      "Full ticket lifecycle using CRM platforms within SLA guidelines",
    ],
    skills: ["iOS", "macOS", "Technical Support", "CRM", "MFA"],
  },
  {
    role: "IT Support Analyst",
    company: "Alstom",
    type: "Contract Full-time",
    period: "Jul 2024 – Dec 2025",
    location: "Mississauga, Ontario · Hybrid",
    description:
      "Single point of contact delivering Level 1 & Level 2 end-user support for workstations, laptops, mobile devices, printers across Metrolinx sites.",
    highlights: [
      "Administer Active Directory, Group Policy Objects, print servers",
      "Support VMware and Hyper-V virtualized environments",
      "Monitor with SolarWinds and Nakivo for 24/7 train control availability",
      "ITIL practices across Incident, Change, and Asset Management",
    ],
    skills: ["Active Directory", "VMware", "SolarWinds", "ITIL", "Windows Server"],
  },
  {
    role: "Technical Support Analyst",
    company: "Alstom",
    type: "Internship",
    period: "Apr 2023 – Aug 2023",
    location: "Mississauga, Ontario · On-site",
    description:
      "Supported end users with day-to-day issues on Windows 10/11, MS Office, email and web apps, both in person and over phone/email.",
    highlights: [
      "Troubleshot Wi-Fi, LAN, VPN, printers and peripherals",
      "Set up and configured new laptops and workstations",
      "Logged tickets and documented resolution steps",
    ],
    skills: ["Windows 10/11", "VPN", "Service Desk", "Hardware"],
  },
  {
    role: "IT & Business Support Analyst",
    company: "HDFC Bank",
    type: "Permanent Full-time",
    period: "Feb 2021 – Jul 2022",
    location: "Kochi, Kerala, India · On-site",
    description:
      "Provided remote Tier 1 technical support to students and staff — troubleshooting hardware, software, and connectivity issues across Windows systems.",
    highlights: [
      "Installed and configured software applications",
      "Resolved network and Wi-Fi connectivity issues",
      "Business analysis: requirements gathering and process documentation",
    ],
    skills: ["Technical Support", "Network", "Business Analysis", "Customer Service"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-zinc-950 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-0.5 bg-red-600" />
            <span className="text-red-600 tracking-widest text-xs uppercase font-mono">Experience</span>
          </div>

          <h2 className="text-white mb-12" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            Work History
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800 ml-2 md:ml-4" />

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-10 md:pl-14"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-5 h-5 rounded-full border-2 border-red-600 bg-black flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-red-600" />
                  </div>

                  <div className="border border-zinc-800 bg-black p-6 hover:border-red-900/60 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-white" style={{ fontWeight: 600, fontSize: "1.1rem" }}>
                          {exp.role}
                        </h3>
                        <p className="text-red-500 text-sm">{exp.company} · {exp.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500 text-xs font-mono">{exp.period}</p>
                        <p className="text-gray-600 text-xs">{exp.location}</p>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{exp.description}</p>

                    <ul className="space-y-1.5 mb-4">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex gap-2 text-gray-500 text-sm">
                          <span className="text-red-600 mt-1">›</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2 py-0.5 border border-zinc-700 text-gray-500 font-mono"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
