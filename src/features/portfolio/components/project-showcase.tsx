"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/features/portfolio/data/projects";

export function ProjectShowcase() {
    return (
        <section id="works" className="py-24 px-6 bg-black relative">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-20 flex justify-between items-end border-b border-border pb-8">
                    <h2 className="text-4xl md:text-6xl font-black italic uppercase">
                        SELECTED <br />
                        <span className="text-stroke">EXHIBITIONS</span>
                    </h2>
                    <div className="text-right hidden md:block">
                        <motion.p 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-muted-foreground uppercase text-xs font-bold tracking-[0.3em]"
                        >
                            Showing {projects.length.toString().padStart(2, '0')} Of {projects.length.toString().padStart(2, '0')}
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.05 }}
                        >
                            {project.status === 'completed' ? (
                                <Link href={`/projects/${project.slug}`} className={`block group cursor-pointer will-change-transform`}>
                                    <ProjectCard project={project} />
                                </Link>
                            ) : (
                                <div className={`group will-change-transform pointer-events-none`}>
                                    <ProjectCard project={project} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 pt-10 border-t border-border flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="text-xl font-black uppercase italic tracking-tighter hover:text-primary transition-colors flex items-center gap-4"
                    >
                        Explore Full Archive <ExternalLink className="w-6 h-6" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: any }) {
    return (
        <>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] mb-6">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-700 grayscale ${['coming-soon', 'in-develop'].includes(project.status) ? 'scale-105 opacity-40' : 'group-hover:scale-110 group-hover:grayscale-0'}`}
                />

                {['coming-soon', 'in-develop'].includes(project.status) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                        <div className="px-6 py-2 border-2 border-white/20 bg-black/80 rounded-full">
                            <span className="text-white text-xs font-black uppercase tracking-[0.3em]">
                                {project.status === 'in-develop' ? 'In Develop' : 'Coming Soon'}
                            </span>
                        </div>
                    </div>
                )}

                {/* Floating Badge */}
                {project.status === 'completed' && (
                    <div className="absolute top-6 right-6 p-4 bg-white text-black rounded-full scale-0 group-hover:scale-100 transition-transform duration-500">
                        <ArrowUpRight className="w-6 h-6" />
                    </div>
                )}

                {/* Hover Overlay */}
                {project.status === 'completed' && (
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                        style={{ backgroundColor: project.color }}
                    />
                )}
            </div>

            <div className="flex justify-between items-start">
                <div>
                    <h3 className={`text-2xl font-black tracking-tighter mb-1 uppercase italic transition-colors ${project.status === 'completed' ? 'group-hover:text-primary' : 'text-muted-foreground'}`}>
                        {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm uppercase font-bold tracking-widest">{project.category}</p>
                </div>
                <span className="text-xs font-black border border-border px-3 py-1 rounded-full text-muted-foreground">
                    {project.year}
                </span>
            </div>
        </>
    );
}
