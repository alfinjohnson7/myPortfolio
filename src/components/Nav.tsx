import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const SECTIONS = ["about", "experience", "education", "skills", "projects", "contact"];

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Active section highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Nav background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = (id: string) =>
    `relative py-1 transition-colors ${
      active === id ? "text-white" : "text-gray-400 hover:text-white"
    }`;

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-colors duration-300 ${
          scrolled ? "bg-black/70 backdrop-blur-md border-b border-zinc-900" : "bg-transparent"
        }`}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Logo — fade + underline on hover */}
        <a href="#top" className="group relative inline-block">
          <span className="text-red-600 tracking-widest text-xs uppercase font-mono transition-opacity duration-300 group-hover:opacity-70">
            AJ
          </span>
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-xs tracking-widest uppercase">
          {SECTIONS.map((id) => (
            <a key={id} href={`#${id}`} className={linkClass(id)}>
              {id}
              {/* Active underline */}
              <motion.span
                className="absolute -bottom-0.5 left-0 h-px bg-red-600"
                initial={false}
                animate={{ width: active === id ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </motion.nav>

      {/* Mobile menu — slide-in from right with backdrop blur */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-64 bg-zinc-950/95 backdrop-blur-md border-l border-zinc-800 p-8 flex flex-col md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button
                className="self-end text-gray-400 hover:text-white transition-colors mb-10"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
              <div className="flex flex-col gap-6 text-sm tracking-widest uppercase">
                {SECTIONS.map((id, i) => (
                  <motion.a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className={`${active === id ? "text-red-500" : "text-gray-300"} hover:text-white transition-colors`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    {id}
                  </motion.a>
                ))}
              </div>
              <div className="mt-auto pt-8 border-t border-zinc-800">
                <span className="text-red-600 tracking-widest text-xs uppercase font-mono">AJ</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
