"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-4 sm:px-8 pb-20 sm:pb-0">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Architectural Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.08)_1px,transparent_1px)] bg-[size:200px_200px]" />

                {/* Radial Gradient & Glows */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold-600/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="order-2 lg:order-1 space-y-8 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-gold-200 text-lg sm:text-xl tracking-[0.2em] uppercase mb-4">
                            Architecture & Design
                        </h2>
                        <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-bold tracking-[0.2em] text-gold-50 mb-2">
                            Yashvi <br />
                            <span className="text-gold-400 tracking-[0.2em]">
                                Trivedi
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-gold-200 text-lg sm:text-xl max-w-lg mx-auto lg:mx-0 font-light leading-relaxed flex flex-col gap-4"
                    >
                        <span className="inline-block px-4 py-1 rounded-full border border-gold-400/30 bg-gold-400/10 text-gold-300 text-sm tracking-widest uppercase w-fit mx-auto lg:mx-0">
                            5+ Years Experience
                        </span>
                        <span>
                            Crafting sustainable, functional, and aesthetically profound spaces that tell a story.
                        </span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <a
                            href="#projects"
                            className="px-10 py-5 bg-gold-400 text-black font-medium text-sm tracking-widest uppercase hover:bg-gold-300 transition-colors duration-300"
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            className="px-10 py-5 border border-gold-400/30 text-gold-100 font-medium text-sm tracking-widest uppercase hover:bg-gold-400/10 transition-colors duration-300"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
                >
                    <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px]">
                        {/* Decorative Rings */}
                        <div className="absolute inset-0 border-2 border-dashed border-gold-400/30 rounded-full animate-[spin_20s_linear_infinite]" />
                        <div className="absolute inset-4 border-2 border-dotted border-gold-400/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                        {/* Image Container */}
                        <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-gold-400/30 bg-zinc-900">
                            <Image
                                src="/profile-2.png"
                                alt="Yashvi Trivedi"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 500px"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20 hidden sm:flex"
                onClick={() => document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-gold-400 text-xs tracking-[0.3em] uppercase">Scroll Down</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="w-5 h-5 text-gold-400" />
                </motion.div>
            </motion.div>
        </section>
    );
}
