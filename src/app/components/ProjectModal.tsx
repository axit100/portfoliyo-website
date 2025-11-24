"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLenis } from "./SmoothScroll";

interface ProjectModalProps {
    project: any;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const lenis = useLenis();
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            lenis?.stop();
            document.body.style.overflow = "hidden";
        } else {
            lenis?.start();
            document.body.style.overflow = "unset";
            setSelectedImageIndex(0);
            setIsLightboxOpen(false);
        }
        return () => {
            lenis?.start();
            document.body.style.overflow = "unset";
        };
    }, [isOpen, lenis]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                if (isLightboxOpen) {
                    setIsLightboxOpen(false);
                } else {
                    onClose();
                }
            }
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [isLightboxOpen, onClose]);

    if (!isOpen || !project) return null;

    const nextImage = () => {
        setSelectedImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setSelectedImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/95 backdrop-blur-md z-[60]"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8"
                    >
                        <div className="relative w-full max-w-[1400px] h-full max-h-[900px] bg-zinc-950 rounded-3xl overflow-hidden border-2 border-gold-400/20 shadow-2xl shadow-gold-400/10">
                            {/* Close Button */}
                            <motion.button
                                onClick={onClose}
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                className="absolute top-6 right-6 z-50 p-3 rounded-full bg-black/80 backdrop-blur-md border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300 shadow-lg"
                            >
                                <X className="w-6 h-6" />
                            </motion.button>

                            {/* Content Container with Scroll */}
                            <div
                                className="h-full overflow-y-auto custom-scrollbar overscroll-contain"
                                data-lenis-prevent
                            >
                                {/* Hero Section */}
                                <div className="relative h-[400px] md:h-[500px]">
                                    <Image
                                        src={project.images[selectedImageIndex]}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

                                    {/* Hero Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2, duration: 0.6 }}
                                        >
                                            <div className="flex items-center gap-3 mb-4">
                                                <MapPin className="w-5 h-5 text-gold-400" />
                                                <span className="text-gold-300 uppercase tracking-widest text-sm font-medium">
                                                    {project.location}
                                                </span>
                                            </div>

                                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gold-100 mb-4 leading-tight">
                                                {project.title}
                                            </h2>

                                            <div className="flex flex-wrap gap-2">
                                                {project.features?.map((feature: string, i: number) => (
                                                    <span
                                                        key={i}
                                                        className="px-4 py-2 rounded-full bg-gold-400/10 backdrop-blur-md border border-gold-400/30 text-gold-300 text-sm font-medium"
                                                    >
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Image Navigation */}
                                    {project.images.length > 1 && (
                                        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 px-6 flex justify-between pointer-events-none">
                                            <motion.button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    prevImage();
                                                }}
                                                whileHover={{ scale: 1.1, x: -5 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="pointer-events-auto p-3 rounded-full bg-black/70 backdrop-blur-md border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-black transition-all duration-300"
                                            >
                                                <ChevronLeft className="w-6 h-6" />
                                            </motion.button>

                                            <motion.button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    nextImage();
                                                }}
                                                whileHover={{ scale: 1.1, x: 5 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="pointer-events-auto p-3 rounded-full bg-black/70 backdrop-blur-md border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-black transition-all duration-300"
                                            >
                                                <ChevronRight className="w-6 h-6" />
                                            </motion.button>
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 md:p-12">
                                    {/* Main Content - 2 Columns */}
                                    <div className="lg:col-span-2 space-y-8">
                                        {/* Description */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="space-y-4"
                                        >
                                            <h3 className="text-2xl font-serif text-gold-200 border-b border-gold-400/20 pb-3">
                                                About the Project
                                            </h3>
                                            <p className="text-gold-100/80 leading-relaxed text-base md:text-lg whitespace-pre-line">
                                                {project.description}
                                            </p>
                                        </motion.div>

                                        {/* Challenge & Solution */}
                                        {(project.challenges || project.solution) && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4 }}
                                                className="grid md:grid-cols-2 gap-6"
                                            >
                                                {project.challenges && (
                                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/20">
                                                        <h4 className="text-lg font-serif text-red-300 mb-3 flex items-center gap-2">
                                                            <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                                                            Challenge
                                                        </h4>
                                                        <p className="text-gold-100/70 text-sm leading-relaxed">
                                                            {project.challenges}
                                                        </p>
                                                    </div>
                                                )}

                                                {project.solution && (
                                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/5 to-transparent border border-green-500/20">
                                                        <h4 className="text-lg font-serif text-green-300 mb-3 flex items-center gap-2">
                                                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                                            Solution
                                                        </h4>
                                                        <p className="text-gold-100/70 text-sm leading-relaxed">
                                                            {project.solution}
                                                        </p>
                                                    </div>
                                                )}
                                            </motion.div>
                                        )}

                                        {/* Image Gallery */}
                                        {project.images.length > 1 && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 }}
                                                className="space-y-4"
                                            >
                                                <h3 className="text-2xl font-serif text-gold-200 border-b border-gold-400/20 pb-3">
                                                    Gallery
                                                </h3>

                                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                    {project.images.map((img: string, index: number) => (
                                                        <motion.button
                                                            key={index}
                                                            onClick={() => {
                                                                setSelectedImageIndex(index);
                                                                setIsLightboxOpen(true);
                                                            }}
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 group ${index === selectedImageIndex
                                                                    ? "border-gold-400 shadow-lg shadow-gold-400/20"
                                                                    : "border-gold-400/20 hover:border-gold-400/50"
                                                                }`}
                                                        >
                                                            <Image
                                                                src={img}
                                                                alt={`View ${index + 1}`}
                                                                fill
                                                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                            />

                                                            {/* Overlay */}
                                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                                <Maximize2 className="w-6 h-6 text-white" />
                                                            </div>
                                                        </motion.button>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Sidebar - 1 Column */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="space-y-6"
                                    >
                                        {/* Project Details Card */}
                                        <div className="p-6 rounded-2xl bg-gradient-to-br from-gold-400/5 to-transparent border border-gold-400/20 space-y-6">
                                            <h4 className="text-xl font-serif text-gold-200 border-b border-gold-400/20 pb-3">
                                                Project Details
                                            </h4>

                                            <div className="space-y-4">
                                                {project.details?.duration && (
                                                    <div className="flex items-start gap-3">
                                                        <Calendar className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                                                        <div>
                                                            <p className="text-xs text-gold-400/60 uppercase tracking-wider mb-1">
                                                                Duration
                                                            </p>
                                                            <p className="text-gold-100 font-medium">
                                                                {project.details.duration}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}

                                                {project.details?.area && (
                                                    <div className="flex items-start gap-3">
                                                        <svg className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                                        </svg>
                                                        <div>
                                                            <p className="text-xs text-gold-400/60 uppercase tracking-wider mb-1">
                                                                Total Area
                                                            </p>
                                                            <p className="text-gold-100 font-medium">
                                                                {project.details.area}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}

                                                {project.details?.role && (
                                                    <div className="flex items-start gap-3">
                                                        <svg className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                        </svg>
                                                        <div>
                                                            <p className="text-xs text-gold-400/60 uppercase tracking-wider mb-1">
                                                                Role
                                                            </p>
                                                            <p className="text-gold-100 font-medium">
                                                                {project.details.role}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}

                                                {project.details?.client && (
                                                    <div className="flex items-start gap-3">
                                                        <svg className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                        </svg>
                                                        <div>
                                                            <p className="text-xs text-gold-400/60 uppercase tracking-wider mb-1">
                                                                Client
                                                            </p>
                                                            <p className="text-gold-100 font-medium">
                                                                {project.details.client}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Quick Stats */}
                                        <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-gold-400/10">
                                            <div className="text-center">
                                                <p className="text-4xl font-serif font-bold text-gold-300 mb-2">
                                                    {project.images.length}
                                                </p>
                                                <p className="text-sm text-gold-400/60 uppercase tracking-wider">
                                                    Images
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Lightbox */}
                    <AnimatePresence>
                        {isLightboxOpen && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setIsLightboxOpen(false)}
                                    className="fixed inset-0 bg-black/98 z-[80] backdrop-blur-sm"
                                />

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ type: "spring", damping: 25 }}
                                    className="fixed inset-0 z-[90] flex items-center justify-center p-4"
                                >
                                    <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
                                        <Image
                                            src={project.images[selectedImageIndex]}
                                            alt={`Full view ${selectedImageIndex + 1}`}
                                            fill
                                            className="object-contain"
                                        />

                                        {/* Close Lightbox */}
                                        <button
                                            onClick={() => setIsLightboxOpen(false)}
                                            className="absolute top-4 right-4 p-3 rounded-full bg-black/70 backdrop-blur-md border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-black transition-all"
                                        >
                                            <X className="w-6 h-6" />
                                        </button>

                                        {/* Navigation */}
                                        {project.images.length > 1 && (
                                            <>
                                                <button
                                                    onClick={prevImage}
                                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 backdrop-blur-md border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-black transition-all"
                                                >
                                                    <ChevronLeft className="w-6 h-6" />
                                                </button>

                                                <button
                                                    onClick={nextImage}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 backdrop-blur-md border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-black transition-all"
                                                >
                                                    <ChevronRight className="w-6 h-6" />
                                                </button>
                                            </>
                                        )}

                                        {/* Image Counter */}
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-gold-400/30 text-gold-300 text-sm">
                                            {selectedImageIndex + 1} / {project.images.length}
                                        </div>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </>
            )}
        </AnimatePresence>
    );
}
