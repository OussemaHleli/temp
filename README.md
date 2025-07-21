# LangViz - Visual Document Translation Platform

A modern React web application that transforms Arabic and Tunisian documents into accessible visual content with real sign language translations.

## 🌟 Features

- **3D Hero Section**: Interactive Three.js animations with floating elements
- **Document Upload**: Simulated PDF/DOC upload with language detection
- **Sign Language Translation**: Visual representations for better accessibility
- **Admin Dashboard**: Interface for document management and translation generation
- **Worker View**: Clean, navigable interface for viewing translated content
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: GSAP-powered transitions and scroll effects

## 🛠️ Tech Stack

- **React.js** - Main framework
- **Three.js** - 3D graphics and animations
- **GSAP** - Smooth animations and transitions
- **Tailwind CSS** - Modern styling framework
- **React Router** - Client-side routing
- **Vite** - Fast development build tool

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.14.0 or higher)
- npm (v10.8.1 or higher)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd noura
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📱 Pages

### Landing Page (`/`)

- Interactive 3D hero section with rotating globe and floating elements
- Feature showcase with smooth scroll animations
- Call-to-action buttons leading to admin and viewer pages

### Admin Page (`/admin`)

- Document upload interface with drag-and-drop support
- Language selection (Arabic, Tunisian Arabic, English)
- Mock translation generation with loading states
- Results display with sign language visuals

### Worker View Page (`/viewer`)

- Clean interface for viewing translated documents
- Search and category filtering
- Navigation between translation sections
- Side-by-side original and translated text with sign language images

## 🎨 Design Features

- **Color Palette**: Sky blue and green theme for accessibility
- **Typography**: Nunito for body text, Poppins for headings
- **Animations**: Floating elements, smooth transitions, scroll-triggered effects
- **Responsive**: Mobile-first design with breakpoint optimization

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── FileUpload.jsx
│   ├── ContentCard.jsx
│   ├── Loading.jsx
│   └── HeroScene.jsx
├── pages/              # Main application pages
│   ├── LandingPage.jsx
│   ├── AdminPage.jsx
│   └── WorkerViewPage.jsx
├── data/               # Mock data and configurations
│   └── mockData.js
├── assets/             # Static assets
│   ├── images/         # Sign language SVG placeholders
│   └── videos/         # Video placeholders
└── index.css          # Global styles and Tailwind setup
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Mock Data

The application uses mock data to simulate:

- Document translations in multiple languages
- Sign language visual representations
- Category-based content organization
- Upload and processing workflows

## 🎯 Key Components

### HeroScene

Three.js powered 3D scene with:

- Animated globe with wireframe effect
- Floating document representations
- Animated hand gestures
- Auto-rotating camera controls

### FileUpload

Drag-and-drop file upload with:

- File type validation
- Size limit checking
- Visual feedback states
- Error handling

### ContentCard

Translation display component featuring:

- Original and translated text
- Sign language image/video player
- Category badges
- Interactive video controls

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📄 License

This project is for demonstration purposes only.

---

Built with ❤️ for accessibility and visual learning
