"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { contactInfo, features } from "../../config";

export default function ContactSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            id="contact"
            ref={containerRef}
            className="relative min-h-[60vh] py-32 px-4 sm:px-8 flex items-center justify-center overflow-hidden bg-background border-t border-gold-900/30"
        >
            {/* Parallax Background Grid */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 opacity-20"
            >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </motion.div>

            <div className="relative z-10 max-w-3xl mx-auto w-full text-center space-y-12">
                <motion.div
                    style={{ opacity }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold-200">
                        {contactInfo.title}
                    </h2>
                    <p className="text-gold-300 text-xl">
                        {contactInfo.subtitle}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid gap-8 md:grid-cols-3 text-center"
                >
                    <div className="space-y-2 group">
                        <h3 className="text-gold-400 font-serif text-lg">Email</h3>
                        <a href={`mailto:${contactInfo.email}`} className="block text-gold-100 hover:text-gold-300 transition-colors">
                            {contactInfo.email}
                        </a>
                    </div>

                    <div className="space-y-2 group">
                        <h3 className="text-gold-400 font-serif text-lg">Phone / WhatsApp</h3>
                        <a href={`tel:${contactInfo.phone}`} className="block text-gold-100 hover:text-gold-300 transition-colors">
                            {contactInfo.phone}
                        </a>
                    </div>

                    {features.showSocialLinks && (
                        <div className="space-y-2 group">
                            <h3 className="text-gold-400 font-serif text-lg">LinkedIn</h3>
                            <a
                                href={contactInfo.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-gold-100 hover:text-gold-300 transition-colors"
                            >
                                {contactInfo.social.linkedin.replace('https://', '')}
                            </a>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
