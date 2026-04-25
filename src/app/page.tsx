"use client";

import { useEffect } from "react";
import { motion, useScroll, useSpring, useMotionValue } from "framer-motion";
import { Hero } from "@/features/portfolio/components/hero";
import { ProjectShowcase } from "@/features/portfolio/components/project-showcase";
import { Expertise } from "@/features/portfolio/components/expertise";
import { About } from "@/features/portfolio/components/about";
import { HorizontalSection } from "@/features/portfolio/components/horizontal-section";
import { Mail } from "lucide-react";

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <main className="dark selection:bg-primary selection:text-black">
      {/* Noise Texture Overaly */}
      <div className="noise" />

      {/* Custom Cursor */}
      <motion.div
        className="custom-cursor hidden lg:block pointer-events-none will-change-transform"
        style={{ x: mouseX, y: mouseY }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation - Minimalist */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-8 flex justify-between items-center mix-blend-difference pointer-events-none">
        <span className="text-xl font-black italic tracking-tighter pointer-events-auto cursor-pointer">R.</span>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest pointer-events-auto">
          <a href="#works" className="hover:text-primary transition-colors">Works</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#" className="hover:text-primary transition-colors">Blog</a>
        </div>
      </nav>

      <Hero />
      <About />
      <Expertise />
      <ProjectShowcase />
      <HorizontalSection />

      {/* Brutalist Footer */}
      <section className="py-24 px-6 bg-primary text-black transition-all duration-700">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-7xl md:text-9xl font-black italic leading-none mb-4">
              LET'S <br />BUILD.
            </h2>
            <p className="text-2xl font-bold max-w-md">
              Available for freelance, full-time, or just to chat about the future of the web.
            </p>
          </div>

          <div className="flex flex-col gap-12 items-start lg:items-end">
            <a
              href="mailto:keymarlin28@gmail.com"
              className="group text-4xl md:text-6xl font-black flex items-center gap-4 hover:tracking-widest transition-all duration-500"
            >
              KEYMARLIN28@GMAIL.COM
              <motion.div
                animate={{ rotate: [0, 90, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full"
              >
                <Mail className="w-6 h-6" />
              </motion.div>
            </a>

            <div className="flex gap-12 text-sm font-black uppercase italic">
              <a href="#" className="hover:underline underline-offset-8 transition-all">Instagram</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 text-[10px] font-black uppercase tracking-[0.5em] text-center text-muted-foreground bg-black overflow-hidden whitespace-nowrap">
        DESIGNED FOR THE BOLD • ENGINEERED FOR THE FUTURE • © 2026 RISMA •
      </footer>
    </main>
  );
}
