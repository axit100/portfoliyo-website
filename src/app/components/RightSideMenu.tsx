"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const menuItems = [
    { name: "Home", id: "hero" },
    { name: "Introduction", id: "introduction" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
];

export default function RightSideMenu() {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            const sections = menuItems.map((item) => document.getElementById(item.id));
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const section of sections) {
                if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6 items-end">
            {menuItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="group flex items-center gap-6 focus:outline-none"
                >
                    <motion.span
                        initial={{ opacity: 0, x: 20 }}
                        animate={{
                            opacity: activeSection === item.id ? 1 : 0,
                            x: activeSection === item.id ? 0 : 20
                        }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="text-sm font-medium tracking-wider text-gold-400 uppercase whitespace-nowrap mr-6"
                    >
                        {item.name}
                    </motion.span>
                    <div className="relative flex items-center justify-center">
                        <motion.div
                            animate={{
                                height: activeSection === item.id ? 16 : 4,
                                backgroundColor: activeSection === item.id ? "#D4AF37" : "#333",
                                borderColor: activeSection === item.id ? "#D4AF37" : "transparent"
                            }}
                            className="w-1 rounded-full transition-colors duration-300"
                        />
                    </div>
                </button>
            ))}
        </div>
    );
}
