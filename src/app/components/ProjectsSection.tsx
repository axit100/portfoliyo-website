"use client";

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";
import ProjectModal from "./ProjectModal";
import { projects, features } from "../../config";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function ProjectsSection() {
    const containerRef = useRef(null);
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [swiperInstance, setSwiperInstance] = useState<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const handleOpenModal = (project: any) => {
        if (!features.showProjectModal) {
            return;
        }
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <section
            id="projects"
            ref={containerRef}
            className="relative min-h-screen px-4 flex items-center justify-center overflow-hidden bg-background"
        >
            {/* Animated Parallax Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 opacity-20"
            >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
            </motion.div>

            <div className="relative z-10 max-w-[1600px] mx-auto w-full">
                {/* Header Section */}
                <motion.div
                    style={{ opacity }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-400/30 bg-gold-400/5 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-gold-400" />
                        <span className="text-sm text-gold-300 uppercase tracking-wider">Featured Work</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-gold-200 mb-6"
                    >
                        {projects.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gold-300/80 text-xl max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        Curated architectural narratives merging innovation with timeless design principles.
                    </motion.p>
                </motion.div>

                {/* Slider Container */}
                <div className="relative">
                    {/* Custom Navigation Buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 pointer-events-none">
                        <div className="max-w-[1800px] mx-auto px-4 flex justify-between">
                            <motion.button
                                onClick={() => swiperInstance?.slidePrev()}
                                whileHover={{ scale: 1.1, x: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className="pointer-events-auto group relative p-4 rounded-full border-2 border-gold-400/30 bg-black/60 backdrop-blur-md text-gold-400 hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300 shadow-lg hover:shadow-gold-400/20"
                            >
                                <ChevronLeft className="w-7 h-7" />
                                <div className="absolute inset-0 rounded-full bg-gold-400/20 blur-xl group-hover:bg-gold-400/40 transition-all duration-300" />
                            </motion.button>

                            <motion.button
                                onClick={() => swiperInstance?.slideNext()}
                                whileHover={{ scale: 1.1, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="pointer-events-auto group relative p-4 rounded-full border-2 border-gold-400/30 bg-black/60 backdrop-blur-md text-gold-400 hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300 shadow-lg hover:shadow-gold-400/20"
                            >
                                <ChevronRight className="w-7 h-7" />
                                <div className="absolute inset-0 rounded-full bg-gold-400/20 blur-xl group-hover:bg-gold-400/40 transition-all duration-300" />
                            </motion.button>
                        </div>
                    </div>

                    {/* Swiper Slider */}
                    <Swiper
                        onSwiper={setSwiperInstance}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 150,
                            modifier: 2,
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed={600}
                        loop={true}
                        pagination={false}
                        navigation={false}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        className="!py-16 !pb-24"
                    >
                        {projects.items.map((project, index) => (
                            <SwiperSlide
                                key={project.id}
                                className="!w-[320px] sm:!w-[420px] md:!w-[520px]"
                            >
                                {({ isActive }) => (
                                    <motion.div
                                        onClick={() => handleOpenModal(project)}
                                        initial={{ opacity: 0.7, scale: 0.95 }}
                                        animate={{
                                            opacity: isActive ? 1 : 0.7,
                                            scale: isActive ? 1 : 0.95,
                                            y: isActive ? 0 : 20,
                                        }}
                                        transition={{ duration: 0.5 }}
                                        className="group relative h-[600px] rounded-3xl overflow-hidden cursor-pointer"
                                    >
                                        {/* Glassmorphism Card */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/90 via-zinc-900/80 to-black/90 backdrop-blur-xl border-2 border-gold-400/20 group-hover:border-gold-400/50 transition-all duration-500">
                                            {/* Animated Golden Glow */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="absolute inset-0 bg-gradient-to-br from-gold-400/10 via-transparent to-gold-400/5" />
                                                <div className="absolute -inset-[100%] bg-gradient-conic from-gold-400/20 via-transparent to-gold-400/20 blur-3xl animate-spin-slow" />
                                            </div>

                                            {/* Image Container */}
                                            <div className="relative h-[65%] w-full overflow-hidden">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                                />

                                                {/* Gradient Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />

                                                {/* Location Badge */}
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.2 }}
                                                    className="absolute top-6 right-6 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-gold-400/30"
                                                >
                                                    <span className="text-xs font-medium text-gold-300 uppercase tracking-widest">
                                                        {project.location.split(',')[1]?.trim() || project.location}
                                                    </span>
                                                </motion.div>

                                                {/* Hover Shine Effect */}
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                                </div>
                                            </div>

                                            {/* Content Container */}
                                            <div className="relative h-[35%] p-8 flex flex-col justify-between">
                                                <div className="space-y-4">
                                                    <motion.h3
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.3 }}
                                                        className="text-3xl font-serif text-gold-100 group-hover:text-gold-200 transition-colors duration-300 leading-tight"
                                                    >
                                                        {project.title}
                                                    </motion.h3>

                                                    <motion.p
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.4 }}
                                                        className="text-gold-300/70 text-sm line-clamp-2 leading-relaxed"
                                                    >
                                                        {project.description}
                                                    </motion.p>
                                                </div>

                                                {/* Features & CTA */}
                                                <div className="flex items-center justify-between pt-4 border-t border-gold-400/10">
                                                    <div className="flex gap-2">
                                                        {project.features.slice(0, 2).map((feature: string, i: number) => (
                                                            <span
                                                                key={i}
                                                                className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-gold-400/10 text-gold-400/90 border border-gold-400/20"
                                                            >
                                                                {feature}
                                                            </span>
                                                        ))}
                                                        {project.features.length > 2 && (
                                                            <span className="px-3 py-1 rounded-full text-[10px] font-medium bg-gold-400/10 text-gold-400/90 border border-gold-400/20">
                                                                +{project.features.length - 2}
                                                            </span>
                                                        )}
                                                    </div>

                                                    <motion.div
                                                        whileHover={{ x: 5 }}
                                                        className="flex items-center gap-2 text-gold-400 text-sm font-medium uppercase tracking-wider"
                                                    >
                                                        <span>Explore</span>
                                                        <ChevronRight className="w-4 h-4" />
                                                    </motion.div>
                                                </div>
                                            </div>

                                            {/* Floating Particles Effect */}
                                            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                {[
                                                    { left: 15, top: 20, delay: 0 },
                                                    { left: 45, top: 60, delay: 0.5 },
                                                    { left: 75, top: 35, delay: 1 },
                                                    { left: 30, top: 80, delay: 1.5 },
                                                    { left: 85, top: 15, delay: 0.8 },
                                                    { left: 60, top: 50, delay: 1.2 }
                                                ].map((particle, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="absolute w-1 h-1 bg-gold-400/40 rounded-full"
                                                        style={{
                                                            left: `${particle.left}%`,
                                                            top: `${particle.top}%`,
                                                        }}
                                                        animate={{
                                                            y: [0, -20, 0],
                                                            opacity: [0, 1, 0],
                                                        }}
                                                        transition={{
                                                            duration: 3,
                                                            repeat: Infinity,
                                                            delay: particle.delay,
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Card Shadow */}
                                        <div className="absolute -inset-4 bg-gold-400/10 blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </motion.div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>

            {/* Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}
