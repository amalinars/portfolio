"use client";

import { motion } from "framer-motion";
import { User, Briefcase, GraduationCap, Globe } from "lucide-react";

const stats = [
    { label: "Programming Exp.", value: "5+", Icon: Briefcase },
    { label: "Global Projects", value: "USA/UK+", Icon: Globe },
    { label: "Satisfied Clients", value: "20+", Icon: User },
    { label: "Tech Stacks", value: "10+", Icon: GraduationCap },
];

export function About() {
    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[64px] -z-10 will-change-[filter]" />

            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Sticky Left Content */}
                    <div className="lg:sticky lg:top-32">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-8xl font-black italic mb-8 leading-none will-change-transform"
                        >
                            THE <span className="text-stroke not-italic">VISION</span> <br />
                            BEHIND THE <br />
                            CODE.
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 text-xl text-muted-foreground leading-relaxed max-w-xl will-change-transform"
                        >
                            <p>
                                I'm Risma, a digital architect obsessed with the intersection of logic and aesthetics.
                                My journey in development started with a curiosity for how things work,
                                and it has evolved into a passion for creating seamless digital experiences.
                            </p>
                            <p>
                                Based in Indonesia, I work with brands and individuals globally to transform
                                their ideas into high-performance web applications. I believe that
                                great software isn't just about code—it's about solving real-world problems
                                with elegant solutions.
                            </p>

                            <div className="pt-8 flex flex-wrap gap-4">
                                <div className="px-6 py-3 rounded-2xl bg-border/50 border border-white/10 text-xs font-black uppercase tracking-widest text-primary">
                                    DESIGN-FOCUSED
                                </div>
                                <div className="px-6 py-3 rounded-2xl bg-border/50 border border-white/10 text-xs font-black uppercase tracking-widest text-primary">
                                    PERFORMANCE-DRIVEN
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - Stats & Milestones */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10, borderColor: "var(--color-primary)" }}
                                className="p-8 rounded-[2.5rem] bg-card border border-border group transition-all duration-500 will-change-transform"
                            >
                                <stat.Icon className="w-10 h-10 mb-8 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                                <div className="text-5xl font-black italic mb-2 tracking-tighter group-hover:text-primary transition-colors">
                                    {stat.value}
                                </div>
                                <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-white transition-colors">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="md:col-span-2 p-10 rounded-[2.5rem] bg-primary text-black placeholder:will-change-transform"
                        >
                            <h3 className="text-3xl font-black italic mb-6 uppercase">Philosophy</h3>
                            <p className="text-xl font-bold leading-tight">
                                "The best code is not just clean; it's invisible.
                                It serves the user without getting in the way,
                                creating a flow that feels entirely natural."
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
