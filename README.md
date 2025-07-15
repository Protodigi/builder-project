# Simpatico Webinar Landing Page

A modern, responsive React landing page for the Simpatico webinar on "How AI and CX Can Help Automotive Ecosystem Players Capitalise on the 2021 Rebound".

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern React Components**: Built with functional React components and hooks
- **Custom CSS**: Clean, maintainable CSS with CSS custom properties (variables)
- **Semantic HTML**: Accessible and SEO-friendly markup
- **Performance Optimized**: Optimized images and efficient component structure

## Project Structure

```
src/
├── components/
│   ├── WebinarLanding.jsx      # Main landing page component
│   ├── Header.jsx              # Header with logo and register button
│   ├── HeroSection.jsx         # Hero section with title and date
│   ├── BenefitsSection.jsx     # Benefits section with feature cards
│   ├── PresenterSection.jsx    # Presenter bio and profile
│   ├── EventDetailsSection.jsx # Event details and timing
│   ├── Footer.jsx              # Footer with register button
│   ├── RegisterButton.jsx      # Reusable register button
│   ├── DateTimeBox.jsx         # Date and time display component
│   ├── LiveWebinarBadge.jsx    # Live webinar indicator
│   ├── PresenterCard.jsx       # Presenter profile card
│   ├── BenefitCard.jsx         # Individual benefit feature card
│   └── [corresponding CSS files for each component]
├── App.jsx                     # Main App component
├── App.css                     # Global styles
└── index.js                    # React entry point
```

## Key Components

### Header

- Dark blue navigation bar with Simpatico logo
- Register button with gradient background
- Fully responsive design

### Hero Section

- Background image with overlay content
- Live webinar badge with animated indicator
- Event title and date/time information
- Presenter card preview

### Benefits Section

- Four main benefit cards with icons and descriptions
- Responsive grid layout
- Decorative background elements

### Presenter Section

- Dr. Simon Kinsella profile and bio
- Professional credentials and experience
- Call-to-action button

### Event Details

- Event timing and duration information
- Q&A session details
- Final registration call-to-action

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Design Features

- **Color Palette**: Blue (#4A81F5), Dark Navy (#1E264E), Teal Green gradient, Pink gradient for buttons
- **Typography**: Montserrat font family with various weights (300, 400, 600, 700)
- **Interactive Elements**: Hover effects on buttons, smooth transitions
- **Accessibility**: Semantic HTML, proper contrast ratios, keyboard navigation support

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Android Chrome)
- Responsive breakpoints: 1200px, 768px, 480px

## License

This project is created for the Simpatico webinar event.
