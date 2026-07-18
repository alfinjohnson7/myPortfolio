import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Network Monitoring Dashboard",
    description:
      "Built a SolarWinds-integrated monitoring dashboard to track system health, alert on threshold breaches, and generate uptime reports for critical train control infrastructure at Alstom.",
    tags: ["SolarWinds", "Python", "Network Monitoring", "Alerting"],
    type: "Infrastructure",
  },
  {
    title: "Active Directory Automation Scripts",
    description:
      "Developed PowerShell scripts to automate user provisioning, deprovisioning, and Group Policy Object management — reducing manual AD tasks by ~60% across multiple Metrolinx sites.",
    tags: ["PowerShell", "Active Directory", "Automation", "GPO"],
    type: "Automation",
  },
  {
    title: "IT Asset Tracking System",
    description:
      "Designed and implemented a lightweight asset tracking solution using Excel and Python to manage laptops, monitors, and peripherals — integrating with the ITSM ticketing workflow.",
    tags: ["Python", "Excel", "ITSM", "Asset Management"],
    type: "Systems",
  },
  {
    title: "Apple Device Diagnostics Workflow",
    description:
      "Streamlined the Apple device support workflow at Concentrix by creating structured troubleshooting runbooks covering 30+ common iOS/macOS failure scenarios with resolution trees.",
    tags: ["iOS", "macOS", "Documentation", "Apple Diagnostics"],
    type: "Documentation",
  },
  {
    title: "Cloud Network Security Lab",
    description:
      "Personal homelab project exploring Azure AD identity management, MFA policies, Conditional Access, and network segmentation — aligned with CompTIA Security+ objectives.",
    tags: ["Azure AD", "MFA", "Cloud Security", "Homelab"],
    type: "Security",
  },
  {
    title: "ITSM Knowledge Base Portal",
    description:
      "Authored and maintained a comprehensive internal knowledge base of SOPs and runbooks at Alstom, enabling first-call resolution improvement and faster onboarding for new analysts.",
    tags: ["ITIL", "Documentation", "SOP", "Knowledge Management"],
    type: "Process",
  },
];

const typeColors: Record<string, string> = {
  Infrastructure: "text-blue-400 border-blue-900/50",
  Automation: "text-green-400 border-green-900/50",
  Systems: "text-yellow-400 border-yellow-900/50",
  Documentation: "text-purple-400 border-purple-900/50",
  Security: "text-red-400 border-red-900/50",
  Process: "text-orange-400 border-orange-900/50",
};

export function Projects() {
  return (
    <section id="projects" className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-0.5 bg-red-600" />
            <span className="text-red-600 tracking-widest text-xs uppercase font-mono">Projects</span>
          </div>

          <h2 className="text-white mb-4" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            Featured Work
          </h2>
          <p className="text-gray-500 text-sm mb-12 max-w-xl">
            A selection of projects and initiatives from my professional experience and personal lab work.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border border-zinc-800 bg-zinc-950 p-5 flex flex-col hover:border-red-900/60 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono px-2 py-0.5 border ${typeColors[project.type] || "text-gray-400 border-zinc-700"}`}>
                    {project.type}
                  </span>
                  <ExternalLink size={14} className="text-zinc-700 group-hover:text-red-600 transition-colors" />
                </div>

                <h3 className="text-white mb-2" style={{ fontWeight: 600, fontSize: "0.95rem" }}>
                  {project.title}
                </h3>

                <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-1.5 py-0.5 text-zinc-600 font-mono">
                      #{tag.toLowerCase().replace(/\s+/g, "")}
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
