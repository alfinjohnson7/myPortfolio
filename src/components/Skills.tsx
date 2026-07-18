import { motion } from "motion/react";

const skillGroups = [
  {
    category: "IT Support & Systems",
    skills: ["Technical Support", "Active Directory", "Microsoft 365", "Azure AD", "Windows Server", "Group Policy (GPO)", "ITSM / ServiceNow", "ITIL"],
  },
  {
    category: "Networking",
    skills: ["Network Administration", "VPN", "Wi-Fi / LAN", "TCP/IP", "DNS", "DHCP", "Network Monitoring", "SolarWinds"],
  },
  {
    category: "Cloud & Virtualization",
    skills: ["Azure", "Cloud Computing", "VMware", "Hyper-V", "RDP", "Nakivo"],
  },
  {
    category: "Programming",
    skills: ["Python", "Java", "C#", ".NET", "SQL", "MongoDB", "JavaScript", "HTML/CSS"],
  },
  {
    category: "Security",
    skills: ["Cyber Security", "MFA", "Identity Management", "Network Security", "Security Monitoring"],
  },
  {
    category: "Tools & Platforms",
    skills: ["macOS", "iOS", "Linux", "Windows 10/11", "MS Office", "Apple Diagnostics", "CRM Platforms"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-zinc-950 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-0.5 bg-red-600" />
            <span className="text-red-600 tracking-widest text-xs uppercase font-mono">Skills</span>
          </div>

          <h2 className="text-white mb-12" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            Technical Expertise
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border border-zinc-800 bg-black p-5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-4 bg-red-600" />
                  <h3 className="text-white text-sm" style={{ fontWeight: 600 }}>{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 text-gray-400 hover:border-red-800 hover:text-red-400 transition-colors font-mono cursor-default"
                    >
                      {skill}
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
