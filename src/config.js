/**
 * =============================================================================
 * THEME CONFIGURATION FILE
 * =============================================================================
 * 
 * This is the main configuration file for the Portfolio Theme.
 * Customize all settings, content, and colors from this single file.
 * 
 * IMPORTANT: After making changes, restart your development server.
 */

// =============================================================================
// SITE METADATA
// =============================================================================
export const siteConfig = {
    siteName: "Portfolio",
    siteTitle: "Nivan Dev - Architecture & Design Portfolio",
    siteDescription: "Professional architecture and design portfolio showcasing innovative projects and creative solutions.",
    siteUrl: "https://yourwebsite.com", // Update with your actual URL
    author: "Axit Sompura",

    // SEO Keywords
    keywords: [
        "architecture",
        "design",
        "portfolio",
        "architect",
        "interior design",
        "3D visualization"
    ]
};

// =============================================================================
// THEME COLORS
// =============================================================================
// The theme uses a sophisticated black and gold color palette.
// Modify these values to customize the theme colors.
export const themeColors = {
    // Primary brand color (Gold)
    primary: "#D4AF37",           // Main gold color
    primaryLight: "#F4E4B8",      // Lighter gold for highlights
    primaryDark: "#B8960F",        // Darker gold for accents

    // Background colors
    background: "#000000",        // Main background (black)
    backgroundAlt: "#0a0a0a",     // Alternative background

    // Text colors
    textPrimary: "#ffffff",       // Main text color (white)
    textSecondary: "#b0b0b0",     // Secondary text color (gray)
    textMuted: "#808080",         // Muted text color

    // Accent colors
    accent: "#D4AF37",            // Accent color (matches primary)
    border: "rgba(212, 175, 55, 0.2)", // Border color with opacity

    // Cursor colors
    cursorPrimary: "#D4AF37",
    cursorSecondary: "rgba(212, 175, 55, 0.3)"
};

// =============================================================================
// PERSONAL INFORMATION
// =============================================================================
export const personalInfo = {
    // Hero Section
    firstName: "Nivan",
    lastName: "Dev",
    tagline: "Architecture & Design",
    description: "Passionate architect with 3+ years of experience in creating innovative and sustainable design solutions. Specializing in residential and commercial architecture with a focus on modern aesthetics.",
    location: "Ontario, Canada",
    yearsExperience: "3+",

    // Profile Images
    profileImage: "/profile.png",          // Main profile image
    heroImage: "/Nivan1.png",            // Hero section image

    // CV/Resume
    cvFile: "/cv/cv.pdf",     // Path to your CV/Resume file

    // Contact Information
    email: "nivan.dev@example.com",
    phone: "+1 234-567-8900",
    address: "Ontario, Canada",

    // Social Media Links
    social: {
        linkedin: "https://linkedin.com/in/nivandev",
    }
};

