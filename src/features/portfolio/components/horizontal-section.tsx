"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HorizontalSection() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-20 px-24">
                    <div className="flex flex-col justify-center min-w-[70vw] group">
                        <h2 className="text-[12rem] font-black italic text-stroke-thin mb-4 uppercase leading-none group-hover:text-white/5 transition-colors duration-700">
                            CRAFTING <br /> THE CODES
                        </h2>
                        <p className="text-3xl text-muted-foreground max-w-xl font-bold italic border-l-4 border-primary pl-6">
                            Every line of code is a brushstroke on the canvas of the internet.
                        </p>
                    </div>

                    <div className="flex flex-col justify-center min-w-[50vw]">
                        <h2 className="text-[10rem] font-black italic text-primary leading-none uppercase drop-shadow-[0_0_30px_rgba(255,105,180,0.3)]">
                            SCALABLE <br /> ARCHITECTURE
                        </h2>
                        <p className="text-2xl text-muted-foreground max-w-lg font-bold mt-4">
                            Building foundations that don't just work today, but evolve for tomorrow.
                        </p>
                    </div>

                    <div className="flex flex-col justify-center min-w-[50vw] group">
                        <h2 className="text-[10rem] font-black italic leading-none uppercase mb-4 transition-all duration-500">
                            FUTURE <br />
                            <span className="text-stroke-thin group-hover:text-primary/20 transition-all duration-700">FOCUSED</span>
                        </h2>
                        <p className="text-2xl text-muted-foreground max-w-lg font-bold">
                            Staying at the bleeding edge of the JavaScript ecosystem.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Background floating years */}
            <div className="absolute top-1/4 right-0 text-[30rem] font-black text-white/[0.02] -z-10 select-none italic">
                2026/02
            </div>
        </section>
    );
}
