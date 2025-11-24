"use client";

import { useEffect } from "react";
import { themeColors } from "../../config";

export default function ThemeProvider() {
    useEffect(() => {
        const root = document.documentElement;

        // Set colors from config
        root.style.setProperty("--primary", themeColors.primary);
        root.style.setProperty("--primary-light", themeColors.primaryLight);
        root.style.setProperty("--primary-dark", themeColors.primaryDark);
        root.style.setProperty("--background", themeColors.background);
        root.style.setProperty("--background-alt", themeColors.backgroundAlt);
        root.style.setProperty("--text-primary", themeColors.textPrimary);
        root.style.setProperty("--text-secondary", themeColors.textSecondary);
        root.style.setProperty("--text-muted", themeColors.textMuted);
        root.style.setProperty("--accent", themeColors.accent);
        root.style.setProperty("--border-color", themeColors.border);

    }, []);

    return null; // This component doesn't render anything visible
}
