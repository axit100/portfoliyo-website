"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function IntroductionSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
    const y2 = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            id="introduction"
            ref={containerRef}
            className="relative min-h-screen py-40 px-4 sm:px-8 flex items-center justify-center overflow-hidden bg-zinc-950 border-t border-gold-900/30"
        >
            {/* Parallax Background Grid */}
            <motion.div
                style={{ y: y2 }}
                className="absolute inset-0 z-0 opacity-20"
            >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">

                {/* Text Content with Parallax */}
                <motion.div
                    style={{ y: y1, opacity }}
                    className="space-y-12 text-center lg:text-left"
                >
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-serif text-gold-100">
                            Introduction
                        </h2>
                        <div className="h-1 w-20 bg-gold-400 mx-auto lg:mx-0" />
                    </div>

                    <div className="space-y-10 text-lg text-gold-200 leading-relaxed font-light">
                        <p className="backdrop-blur-md bg-zinc-900/80 p-10 rounded-2xl border border-gold-400/30 shadow-lg shadow-black/50 hover:border-gold-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-400/10 hover:-translate-y-1">
                            A passionate <span className="text-gold-300 font-medium">Architect & Interior Designer</span> with hands-on experience across residential, commercial, and institutional projects. I actively contribute to the complete design cycle—from concept development to execution.
                        </p>
                        <p className="backdrop-blur-md bg-zinc-900/80 p-10 rounded-2xl border border-gold-400/30 shadow-lg shadow-black/50 hover:border-gold-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-400/10 hover:-translate-y-1">
                            I specialize in creating detailed architectural drawings, interior layouts, and 3D visualizations using tools like <span className="text-gold-300 font-medium">Revit, AutoCAD, SketchUp</span>, and more.
                        </p>
                        <p className="backdrop-blur-md bg-zinc-900/80 p-10 rounded-2xl border border-gold-400/30 shadow-lg shadow-black/50 hover:border-gold-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-400/10 hover:-translate-y-1">
                            Driven by continuous growth, I am committed to contributing meaningfully to innovative, context-driven architectural and interior design projects in <span className="text-gold-300 font-medium">Canada</span> and beyond.
                        </p>
                    </div>
                </motion.div>

                {/* Building Image Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: "backOut" }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                        {/* Rotated Solid Frames */}
                        <div className="absolute inset-0 border border-gold-400/30 rounded-2xl transform translate-x-4 translate-y-4" />
                        <div className="absolute inset-0 border border-gold-400/30 rounded-2xl transform -translate-x-4 -translate-y-4" />

                        {/* Inner Image Container */}
                        <div className="absolute inset-0 bg-zinc-900 rounded-xl overflow-hidden z-10 border border-gold-400/20 shadow-2xl shadow-gold-900/20">

                            {/* Image Layer */}
                            <div className="relative w-full h-full">
                                <Image
                                    src="/building-1.png"
                                    alt="Architectural building design"
                                    fill
                                    className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                                    priority
                                />
                            </div>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                            {/* Text Overlay */}
                            <div className="absolute bottom-10 left-0 right-0 text-center px-6 pointer-events-none">
                                <p className="text-gold-100 font-serif italic text-2xl mb-3 drop-shadow-xl">
                                    "Designing dreams into reality"
                                </p>
                                <div className="h-px w-12 bg-gold-400/50 mx-auto mb-3" />
                                <p className="text-xs text-gold-300 uppercase tracking-[0.2em] font-medium drop-shadow-lg">
                                    Architect at Work
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
