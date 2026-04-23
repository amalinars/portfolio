"use client";

import { motion } from "framer-motion";
import {
    Cpu,
    Globe,
    Layers,
    Zap,
    LayoutDashboard,
    Smartphone,
    Figma,
    Code2
} from "lucide-react";

const stack = [
    { name: "React", Icon: Code2 },
    { name: "Next.js", Icon: Globe },
    { name: "Tailwind", Icon: Layers },
    { name: "Node.js", Icon: Cpu },
    { name: "Laravel", Icon: Zap },
    { name: "Postgres", Icon: LayoutDashboard },
    { name: "Typescript", Icon: Smartphone },
    { name: "Figma", Icon: Figma },
];

export function Expertise() {
    return (
        <section className="pt-8 pb-24 px-6">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl md:text-7xl font-black mb-6 italic">
                            ENGINEERED TO <br />
                            <span className="text-primary tracking-tighter uppercase font-black not-italic">PERFECTION</span>
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            I don't just write code. I build digital ecosystems that are scalable,
                            fast, and incredibly fun to use. Here's my toolkit.
                        </p>
                    </div>
                    <div className="text-right flex flex-col items-end">
                        <span className="text-[12rem] font-bold text-white/[0.03] leading-[0.7] select-none pointer-events-none mb-[-2rem]">
                            SKLS
                        </span>
                    </div>
                </div>

                {/* Bento-style Grid for Skills */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-24">
                    {stack.map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5, borderColor: "var(--color-primary)" }}
                            className="group p-8 rounded-3xl bg-card border border-border flex flex-col items-center justify-center gap-4 transition-all will-change-transform"
                        >
                            <item.Icon className="w-10 h-10 group-hover:text-primary transition-colors duration-500" />
                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-white transition-colors">
                                {item.name}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Custom Marquee for "Vibe" or Dynamic Content */}
                <div className="border-y border-border py-12 overflow-hidden rotate-[-2deg] bg-primary text-black font-black text-4xl whitespace-nowrap marquee-container">
                    <div className="marquee-content will-change-transform">
                        <span>CLEAN CODE • OPTIMIZED SEO • PURE JAVASCRIPT • SCALABLE ARCHITECTURES • MODERN UI • RESPONSIVE DESIGN •</span>
                    </div>
                    <div className="marquee-content will-change-transform" aria-hidden="true">
                        <span>CLEAN CODE • OPTIMIZED SEO • PURE JAVASCRIPT • SCALABLE ARCHITECTURES • MODERN UI • RESPONSIVE DESIGN •</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
