import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import photo from "../assets/hero.jpg";

const TAGLINE = "IT Support & Systems Specialist";

function useTypewriter(text: string, speed = 55, startDelay = 900) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started || count >= text.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [started, count, text.length, speed]);

  return { typed: text.slice(0, count), done: count >= text.length };
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const { typed, done } = useTypewriter(TAGLINE);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 150]);
  const contentY = useTransform(scrollY, [0, 600], [0, -60]);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background photo with overlay (parallax) */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={photo}
          alt="Alfin Johnson"
          className="w-full h-full object-cover object-top opacity-40 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </motion.div>

      {/* Red accent line top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-red-600 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Main content — staggered reveal */}
      <motion.div
        className="relative z-10 text-center px-4"
        style={{ y: contentY }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Typing tagline */}
        <motion.p
          variants={item}
          className="text-red-600 tracking-[0.4em] text-xs uppercase mb-6 font-mono h-4"
        >
          {typed}
          <span
            className={`inline-block w-2 border-r-2 border-red-600 ml-0.5 ${done ? "animate-pulse" : ""}`}
            style={{ height: "0.9em", verticalAlign: "text-bottom" }}
          />
        </motion.p>

        <motion.h1
          variants={item}
          className="text-white tracking-tight mb-4"
          style={{ fontSize: "clamp(3rem, 10vw, 7rem)", fontWeight: 800, lineHeight: 1 }}
        >
          Alfin Johnson
        </motion.h1>

        <motion.div variants={item} className="w-24 h-0.5 bg-red-600 mx-auto my-6" />

        <motion.p
          variants={item}
          className="text-gray-400 tracking-widest text-xs uppercase max-w-md mx-auto"
        >
          Microsoft 365 · Azure AD · Active Directory · Cloud Enthusiast
        </motion.p>

        {/* CTA — hover glow + scale */}
        <motion.div variants={item} className="mt-10">
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 border border-red-600 text-red-500 text-xs tracking-[0.3em] uppercase font-mono"
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 24px rgba(220,38,38,0.55)",
              backgroundColor: "rgb(164, 0, 0)",
              color: "#ffffff",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.6, duration: 0.6 }, y: { repeat: Infinity, duration: 2 } }}
      >
        <span className="text-xs tracking-widest uppercase"></span>
        <ChevronDown size={25} />
      </motion.div>
    </section>
  );
}
