"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const cursorXSpring = useSpring(cursorX, { stiffness: 500, damping: 28 });
    const cursorYSpring = useSpring(cursorY, { stiffness: 500, damping: 28 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);
        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        const hoverElements = document.querySelectorAll("a, button");
        hoverElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            hoverElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, [cursorX, cursorY]);

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block">
            {/* Crosshair Lines */}
            <motion.div
                className="absolute h-full w-[1px] bg-gold-400/30"
                style={{ x: cursorXSpring }}
            />
            <motion.div
                className="absolute w-full h-[1px] bg-gold-400/30"
                style={{ y: cursorYSpring }}
            />

            {/* Center Dot */}
            <motion.div
                className="absolute top-0 left-0 w-4 h-4 -ml-2 -mt-2 rounded-full border border-gold-400"
                style={{ x: cursorXSpring, y: cursorYSpring }}
                animate={{
                    scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? "rgba(212, 175, 55, 0.1)" : "transparent",
                }}
            />

            {/* Ripple Effect on Click */}
            {isClicking && (
                <motion.div
                    className="absolute top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-gold-400/50"
                    style={{ x: cursorXSpring, y: cursorYSpring }}
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                />
            )}
        </div>
    );
}
