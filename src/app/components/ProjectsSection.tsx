"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { ArrowRight, ExternalLink } from "lucide-react";
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

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const handleOpenModal = (project: any) => {
        console.log('handleOpenModal called with project:', project);
        console.log('Project ID:', project?.id, 'Project Title:', project?.title);

        // Check if project modals are enabled
        if (!features.showProjectModal) {
            console.log('Project modals are disabled in config');
            return;
        }

        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <section
            id="projects"
            ref={containerRef}
            className="relative min-h-screen py-32 px-4 flex items-center justify-center overflow-hidden bg-background"
        >
            {/* Parallax Background Grid */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 opacity-20"
            >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4 md:px-12">
                    <motion.div
                        style={{ opacity }}
                        className="text-center md:text-left"
                    >
                        <h2 className="text-5xl md:text-6xl font-serif font-bold text-gold-200 mb-6">
                            {projects.title}
                        </h2>
                        <p className="text-gold-300 text-xl max-w-2xl font-light">
                            Curated architectural narratives and design explorations.
                        </p>
                    </motion.div>

                    {/* Custom Navigation */}
                    <div className="flex gap-4 mt-8 md:mt-0">
                        <button
                            onClick={() => swiperInstance?.slidePrev()}
                            className="p-4 rounded-full border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-black transition-all duration-300"
                        >
                            <ArrowRight className="w-6 h-6 rotate-180" />
                        </button>
                        <button
                            onClick={() => swiperInstance?.slideNext()}
                            className="p-4 rounded-full border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-black transition-all duration-300"
                        >
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className="w-full px-4 md:px-12">
                    <Swiper
                        onSwiper={setSwiperInstance}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        pagination={false}
                        navigation={false}
                        slideToClickedSlide={true}
                        preventClicks={false}
                        preventClicksPropagation={false}
                        touchStartPreventDefault={false}
                        watchSlidesProgress={true}
                        observer={true}
                        observeParents={true}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        className="w-full py-12 !pb-16"
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {projects.items.map((project) => (
                            <SwiperSlide key={project.id} className="!w-[300px] sm:!w-[400px] md:!w-[450px]">
                                <div
                                    onClick={() => handleOpenModal(project)}
                                    className="group relative h-[500px] rounded-2xl overflow-hidden border border-gold-400/20 bg-zinc-900/80 backdrop-blur-sm transition-all duration-500 hover:border-gold-400/50 hover:shadow-2xl hover:shadow-gold-400/10 cursor-pointer"
                                >

                                    {/* Image Container */}
                                    <div className="relative h-3/5 w-full overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80" />

                                        {/* Overlay Content */}
                                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-gold-400/30">
                                            <span className="text-xs font-medium text-gold-300 uppercase tracking-wider">
                                                {project.location.split(',')[1] || project.location}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Container */}
                                    <div className="relative h-2/5 p-6 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-2xl font-serif text-gold-100 mb-2 group-hover:text-gold-300 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-gold-400/60 text-sm line-clamp-2 leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gold-400/10">
                                            <div className="flex gap-2">
                                                {project.features.slice(0, 2).map((feature, i) => (
                                                    <span key={i} className="text-[10px] px-2 py-1 rounded bg-gold-400/5 text-gold-400/80 border border-gold-400/10">
                                                        {feature}
                                                    </span>
                                                ))}
                                                {project.features.length > 2 && (
                                                    <span className="text-[10px] px-2 py-1 rounded bg-gold-400/5 text-gold-400/80 border border-gold-400/10">
                                                        +{project.features.length - 2}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex items-center gap-2 text-gold-400 text-sm font-medium uppercase tracking-wider hover:text-white transition-colors group/btn pointer-events-none">
                                                View More
                                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}
