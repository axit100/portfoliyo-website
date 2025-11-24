"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Ruler, Compass, Calendar, Wrench } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

import { useLenis } from "./SmoothScroll";

interface Project {
    id: number;
    title: string;
    location: string;
    description: string;
    features: string[];
    details: {
        client: string;
        area: string;
        duration: string;
        role: string;
    };
    images: string[];
}

interface ProjectModalProps {
    project: any; // Using any to avoid strict type checking against the old interface during transition
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const lenis = useLenis();

    useEffect(() => {
        if (isOpen) {
            lenis?.stop();
            document.body.style.overflow = "hidden";
        } else {
            lenis?.start();
            document.body.style.overflow = "unset";
        }
        return () => {
            lenis?.start();
            document.body.style.overflow = "unset";
        };
    }, [isOpen, lenis]);

    if (!isOpen || !project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/90 z-[60] backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-4 md:inset-10 z-[70] bg-zinc-900 border border-gold-400/20 rounded-3xl overflow-hidden flex flex-col max-w-7xl mx-auto"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-4 md:p-6 border-b border-gold-400/10 bg-zinc-900/50 backdrop-blur-md sticky top-0 z-10">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-serif text-gold-200">{project.title}</h2>
                                <div className="flex items-center gap-2 text-gold-400/60 text-sm mt-1">
                                    <MapPin className="w-4 h-4" />
                                    <span className="uppercase tracking-wider">{project.location}</span>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full bg-gold-400/10 text-gold-400 hover:bg-gold-400 hover:text-black transition-all duration-300"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Content */}
                        <div
                            className="flex-1 overflow-y-auto custom-scrollbar overscroll-contain"
                            data-lenis-prevent
                        >
                            <div className="flex flex-col lg:flex-row">
                                {/* Left Column: Images (60%) */}
                                <div className="w-full lg:w-[60%] p-6 md:p-8 space-y-4 border-b lg:border-b-0 lg:border-r border-gold-400/10">
                                    {/* Hero Image */}
                                    {project.images.length > 0 && (
                                        <a
                                            href={project.images[0]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block relative w-full aspect-video rounded-xl overflow-hidden border border-gold-400/10 cursor-zoom-in group"
                                        >
                                            <Image
                                                src={project.images[0]}
                                                alt={`${project.title} - Main View`}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </a>
                                    )}

                                    {/* Remaining Images Grid */}
                                    {project.images.length > 1 && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {project.images.slice(1).map((img: string, index: number) => (
                                                <a
                                                    key={index}
                                                    href={img}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block relative aspect-video rounded-xl overflow-hidden border border-gold-400/10 cursor-zoom-in group"
                                                >
                                                    <Image
                                                        src={img}
                                                        alt={`${project.title} - View ${index + 2}`}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                    />
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Right Column: Content (40%) */}
                                <div className="w-full lg:w-[40%] p-6 md:p-8 bg-zinc-900/50">
                                    <div className="space-y-8 sticky top-0">
                                        {/* Main Description */}
                                        <div className="space-y-6">
                                            <h3 className="text-xl font-serif text-gold-300 border-b border-gold-400/10 pb-2">About the Project</h3>
                                            <p className="text-gold-100/80 leading-relaxed whitespace-pre-line text-sm md:text-base">
                                                {project.description}
                                            </p>

                                            <div className="space-y-3">
                                                <h4 className="text-sm font-medium text-gold-400 uppercase tracking-widest">Key Features</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.features && project.features.map((feature: string, i: number) => (
                                                        <span key={i} className="px-3 py-1 rounded-full border border-gold-400/20 bg-gold-400/5 text-gold-200 text-xs">
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Sidebar Details */}
                                        <div className="space-y-6 p-6 rounded-2xl bg-black/20 border border-gold-400/10">
                                            <div className="space-y-4">
                                                <div className="flex items-start gap-3">
                                                    <Calendar className="w-5 h-5 text-gold-400 mt-1" />
                                                    <div>
                                                        <p className="text-xs text-gold-400/60 uppercase tracking-wider">Duration</p>
                                                        <p className="text-gold-100">{project.details?.duration || "N/A"}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-3">
                                                    <Ruler className="w-5 h-5 text-gold-400 mt-1" />
                                                    <div>
                                                        <p className="text-xs text-gold-400/60 uppercase tracking-wider">Total Area</p>
                                                        <p className="text-gold-100">{project.details?.area || "N/A"}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-3">
                                                    <Compass className="w-5 h-5 text-gold-400 mt-1" />
                                                    <div>
                                                        <p className="text-xs text-gold-400/60 uppercase tracking-wider">Role</p>
                                                        <p className="text-gold-100">{project.details?.role || "N/A"}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
