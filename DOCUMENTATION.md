# Portfolio Theme - Complete Documentation

> **Version:** 1.0.1  
> **Author:** Nivan/Dev  
> **Framework:** Next.js 16.0.3  
> **License:** Regular/Extended License

---

## Table of Contents

1. [Introduction](#introduction)
2. [Requirements](#requirements)
3. [Installation](#installation)
4. [Project Structure](#project-structure)
5. [Customization Guide](#customization-guide)
6. [Components Overview](#components-overview)
7. [Deployment](#deployment)
8. [Troubleshooting](#troubleshooting)
9. [Credits & Third-Party Assets](#credits--third-party-assets)
10. [Support](#support)

---

## Introduction

Thank you for purchasing the **Portfolio Theme**! This is a premium Next.js portfolio template designed for architects, designers, and creative professionals. The theme features:

✨ **Modern Design** - Sophisticated black and gold color scheme  
⚡ **High Performance** - Built with Next.js 16 for optimal speed  
🎨 **Easy Customization** - Single configuration file for all settings  
📱 **Fully Responsive** - Perfect on all devices  
✨ **Smooth Animations** - Custom cursor and smooth scrolling  
🎯 **SEO Optimized** - Built-in SEO best practices  

---

## Requirements

Before installing the theme, ensure your system meets these requirements:

- **Node.js:** Version 18.17 or higher ([Download Node.js](https://nodejs.org/))
- **npm:** Version 9.0 or higher (comes with Node.js)
- **Code Editor:** VS Code, Sublime Text, or similar
- **Modern Browser:** Chrome, Firefox, Safari, or Edge

### Verifying Installation

Open your terminal/command prompt and run:

```bash
node --version
npm --version
```

You should see version numbers displayed. If not, install Node.js first.

---

## Installation

Follow these steps to install and run the theme:

### Step 1: Extract Files

Extract the downloaded ZIP file to your desired location.

### Step 2: Open Terminal

Navigate to the theme folder:

```bash
cd path/to/Nivan-portfolio
```

### Step 3: Install Dependencies

Install all required packages:

```bash
npm install
```

This process may take 2-5 minutes depending on your internet connection.

### Step 4: Run Development Server

Start the development server:

```bash
npm run dev
```

### Step 5: View Your Site

Open your browser and go to:

```
http://localhost:3000
```

You should see the portfolio homepage! 🎉

---

## Project Structure

Understanding the project structure helps you customize effectively:

```
Nivan-portfolio/
├── public/                      # Static files (images, CV, etc.)
│   ├── cv/                     # Your CV/Resume files
│   ├── profile.png             # Profile images
│   ├── project-*.png           # Project images
│   └── ...
├── src/
│   ├── app/
│   │   ├── components/         # React components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── ...
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Homepage
│   └── config.js               # ⭐ MAIN CONFIGURATION FILE
├── package.json                # Dependencies
├── next.config.ts              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

### Key Files

- **`src/config.js`** - Main configuration file (customize here first!)
- **`src/app/globals.css`** - Global styles and theme colors
- **`src/app/components/`** - All page sections
- **`public/`** - Add your images and files here

---

## Customization Guide

### Quick Start: Using the Configuration File

The easiest way to customize the theme is through `src/config.js`. This file contains all your content and settings.

#### 1. Personal Information

Edit your personal details:

```javascript
export const personalInfo = {
  firstName: "Your First Name",
  lastName: "Your Last Name",
  tagline: "Your Professional Title",
  description: "Your bio/description here",
  location: "Your City, Country",
  yearsExperience: "5+",
  
  email: "your.email@example.com",
  phone: "+1 234-567-8900",
  
  social: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    // Leave empty to hide: twitter: "",
  }
};
```

#### 2. Theme Colors

Change the color scheme:

```javascript
export const themeColors = {
  primary: "#D4AF37",           // Gold color
  background: "#000000",        // Black background
  textPrimary: "#ffffff",       // White text
  // Modify any color value
};
```

**Popular Color Schemes:**

- **Blue & White:** `primary: "#2563eb"`
- **Purple & Dark:** `primary: "#9333ea"`
- **Teal & Black:** `primary: "#14b8a6"`
- **Rose Gold:** `primary: "#E5A3A3"`

#### 3. Update Your Images

Replace the example images in the `public/` folder:

| Image File | Purpose | Recommended Size |
|------------|---------|------------------|
| `profile.png` | Profile photo | 500x500px |
| `Nivan1.png` | Hero section | 800x1000px |
| `project-1.png` through `project-4.png` | Project thumbnails | 1200x800px |
| `cv/YourName.pdf` | Your CV/Resume | PDF format |

**After replacing images**, update the paths in `config.js`:

```javascript
export const personalInfo = {
  profileImage: "/your-profile.png",
  heroImage: "/your-hero-image.png",
  cvFile: "/cv/YourCV.pdf",
};
```

#### 4. Update Projects

Edit your project portfolio in `config.js`:

```javascript
export const projects = {
  items: [
    {
      id: 1,
      title: "Your Project Name",
      category: "Residential/Commercial/etc",
      location: "City, Country",
      year: "2024",
      image: "/your-project-image.png",
      description: "Project description...",
      details: {
        client: "Client Name",
        area: "10,000 sq ft",
        duration: "12 months",
        role: "Your Role"
      },
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3"
      ]
    },
    // Add more projects...
  ]
};
```

#### 5. Update Skills & Education

Modify your skills:

```javascript
export const skills = {
  categories: [
    {
      category: "Your Skill Category",
      items: [
        { name: "Skill Name", level: 85 },  // Level: 0-100
        // Add more skills...
      ]
    }
  ]
};
```

Update education:

```javascript
export const education = {
  items: [
    {
      degree: "Your Degree",
      institution: "University Name",
      location: "City, Country",
      period: "2020 - 2024",
      description: "Description of your studies",
      achievements: ["Achievement 1", "Achievement 2"]
    }
  ]
};
```

#### 6. Navigation Menu

Customize the navigation:

```javascript
export const navigationMenu = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Portfolio" },
  { id: "contact", label: "Contact" }
];
```

**Note:** The `id` must match the section ID in your components.

---

### Advanced Customization

#### Changing Fonts

1. Open `src/app/layout.tsx`
2. Find the font import:

```typescript
import { Montserrat, Playfair_Display } from 'next/font/google';
```

3. Replace with your preferred Google Font:

```typescript
import { Inter, Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
```

4. Update the font in the body tag:

```typescript
<body className={inter.className}>
```

Popular font combinations:
- **Modern:** Inter + Poppins
- **Elegant:** Playfair Display + Lato
- **Professional:** Roboto + Open Sans
- **Creative:** Montserrat + Merriweather

#### Modifying Animations

Edit animation settings in `config.js`:

```javascript
export const animationConfig = {
  smoothScroll: {
    duration: 1.2,        // Scroll speed (seconds)
    easing: "easeInOutCubic"
  },
  
  customCursor: {
    enabled: true,        // Set false to disable
    size: 10,
    borderWidth: 2,
    animationSpeed: 0.15
  }
};
```

#### Disabling Features

Control features via `config.js`:

```javascript
export const features = {
  showCustomCursor: true,        // Custom cursor
  showSmoothScroll: true,        // Smooth scrolling
  showScrollIndicators: true,    // Left scroll line
  showRightSideMenu: true,       // Right navigation
  showDownloadCV: true,          // Download CV button
  showProjectModal: true,        // Project detail modals
};
```

#### Custom CSS Styles

Add custom styles to `src/app/globals.css`:

```css
/* Add your custom styles here */
.my-custom-class {
  /* Your styles */
}

/* Override existing styles */
.hero-section {
  /* Custom modifications */
}
```

---

## Components Overview

### HeroSection.tsx

The main landing section with your name and introduction.

**Customization:**
- Edit content in `config.js` → `personalInfo`
- Modify styling in the component file
- Change background effect in `globals.css`

### IntroductionSection.tsx

About section with your bio and statistics.

**Customization:**
- Update content in `config.js` → `introduction`
- Modify stats in the configuration

### SkillsSection.tsx

Displays your skills with progress bars.

**Customization:**
- Edit skills in `config.js` → `skills`
- Skill levels range from 0-100

### EducationSection.tsx

Education and certification timeline.

**Customization:**
- Update in `config.js` → `education`
- Add/remove education entries

### ProjectsSection.tsx

Portfolio/project gallery with modal details.

**Customization:**
- Update in `config.js` → `projects`
- Add project images to `public/` folder

### ContactSection.tsx

Contact information and social links.

**Customization:**
- Update in `config.js` → `contactInfo`
- Modify email/phone/social links

### CustomCursor.tsx

Animated custom cursor component.

**Customization:**
- Disable in `config.js` → `features.showCustomCursor`
- Modify appearance in component file

### SmoothScroll.tsx

Smooth scrolling functionality using Lenis.

**Customization:**
- Configure in `config.js` → `animationConfig`

---

## Deployment

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. Create a free account at [vercel.com](https://vercel.com)
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Run deployment:
   ```bash
   vercel
   ```
4. Follow the prompts - your site will be live in minutes!

**Automatic Deployments:**
- Connect your GitHub repository
- Vercel auto-deploys on every push

### Option 2: Netlify

1. Build your project:
   ```bash
   npm run build
   ```
2. Create account at [netlify.com](https://netlify.com)
3. Drag and drop the `.next` folder
4. Your site is live!

### Option 3: Custom Server

1. Build the production version:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm run start
   ```
3. Use PM2 or similar for process management
4. Configure your web server (Nginx/Apache)

### Environment Variables

If using environment variables, create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://yourwebsite.com
NEXT_PUBLIC_API_URL=https://api.yourwebsite.com
```

---

## Troubleshooting

### Common Issues

#### Port 3000 Already in Use

**Error:** `Port 3000 is already in use`

**Solution:**
```bash
# Kill the process using port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

#### Module Not Found Errors

**Error:** `Cannot find module 'xyz'`

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

#### Build Fails

**Error:** Build errors during `npm run build`

**Solution:**
1. Check for TypeScript errors
2. Run linter: `npm run lint`
3. Clear Next.js cache:
   ```bash
   rm -rf .next
   npm run build
   ```

#### Images Not Loading

**Problem:** Images showing as broken

**Solution:**
- Ensure images are in `public/` folder
- Use correct paths (start with `/`)
- Check file names match exactly (case-sensitive)
- Verify image formats (PNG, JPG, WebP supported)

#### Smooth Scrolling Not Working

**Problem:** Page jumps instead of smooth scroll

**Solution:**
- Check `features.showSmoothScroll` is `true` in config
- Clear browser cache
- Ensure Lenis library is installed

#### Custom Cursor Not Appearing

**Solution:**
- Set `features.showCustomCursor` to `true`
- Check if you're on a touch device (cursor disabled on mobile)
- Clear browser cache
 
 #### Background Color Not Changing
 
 **Problem:** Changing `themeColors.background` in config doesn't affect the site.
 
 **Solution:**
 - Ensure you are using version 1.0.1 or later.
 - We have updated all components to use the dynamic `bg-background` class instead of hardcoded colors.
 
 #### Project Slider Buttons Not Working
 
 **Problem:** "View More" buttons on side slides are unclickable.
 
 **Solution:**
 - This is fixed in version 1.0.1.
 - We disabled `slideShadows` and improved click handling in the Swiper configuration.

### Getting Help

If you encounter issues not listed here:

1. Check the [Next.js Documentation](https://nextjs.org/docs)
2. Search for error messages online
3. Contact support (see Support section)

---

## Credits & Third-Party Assets

This theme uses the following open-source libraries and resources:

### Core Technologies

- **[Next.js](https://nextjs.org/)** - React framework (MIT License)
- **[React](https://react.dev/)** - UI library (MIT License)
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript (Apache 2.0)
- **[Tailwind CSS](https://tailwindcss.com/)** - CSS framework (MIT License)

### Animation & Effects

- **[Framer Motion](https://www.framer.com/motion/)** - Animation library (MIT License)
- **[Lenis](https://lenis.studiofreight.com/)** - Smooth scroll library (MIT License)
- **[Lucide React](https://lucide.dev/)** - Icon library (ISC License)

### UI Components

- **[Swiper](https://swiperjs.com/)** - Touch slider (MIT License)

### Fonts

- **[Google Fonts](https://fonts.google.com/)** - Montserrat, Playfair Display (Open Font License)

### Images & Assets

**IMPORTANT:** The example images included in this theme are placeholders. For commercial use, you must:

1. Replace all profile/project images with your own
2. Use royalty-free images from:
   - [Unsplash](https://unsplash.com/) - Free high-quality images
   - [Pexels](https://pexels.com/) - Free stock photos
   - [Pixabay](https://pixabay.com/) - Free images and vectors

### License Information

All third-party libraries are licensed under permissive open-source licenses (MIT, Apache 2.0, ISC). You may use this theme for commercial projects according to your ThemeForest license.

---

## Support

### Documentation

- Full documentation: This file
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- React Docs: [react.dev](https://react.dev)

### Support Channels

For support with this theme:

1. **Check Documentation** - Most questions are answered here
2. **Review FAQ** - Common issues and solutions
3. **Contact Support** - Reach out via your ThemeForest account

### Before Contacting Support

Please provide:
- Node.js version (`node --version`)
- npm version (`npm --version`)
- Error messages (full text)
- Steps to reproduce the issue
- Screenshots if applicable

---

## Changelog

### Version 1.0.0 (Initial Release)
- Initial theme release
- Full portfolio functionality
- Responsive design
- Smooth animations
- Custom cursor
- Project modals
- Contact section
- SEO optimization

---

## Final Notes

Thank you for choosing this portfolio theme! We hope it helps you create an amazing online presence.

**Remember:**
- Always backup before making major changes
- Test thoroughly before deploying
- Keep dependencies updated
- Replace placeholder content with your own

Happy coding! 🚀

---

*Last updated: November 2025*
