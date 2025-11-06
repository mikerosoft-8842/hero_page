# Felix Macaspac - Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS.

## Features

- 🎨 Clean, classic theme
- 📱 Fully responsive layout
- ⚡ Built with Next.js 14 and React 18
- 🎯 TypeScript for type safety
- 💨 Tailwind CSS for styling
- 🚀 Optimized for static export (ready for Azure Static Web Apps)

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Main home page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero/intro section
│   ├── RecentThoughts.tsx  # Blog posts section
│   ├── WorkExperience.tsx  # Work history section
│   └── Contact.tsx      # Contact and social links
├── public/              # Static assets
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

Create an optimized production build:

```bash
npm run build
```

This will generate a static export in the `out/` directory, ready for deployment.

## Deployment to Azure Static Web Apps

The site is configured for static export and ready to deploy to Azure Static Web Apps:

1. The `next.config.js` includes `output: 'export'` for static generation
2. After running `npm run build`, the `out/` directory contains the static site
3. Deploy the `out/` directory to Azure Static Web Apps

## Customization

### Personal Information

Update your personal details in the following components:
- `components/Hero.tsx` - Name, title, bio, and current position
- `components/WorkExperience.tsx` - Work history and projects
- `components/RecentThoughts.tsx` - Blog posts and articles
- `components/Contact.tsx` - Email and social media links

### Styling

- Colors and theme settings: `tailwind.config.js` and `app/globals.css`
- Component-specific styles: Within each component file using Tailwind classes

## Technologies Used

- **Next.js 14** - React framework for production
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