// =============================================================================
// NAVIGATION MENU
// =============================================================================
export const navigationMenu = [
    { id: "hero", label: "Home" },
    { id: "introduction", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
];

// =============================================================================
// INTRODUCTION SECTION
// =============================================================================
export const introduction = {
    title: "About Me",
    paragraphs: [
        "I am a passionate architect with over 5 years of experience in creating innovative and sustainable design solutions. My expertise spans residential, commercial, and mixed-use developments.",
        "With a keen eye for detail and a commitment to excellence, I transform visions into reality through thoughtful design and meticulous planning. My approach combines modern aesthetics with functional efficiency.",
        "I believe in creating spaces that not only meet client needs but also enhance the human experience and contribute positively to the built environment."
    ],
    stats: [
        { number: "50+", label: "Projects Completed" },
        { number: "5+", label: "Years Experience" },
        { number: "30+", label: "Happy Clients" },
        { number: "15+", label: "Awards Won" }
    ]
};

// =============================================================================
// SKILLS SECTION
// =============================================================================
export const skills = {
    title: "Skills & Expertise",
    categories: [
        {
            category: "Design Software",
            items: [
                { name: "AutoCAD", level: 95 },
                { name: "Revit", level: 90 },
                { name: "SketchUp", level: 88 },
                { name: "3ds Max", level: 85 },
                { name: "V-Ray", level: 87 },
                { name: "Photoshop", level: 92 }
            ]
        },
        {
            category: "Core Skills",
            items: [
                { name: "Architectural Design", level: 95 },
                { name: "3D Visualization", level: 90 },
                { name: "Interior Design", level: 88 },
                { name: "Urban Planning", level: 82 },
                { name: "Sustainable Design", level: 85 },
                { name: "Project Management", level: 87 }
            ]
        }
    ]
};

// =============================================================================
// EDUCATION SECTION
// =============================================================================
export const education = {
    title: "Education & Certifications",
    items: [
        {
            degree: "Master of Architecture",
            institution: "Demo University",
            location: "Ontario, Canada",
            period: "2015 - 2017",
            description: "Specialized in sustainable architecture and urban design. Thesis on eco-friendly residential complexes.",
            achievements: [
                "GPA: 3.9/4.0",
                "Dean's List - All Semesters",
                "Best Thesis Award 2017"
            ]
        },
        {
            degree: "Bachelor of Architecture",
            institution: "Demo University",
            location: "Ontario, Canada",
            period: "2011 - 2015",
            description: "Foundation in architectural principles, design theory, and building technology.",
            achievements: [
                "First Class Honors",
                "Student Design Competition Winner",
                "Published research on modern architecture"
            ]
        },
        {
            degree: "Certification in Sustainable Building Design",
            institution: "Demo University",
            location: "Online",
            period: "2018",
            description: "Certification in sustainable building design and green building practices.",
            achievements: [
                "Certified Professional",
                "Sustainable Design Specialist"
            ]
        }
    ]
};

// =============================================================================
// PROJECTS SECTION
// =============================================================================
export const projects = {
    title: "Featured Projects",
    items: [
        {
            id: 1,
            title: "Modern Residential Complex 1",
            category: "Residential",
            location: "Toronto, Canada",
            year: "2023",
            image: "/project-1.png",
            thumbnail: "/project-1.png",
            description: "A contemporary residential complex featuring sustainable design principles and modern aesthetics. This project integrates green spaces with urban living.",
            details: {
                client: "Urban Developers Inc.",
                area: "45,000 sq ft",
                duration: "18 months",
                role: "Lead Architect"
            },
            features: [
                "LEED Platinum Certified",
                "120 Residential Units",
                "Rooftop Gardens",
                "Smart Home Integration",
                "Energy-efficient Design"
            ],
            challenges: "Designing a high-density residential complex while maintaining open green spaces and natural light in all units.",
            solution: "Implemented a unique stepped building design with internal courtyards and vertical gardens.",
            images: ["/project-1.png", "/building-1.png", "/building-4.png"],
            showModal: true
        },
        {
            id: 2,
            title: "This is a Project for Residential 2",
            category: "Residential",
            location: "Toronto, Canada",
            year: "2023",
            image: "/project-1.png",
            thumbnail: "/project-1.png",
            description: "A contemporary residential complex featuring sustainable design principles and modern aesthetics. This project integrates green spaces with urban living.",
            details: {
                client: "Urban Developers Inc.",
                area: "45,000 sq ft",
                duration: "18 months",
                role: "Lead Architect"
            },
            features: [
                "LEED Platinum Certified",
                "120 Residential Units",
                "Rooftop Gardens",
                "Smart Home Integration",
                "Energy-efficient Design"
            ],
            challenges: "Designing a high-density residential complex while maintaining open green spaces and natural light in all units.",
            solution: "Implemented a unique stepped building design with internal courtyards and vertical gardens.",
            images: ["/project-1.png", "/building-1.png", "/building-4.png"],
            showModal: true
        },
        {
            id: 3,
            title: "Commercial Office Tower 3",
            category: "Commercial",
            location: "Vancouver, Canada",
            year: "2022",
            image: "/project-2.png",
            thumbnail: "/project-2.png",
            description: "A 20-story office tower designed with sustainability and employee wellness in mind. Features include ample natural light, open collaborative spaces, and green terraces.",
            details: {
                client: "TechCorp Global",
                area: "250,000 sq ft",
                duration: "24 months",
                role: "Senior Architect"
            },
            features: [
                "20 Stories",
                "LEED Gold Certified",
                "Sky Gardens on Multiple Floors",
                "Advanced HVAC System",
                "Flexible workspace design"
            ],
            challenges: "Creating a modern office environment that promotes collaboration while providing quiet spaces for focused work.",
            solution: "Designed flexible floor plans with modular spaces that can be reconfigured based on team needs.",
            images: ["/project-2.png", "/building-4.png"],
            showModal: true
        },
        {
            id: 4,
            title: "Cultural Center & Museum 4",
            category: "Cultural",
            location: "Montreal, Canada",
            year: "2021",
            image: "/project-3.png",
            thumbnail: "/project-3.png",
            description: "An iconic cultural center celebrating local heritage through contemporary architecture. The design merges traditional elements with modern materials.",
            details: {
                client: "City of Montreal",
                area: "85,000 sq ft",
                duration: "30 months",
                role: "Design Director"
            },
            features: [
                "Exhibition Halls",
                "Performance Theater",
                "Interactive Learning Spaces",
                "Public Plaza & Gardens",
                "Sustainable Materials"
            ],
            challenges: "Honoring cultural heritage while creating a forward-thinking architectural statement.",
            solution: "Incorporated traditional patterns and materials in a contemporary structural form.",
            images: ["/project-3.png", "/building-1.png"],
            showModal: true
        },
        {
            id: 5,
            title: "Luxury Resort & Spa 5",
            category: "Hospitality",
            location: "Banff, Canada",
            year: "2020",
            image: "/project-4.png",
            thumbnail: "/project-4.png",
            description: "An exclusive mountain resort that harmonizes with the natural landscape. Features luxury accommodations, wellness facilities, and sustainable design.",
            details: {
                client: "Premium Resorts Group",
                area: "120,000 sq ft",
                duration: "36 months",
                role: "Lead Designer"
            },
            features: [
                "50 Luxury Suites",
                "Full-service Spa",
                "Infinity Pool",
                "Farm-to-table Restaurant",
                "Minimal Environmental Impact"
            ],
            challenges: "Building in a protected natural area while minimizing environmental disruption.",
            solution: "Used local materials, elevated structures to preserve landscapes, and integrated renewable energy systems.",
            images: ["/project-4.png", "/building-4.png"],
            showModal: true
        }
    ]
};

// =============================================================================
// CONTACT SECTION
// =============================================================================
export const contactInfo = {
    title: "Get In Touch",
    subtitle: "Let's discuss your next project",
    email: personalInfo.email,
    phone: personalInfo.phone,
    location: personalInfo.address,

    // Contact Form Settings
    formEnabled: true,
    formAction: "/api/contact", // Update with your form handler endpoint

    // Social Links (same as personal info)
    social: personalInfo.social
};

// =============================================================================
// ANIMATION SETTINGS
// =============================================================================
export const animationConfig = {
    // Smooth scroll settings
    smoothScroll: {
        duration: 1.2,
        easing: "easeInOutCubic"
    },

    // Cursor settings
    customCursor: {
        enabled: true,
        size: 10,
        borderWidth: 2,
        animationSpeed: 0.15
    },

    // Page transition settings
    pageTransitions: {
        duration: 0.6,
        ease: "easeInOut"
    }
};

// =============================================================================
// FEATURE FLAGS
// =============================================================================
export const features = {
    showCustomCursor: true,        // Enable/disable custom cursor
    showSmoothScroll: true,        // Enable/disable smooth scrolling
    showScrollIndicators: true,    // Enable/disable left side scroll line
    showRightSideMenu: true,       // Enable/disable right side navigation
    showDownloadCV: true,          // Show download CV button
    showContactForm: true,         // Show contact form
    showSocialLinks: true,         // Show social media links
    showProjectModal: true         // Enable/disable project detail modals
};

// =============================================================================
// EXPORT ALL CONFIGURATIONS
// =============================================================================
export default {
    siteConfig,
    themeColors,
    personalInfo,
    navigationMenu,
    introduction,
    skills,
    education,
    projects,
    contactInfo,
    animationConfig,
    features
};
