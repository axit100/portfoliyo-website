"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { skills } from "../../config";

export default function SkillsSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            id="skills"
            ref={containerRef}
            className="relative min-h-screen py-32 px-4 sm:px-8 flex items-center justify-center overflow-hidden bg-background"
        >
            {/* Parallax Background Grid */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 opacity-20"
            >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">

                {/* Section Header */}
                <motion.div
                    style={{ opacity }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-gold-200 mb-4">
                        {skills.title}
                    </h2>
                    <p className="text-gold-300 text-lg">
                        Core Competencies & Professional Tools
                    </p>
                </motion.div>

                {/* Skills Grid - Creative Staggered Layout */}
                <div className="grid md:grid-cols-2 gap-10">
                    {skills.categories.map((category, catIndex) => {
                        const offsetY = catIndex === 1 ? "md:translate-y-12" : catIndex === 3 ? "md:translate-y-8" : "";

                        return (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.6, delay: catIndex * 0.15, type: "spring", stiffness: 80 }}
                                viewport={{ once: true }}
                                className={`group ${offsetY}`}
                            >
                                <div className="relative p-10 backdrop-blur-sm bg-black/50 rounded-2xl border-2 border-gold-400/30 hover:border-gold-400/50 transition-all duration-300 h-full hover:shadow-2xl hover:shadow-gold-400/20 hover:-translate-y-2">

                                    {/* Decorative Corner Accent */}
                                    <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-gold-400/40 rounded-tl-xl" />
                                    <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-gold-400/40 rounded-br-xl" />

                                    {/* Category Icon/Number */}
                                    <div className="absolute -top-4 right-8 w-10 h-10 bg-zinc-900 border-2 border-gold-400/30 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                        <span className="text-gold-400 font-serif text-lg font-bold">{catIndex + 1}</span>
                                    </div>

                                    {/* Category Title */}
                                    <h3 className="text-xl md:text-2xl font-serif text-gold-200 mb-6 pb-4 border-b border-gold-400/20 group-hover:text-gold-300 transition-colors">
                                        {category.category}
                                    </h3>

                                    {/* Skills List */}
                                    <div className="flex flex-wrap gap-3">
                                        {category.items.map((skill, index) => (
                                            <motion.span
                                                key={skill.name}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                whileHover={{ scale: 1.1, y: -4 }}
                                                transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                                                viewport={{ once: true }}
                                                className="px-4 py-2 bg-zinc-900/70 border border-gold-400/30 rounded-lg text-sm text-gold-200 hover:text-gold-100 hover:border-gold-400/50 hover:bg-zinc-900 hover:shadow-lg hover:shadow-gold-400/20 transition-all duration-200 cursor-default"
                                            >
                                                {skill.name}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-400/5 via-transparent to-gold-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
