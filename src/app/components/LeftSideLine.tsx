"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const sections = [
    { name: "Home", id: "hero" },
    { name: "Introduction", id: "introduction" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
];

export default function LeftSideLine() {
    const [activeSection, setActiveSection] = useState("Home");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
                    setActiveSection(section.name);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed left-8 top-0 bottom-0 z-50 hidden lg:flex flex-col items-center justify-center w-8">
            {/* Top Line */}
            <div className="flex-1 w-[1px] bg-gold-400/30" />

            {/* Active Section Indicator */}
            <div className="py-8 relative flex items-center justify-center">
                <div className="absolute right-full mr-4 whitespace-nowrap origin-right -rotate-90">
                    <motion.span
                        key={activeSection}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium"
                    >
                        {activeSection}
                    </motion.span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            </div>

            {/* Bottom Line */}
            <div className="flex-1 w-[1px] bg-gold-400/30" />
        </div>
    );
}
