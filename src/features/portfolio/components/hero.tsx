"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Magnetic from "@/components/animations/magnetic";

export function Hero() {
    return (
        <section className="relative min-h-[85vh] pt-32 pb-6 px-6 overflow-visible">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

                {/* Intro Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-8 flex flex-col justify-between p-10 md:p-16 rounded-[3.5rem] bg-card border border-border relative overflow-hidden group"
                >
                    {/* Dynamic Background Glow */}
                    <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-primary/5 blur-[64px] group-hover:bg-primary/10 transition-colors duration-1000 will-change-[filter,background-color]" />

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] mb-16 shadow-xl">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                            </span>
                            Crafting Digital Experiences
                        </div>
 
                        <h1 className="text-7xl md:text-[11rem] font-black leading-[0.75] tracking-tighter mb-12 italic">
                            FULLSTACK <br />
                            <span className="text-stroke">DEVELOPER</span>
                        </h1>
 
                        <p className="text-xl md:text-3xl text-muted-foreground max-w-2xl leading-tight mb-20">
                            I transform complex ideas into <span className="text-white font-bold italic underline decoration-primary decoration-4 underline-offset-8">high-performance</span> digital architectures.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-8 relative z-10 mt-auto">
                        <Magnetic>
                            <motion.button
                                whileHover={{ scale: 1.05, rotate: -1 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-7 bg-primary text-black font-black uppercase italic tracking-tighter text-2xl rounded-full flex items-center gap-4 transition-all shadow-[0_20px_50px_rgba(255,105,180,0.3)] will-change-transform"
                            >
                                Initiate Project <ChevronRight className="w-8 h-8" />
                            </motion.button>
                        </Magnetic>

                        {/* Social links removed as requested */}
                    </div>

                    {/* Stats or Badges removed as requested */}
                </motion.div>

                {/* Profile Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-4 relative group"
                >
                    <div className="absolute inset-0 bg-primary/20 blur-[48px] rounded-full group-hover:bg-primary/40 transition-all duration-700 will-change-[filter,background-color]" />
                    <div className="relative h-full min-h-[600px] rounded-[3.5rem] overflow-hidden border border-border group-hover:border-primary/50 transition-colors will-change-transform">
                        <Image
                            src="/risma-profile.jpg"
                            alt="Profile"
                            fill
                            priority
                            className="object-cover hover:grayscale transition-all duration-1000 scale-105 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-0 left-0 right-0 p-12">
                            <h2 className="text-5xl font-black italic tracking-tighter mb-2">RISMA.</h2>
                            <div className="flex items-center gap-3">
                                <span className="w-12 h-[1px] bg-primary" />
                                <p className="text-primary font-black tracking-[0.3em] text-xs uppercase">INDONESIA-BASED</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
