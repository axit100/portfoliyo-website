"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const educationData = [
    {
        id: 1,
        title: "Bridging Program",
        subtitle: "Architecture Skills Enhancement Bridging Program",
        institution: "Humber Polytechnic",
        period: "Sep 2025 - Dec 2025",
        location: "Toronto, Canada"
    },
    {
        id: 2,
        title: "Masters",
        subtitle: "Masters in Housing Design, Architecture",
        institution: "CEPT University",
        period: "Aug 2022 - May 2024",
        location: "Ahmedabad, India"
    },
    {
        id: 3,
        title: "Bachelor",
        subtitle: "Bachelor of Architecture - BArch",
        institution: "SAL SCHOOL OF ARCHITECTURE (356)",
        period: "2016 - 2021",
        location: "Ahmedabad, India"
    }
];

export default function EducationSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            id="education"
            ref={containerRef}
            className="relative min-h-screen py-32 px-4 flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Parallax Background Grid */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 opacity-20"
            >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </motion.div>

            <div className="relative z-10 max-w-5xl mx-auto w-full">

                {/* Section Header */}
                <motion.div
                    style={{ opacity }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-serif text-gold-200 mb-6">
                        Education
                    </h2>
                    <p className="text-gold-300 text-xl">
                        Academic Foundation & Professional Growth
                    </p>
                </motion.div>

                {/* Education Cards */}
                <div className="space-y-12">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className={`group max-w-3xl ${index % 2 === 1 ? "ml-auto" : "mr-auto"}`}
                        >
                            <div className="relative p-6 md:p-8 backdrop-blur-sm bg-zinc-900/40 rounded-3xl border-2 border-gold-400/30 hover:border-gold-400/50 transition-all duration-500 hover:bg-zinc-900/60 hover:shadow-2xl hover:shadow-gold-400/20">

                                {/* Corner Decorations */}
                                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold-400/50 rounded-tl-2xl" />
                                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold-400/50 rounded-br-2xl" />

                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                        <div className="space-y-1">
                                            <h3 className="text-2xl md:text-3xl font-serif text-gold-200 group-hover:text-gold-300 transition-colors">
                                                {edu.title}
                                            </h3>
                                            <p className="text-lg text-gold-100 font-medium leading-relaxed">
                                                {edu.subtitle}
                                            </p>
                                            <p className="text-gold-300 font-semibold text-base">
                                                {edu.institution}
                                            </p>
                                        </div>

                                        <div className="md:text-right shrink-0">
                                            <p className="text-gold-200 font-semibold text-base bg-gold-400/10 px-3 py-1 rounded-full border border-gold-400/20">
                                                {edu.period}
                                            </p>
                                        </div>
                                    </div>

                                    {edu.location && (
                                        <div className="flex justify-end mt-1">
                                            <p className="text-gold-300/80 text-sm flex items-center gap-2 uppercase tracking-wider">
                                                <span>📍</span>
                                                <span>{edu.location}</span>
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
