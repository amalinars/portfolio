import { projects } from "@/features/portfolio/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const project = projects.find((p) => p.slug === resolvedParams.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 selection:bg-primary selection:text-black">
            <div className="max-w-[1200px] mx-auto">
                {/* Back Link */}
                <Link 
                    href="/#works" 
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-12 uppercase text-xs font-black tracking-widest"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Exhibitions
                </Link>

                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20 items-end">
                    <div>
                        <p className="uppercase font-bold tracking-widest mb-4" style={{ color: project.color }}>
                            {project.category}
                        </p>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-6">
                            {project.title}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                            {project.description || "In-depth case study and details coming soon."}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-12 border-t border-border pt-8 lg:border-t-0 lg:pt-0">
                        <div>
                            <h3 className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-2">Year</h3>
                            <p className="font-black text-lg">{project.year}</p>
                        </div>
                        {project.client && (
                            <div>
                                <h3 className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-2">Client</h3>
                                <p className="font-black text-lg">{project.client}</p>
                            </div>
                        )}
                        {project.role && (
                            <div>
                                <h3 className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-2">Role</h3>
                                <p className="font-black text-lg">{project.role}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Main Image */}
                <div className="relative aspect-video w-full overflow-hidden rounded-[2rem] mb-24 group">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div 
                        className="absolute inset-0 mix-blend-overlay transition-opacity duration-700 opacity-20 group-hover:opacity-0"
                        style={{ backgroundColor: project.color }}
                    />
                </div>

                {/* Tech & Features */}
                {(project.tech || (project as any).features) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-border pt-24">
                        {project.tech && (
                            <div>
                                <h2 className="text-3xl font-black italic uppercase mb-8">Technologies</h2>
                                <div className="flex flex-wrap gap-3">
                                    {(project.tech as string[]).map((t, i) => (
                                        <span key={i} className="px-4 py-2 rounded-full border border-border text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {(project as any).features && (
                            <div>
                                <h2 className="text-3xl font-black italic uppercase mb-8">Key Features</h2>
                                <ul className="space-y-4">
                                    {(project as any).features.map((f: string, i: number) => (
                                        <li key={i} className="flex gap-4 items-start text-muted-foreground">
                                            <span className="mt-1 flex-shrink-0" style={{ color: project.color }}>
                                                <ArrowUpRight className="w-5 h-5" />
                                            </span>
                                            <span className="text-lg">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </main>
    );
}
