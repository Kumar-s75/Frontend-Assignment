# IntelliToggle Homepage

A modern, responsive homepage for IntelliToggle - a smart feature toggle management platform. Built with Nuxt 3, Vue 3, and TailwindCSS.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works perfectly on desktop and mobile devices
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Interactive Elements**: Mobile menu toggle with smooth animations
- **Performance Optimized**: Built with Nuxt 3 for optimal performance and SEO
- **Accessible**: ARIA labels and semantic HTML for better accessibility

## 🛠️ Tech Stack

- **Nuxt 3**: Vue.js framework for production
- **Vue 3**: Progressive JavaScript framework
- **TailwindCSS**: Utility-first CSS framework
- **Inter Font**: Modern, clean typography

## 🎨 Design System

### Colors
- **Primary**: `#42389E` (IntelliToggle Purple)
- **Secondary**: `#F9A71E` (IntelliToggle Orange)
- **Accent**: `#6C5CE7` (Light Purple)
- **Dark**: `#2D2A45` (Dark Purple)

### Components
- Responsive navigation with mobile menu
- Hero section with interactive dashboard mockup
- Feature cards with hover effects
- Comprehensive footer with social links

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run preview
```

## 📂 Project Structure

```
├── assets/
│   └── css/
│       └── tailwind.css      # Global styles and Tailwind imports
├── components/
│   ├── Button.Vue            # Reusable button component
│   ├── Features.Vue          # Features section
│   ├── Footer.Vue            # Footer component
│   ├── HeroSection.Vue       # Hero section with dashboard mockup
│   └── Navbar.vue            # Navigation with mobile menu
├── pages/
│   └── index.vue             # Homepage
├── public/
│   ├── images/               # Static images
│   └── logo.svg              # IntelliToggle logo
├── nuxt.config.ts            # Nuxt configuration
├── tailwind.config.js        # Tailwind configuration
└── package.json              # Dependencies and scripts
```

## 🎯 Key Features Implemented

### Interactive Elements
- **Mobile Menu Toggle**: Smooth sliding animation with hamburger/close icon transition
- **Hover Effects**: Card hover effects, button interactions, and link transitions
- **Dashboard Mockup**: Interactive feature toggle cards in the hero section

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Responsive typography
- Optimized spacing and sizing

### Performance
- Optimized images and assets
- Minimal JavaScript bundle
- CSS purging with TailwindCSS
- Server-side rendering with Nuxt 3

## 🔧 Customization

### Colors
Update the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: '#42389E',    // Your brand primary
  secondary: '#F9A71E',  // Your brand secondary
  // ... other colors
}
```

### Typography
Fonts are configured in `assets/css/tailwind.css` and `tailwind.config.js`.

### Components
All components are modular and can be easily customized or extended.

## 📄 License

This project is built for IntelliToggle as a homepage implementation based on provided Figma designs.