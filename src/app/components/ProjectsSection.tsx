"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProjectsSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            id="projects"
            ref={containerRef}
            className="relative min-h-screen py-32 px-4 sm:px-8 flex items-center justify-center overflow-hidden bg-zinc-950"
        >
            {/* Parallax Background Grid */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 opacity-20"
            >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </motion.div>

            <div className="relative z-10 max-w-6xl mx-auto w-full space-y-16">
                <motion.div
                    style={{ opacity }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold-200 mb-6">
                        My Projects
                    </h2>
                    <p className="text-gold-300 text-xl max-w-2xl mx-auto">
                        A selection of architectural and interior design projects showcasing my journey and expertise.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: item * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-xl border-2 border-gold-400/30 bg-zinc-900/50 hover:border-gold-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold-400/20"
                        >
                            <div className="aspect-video bg-zinc-900 w-full object-cover relative group-hover:scale-105 transition-transform duration-500">
                                {/* Placeholder for project image */}
                                <div className="absolute inset-0 flex items-center justify-center text-gold-400/20 text-4xl font-serif">
                                    {item}
                                </div>
                            </div>
                            <div className="p-6 space-y-3 relative z-10 bg-zinc-900/90 backdrop-blur-sm">
                                <h3 className="text-xl font-semibold text-gold-200 group-hover:text-gold-300 transition-colors">
                                    Project Title {item}
                                </h3>
                                <p className="text-gold-300/80 text-sm leading-relaxed">
                                    A brief description of the project and the technologies used to build it.
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
