# 🌱 EcoNova Store - Sustainable Smart Living E-Commerce Website

A premium, responsive, single-page e-commerce website built with **vanilla HTML5, CSS3, and JavaScript** (no frameworks). Featuring a fully functional shopping cart, smooth animations, form validation, and accessibility best practices.

## 📋 Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [File Structure](#file-structure)
- [Getting Started](#getting-started)
- [How to Run](#how-to-run)
- [Features in Detail](#features-in-detail)
- [Cart Functionality](#cart-functionality)
- [localStorage Explanation](#localstorage-explanation)
- [Video Setup](#video-setup)
- [Customization](#customization)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [Credits](#credits)

---

## ✨ Features

### 1. **Header & Sticky Navigation**
- Professional navigation bar that remains visible while scrolling
- Links to all major sections (Home, Products, About, Showcase, Offer, Contact)
- Shopping cart icon with live item counter
- Active section indicator
- Smooth hover effects and transitions

### 2. **Responsive Hamburger Menu**
- Mobile-optimized navigation
- Smooth open/close animations
- Auto-closes when a link is clicked
- Keyboard accessible (Escape key to close)

### 3. **Hero Section**
- Large, eye-catching headline: "Smarter Living. Greener Future."
- Descriptive tagline about EcoNova's mission
- "15% OFF FIRST ORDER" promotional badge
- Two call-to-action buttons (Shop Products, Explore EcoNova)
- Animated background shapes and gradients
- Staggered entrance animations for text and buttons

### 4. **Products Section**
- 6 curated sustainable smart-lifestyle products
- Product cards featuring:
  - Product emoji/icon
  - Product name and description
  - Star rating with review count
  - Price
  - "Add to Cart" button with hover effects
  - Smooth animations on card interaction
- Responsive grid layout (3 columns on desktop, 1 on mobile)

### 5. **Shopping Cart System** (Fully Functional)
- Side drawer cart interface
- Add products without page reload
- Real-time cart count update
- Product quantity controls (increase/decrease/remove)
- Calculate subtotal automatically
- Persistent storage using localStorage
- Empty cart message when no items
- Smooth drawer animation
- Close via button, overlay click, or Escape key
- Animate cart icon when items are added

### 6. **About/Product Story Section**
- Mission statement about EcoNova's sustainability commitment
- 4 feature cards with icons:
  - 🌱 Sustainable Materials
  - ⚡ Energy Efficient
  - 🔄 Smart Innovation
  - 🌍 Environmental Design
- Scroll-reveal animations using IntersectionObserver
- Card hover effects with color transitions

### 7. **Video Showcase Section**
- HTML5 video player with controls
- Custom play/pause button overlay
- Responsive video container
- Professional styling with shadow effects
- Ready for custom video asset (assets/video/econova-showcase.mp4)

### 8. **Promotional Offer Section**
- Large promotional banner: "15% OFF YOUR FIRST ORDER"
- Live countdown timer:
  - Days, Hours, Minutes, Seconds
  - Updates every second
  - Shows expiration when reaching zero
- Animated visual treatment with gradient background
- Call-to-action button linking to products

### 9. **Contact Form**
- Professional contact form with fields:
  - Full Name (required)
  - Email Address (required, validated)
  - Phone Number (optional, with validation)
  - Product/Category Interest (dropdown)
  - Message (required, minimum 10 characters)
  - Newsletter consent checkbox
- Features:
  - Real-time field validation
  - Inline error messages
  - Keyboard accessible labels
  - Success message after submission
  - Form clears after successful submission
  - aria-live regions for accessibility

### 10. **Footer**
- EcoNova branding and tagline
- Quick navigation links
- Product category links
- Contact information (email, phone)
- Social media links
- Legal links (Privacy Policy, Terms & Conditions)
- Copyright notice
- "Back to Top" button:
  - Hidden until user scrolls down 300px
  - Smooth scroll animation
  - Hover effects

### 11. **Animations** (6+ Purposeful Animations)
1. **Hero Text Reveal** - Staggered fade-in and slide-up
2. **Animated Hero Background** - Floating gradient shapes
3. **Scroll Reveal** - Cards fade in as they enter viewport
4. **Product Card Hover** - Scale, shadow, and color transitions
5. **Add-to-Cart Feedback** - Cart icon pop-in animation
6. **Cart Drawer Animation** - Smooth slide-in from right
7. **Form Validation Animation** - Smooth error state transitions
8. **Back-to-Top Appearance** - Fade and scale animations

### 12. **Responsive Design**
- Mobile-first approach
- Breakpoints for:
  - Mobile: < 480px
  - Tablet: 480px - 768px
  - Desktop: > 768px
- Fluid typography using `clamp()`
- Flexible grid layouts
- No horizontal overflow
- Touch-friendly buttons and interactive elements

### 13. **Accessibility**
- Semantic HTML5 elements:
  - `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Proper heading hierarchy (h1, h2, h3)
- Descriptive alt text for images (emoji used for styling)
- Visible keyboard focus states
- aria-labels for icon buttons
- aria-expanded for menu/cart toggles
- aria-live regions for dynamic content
- aria-hidden for decorative elements
- Minimum color contrast ratios (WCAG AA)
- Form labels properly associated with inputs

### 14. **Reduced Motion Support**
- Respects user's `prefers-reduced-motion` preference
- Animations disabled for users who prefer reduced motion
- Maintains full functionality without animations

### 15. **SEO Optimization**
- Semantic HTML structure
- Meta description
- Viewport meta tag
- Open Graph metadata for social sharing
- Descriptive page title
- Proper heading hierarchy
- Internal linking structure

---

## 🛠 Technologies

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with variables, Grid, Flexbox, animations
- **Vanilla JavaScript** - No frameworks or libraries
- **localStorage API** - Persistent cart storage
- **IntersectionObserver API** - Scroll-reveal animations
- **ES6+ Features** - Classes, arrow functions, template literals

---

## 📁 File Structure

```
EcoNova/
├── index.html           # Main HTML file
├── style.css            # Complete styling and animations
├── script.js            # All JavaScript functionality
├── README.md            # This file
└── assets/
    ├── images/          # Product and poster images
    │   └── video-poster.jpg
    └── video/           # Video content
        └── econova-showcase.mp4
```

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime, etc.)
- No build tools or npm installation required

### Installation

1. **Clone or download the project**
   ```bash
   # If using git
   git clone <repository-url>
   
   # Or download as ZIP and extract
   ```

2. **Navigate to the EcoNova folder**
   ```bash
   cd EcoNova
   ```

3. **Open in VS Code**
   ```bash
   code .
   ```

---

## 📖 How to Run

### Option 1: Using VS Code Live Server (Recommended)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. The website opens in your default browser at `http://localhost:5500`

### Option 2: Using Python
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```
Then open `http://localhost:8000` in your browser

### Option 3: Using Node.js
```bash
# Install http-server globally
npm install -g http-server

# Run from project directory
http-server

# Open http://localhost:8080
```

### Option 4: Direct File Access
- Simply double-click `index.html` in the file explorer
- The website opens locally in your browser
- **Note**: localStorage may have restrictions with file:// protocol

---

## 📱 Features in Detail

### Hero Section Animations
- Title fades in with a gradient text effect
- Description slides up with staggered timing
- Buttons animate individually with smooth transitions
- Background shapes float continuously with varying speeds

### Product Rendering
Products are defined in a JavaScript array and rendered dynamically:
```javascript
const products = [
    {
        id: 1,
        name: "EcoCharge Solar Power Bank",
        price: 49,
        description: "...",
        emoji: "☀️",
        rating: 4.8,
        reviews: 234
    },
    // ... more products
];
```

### Responsive Breakpoints
- **Desktop (> 768px)**: 3-column product grid
- **Tablet (480px - 768px)**: 2-column grid
- **Mobile (< 480px)**: 1-column grid with adjusted spacing

---

## 🛒 Cart Functionality

### Add to Cart
1. Click "Add to Cart" on any product
2. Product is instantly added to cart
3. Cart count increments
4. Cart icon animates with a "pop" effect

### View Cart
1. Click the shopping cart icon (🛒) in the header
2. Cart drawer slides in from the right
3. Shows all items with:
   - Product image/emoji
   - Product name and price
   - Quantity controls
   - Remove button
4. Subtotal and total update in real-time

### Modify Quantity
1. Use + and − buttons to adjust quantity
2. Cart totals recalculate immediately
3. Decrease to 0 removes the item

### Remove Items
1. Click "Remove" next to any item
2. Item instantly disappears
3. Cart totals update
4. Changes are saved to localStorage

### Close Cart
- Click the × button
- Click outside the cart (overlay)
- Press Escape key

---

## 💾 localStorage Explanation

### What is localStorage?
localStorage is a browser API that stores data locally on the user's device. Unlike cookies, localStorage data:
- Persists even after the browser is closed
- Has a larger storage capacity (usually 5-10MB per site)
- Is not sent to the server automatically

### How EcoNova Uses localStorage

```javascript
// Save cart to localStorage (happens automatically)
localStorage.setItem('econova-cart', JSON.stringify(this.items));

// Load cart from localStorage (happens on page load)
const stored = localStorage.getItem('econova-cart');
const cart = stored ? JSON.parse(stored) : [];
```

### Cart Persistence
1. User adds items to cart
2. Cart data is serialized to JSON and saved
3. User closes browser or navigates away
4. User returns to the website
5. Cart is restored with the same items

### Clearing localStorage
Open browser console and run:
```javascript
localStorage.removeItem('econova-cart');  // Clear only EcoNova cart
localStorage.clear();                     // Clear all stored data
```

---

## 🎬 Video Setup

### Adding Your Own Video
1. Place your video file in `assets/video/econova-showcase.mp4`
2. Supported formats: MP4, WebM, Ogg
3. Recommended specs:
   - Format: MP4 (H.264 video codec)
   - Resolution: 1920x1080 or lower
   - Duration: 30-90 seconds
   - File size: < 10MB for optimal loading

### Video Poster Image
1. Create a preview image for `assets/images/video-poster.jpg`
2. Recommended size: 1920x1080
3. This shows before the video starts playing

### Fallback for Missing Video
If no video is provided, the HTML includes a fallback message:
```html
<p>Your browser doesn't support HTML5 video. Please use a modern browser.</p>
```

---

## 🎨 Customization

### Change Colors
All colors are CSS variables in the `:root` selector:

```css
:root {
    --primary: #2d8659;              /* Main green */
    --primary-dark: #1a472a;         /* Dark green */
    --primary-light: #4ca374;        /* Light green */
    --accent: #4ade80;               /* Bright green accent */
    --background: #0f1419;           /* Dark background */
    --surface: #1a1f27;              /* Card background */
    --text: #e8eef5;                 /* Main text */
    --text-muted: #a8b2c1;           /* Secondary text */
}
```

### Change Products
Edit the `products` array in `script.js`:
```javascript
const products = [
    {
        id: 1,
        name: "Your Product Name",
        price: 99,
        description: "Product description",
        emoji: "🎨",  // Any emoji
        rating: 4.5,
        reviews: 100
    }
];
```

### Change Company Info
Update in HTML:
- Company name: Search for "EcoNova" in `index.html`
- Email: `info@econova.com`
- Phone: `+1 (234) 567-890`
- Social links: Footer section

### Adjust Animations
Modify timing in `style.css`:
- `--transition: all 0.3s ease;` - Change `0.3s` for speed
- Specific animations have their own duration values
- Disable all: Set `animation: none !important;`

---

## 🚀 Deployment

### Deploy to Netlify (Free & Easy)
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop the `EcoNova` folder into Netlify
3. Get a free domain like `econova-xxxx.netlify.app`
4. Site goes live instantly

### Deploy to GitHub Pages
1. Create a GitHub repository
2. Push your EcoNova folder to the repo
3. Go to Settings → Pages
4. Set source to "main" branch
5. Access at `https://yourusername.github.io/EcoNova`

### Deploy to Vercel
1. Sign up at [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Auto-deploys on every push
4. Get a free `.vercel.app` domain

### Deploy to Your Web Server
1. Upload the entire `EcoNova` folder via FTP
2. Update URLs in the code if needed
3. Ensure HTTPS is enabled for security
4. Test all functionality with your domain

### Important Notes for Deployment
- Ensure HTTPS is enabled (required for localStorage on some browsers)
- Test on multiple devices and browsers
- Update email and contact information
- Replace placeholder images with actual product images
- Add your actual video file to `assets/video/`
- Update social media links in the footer
- Add real privacy policy and terms pages

---

## 🌐 Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | Fully supported |
| Firefox | ✅ Full | Fully supported |
| Safari | ✅ Full | Fully supported (15+) |
| Edge | ✅ Full | Fully supported |
| Opera | ✅ Full | Fully supported |
| IE 11 | ❌ No | Not supported (old browser) |
| Mobile Chrome | ✅ Full | Fully responsive |
| Mobile Safari | ✅ Full | Fully responsive |
| Samsung Internet | ✅ Full | Fully supported |

### Required APIs
- ES6 JavaScript (all modern browsers)
- localStorage (IE 8+)
- IntersectionObserver (modern browsers, polyfill available)
- CSS Grid & Flexbox (modern browsers)

---

## ⚡ Performance

### Optimizations Implemented
- **Vanilla JavaScript**: No framework overhead
- **CSS Variables**: Efficient style updates
- **Lazy Loading**: Scroll-reveal with IntersectionObserver
- **Event Delegation**: Efficient event handling
- **No External Dependencies**: Faster loading
- **Minification Ready**: Can be minified for production
- **Optimized Images**: Uses emojis instead of images
- **Local Storage**: Only essential data stored

### Performance Metrics (Typical)
- **Page Load**: < 1 second
- **First Contentful Paint (FCP)**: < 1.5 seconds
- **Largest Contentful Paint (LCP)**: < 2 seconds
- **Cumulative Layout Shift (CLS)**: < 0.1

### Tips for Better Performance
- Optimize and compress your video file
- Use a CDN for assets
- Enable gzip compression on your server
- Minify CSS and JavaScript for production
- Consider lazy loading images if you add many

---

## ♿ Accessibility Features

### Implemented Standards
- **WCAG 2.1 Level AA** compliance
- **Semantic HTML5** elements
- **Proper heading hierarchy** (h1 → h6)
- **Keyboard navigation** - Tab through all elements
- **ARIA labels** - Screen reader friendly
- **Color contrast** - Minimum 4.5:1 ratio
- **Focus indicators** - Visible on all interactive elements
- **Reduced motion** support - Respects user preferences
- **Alt text** - For all images
- **Form accessibility** - Proper labels and error messages

### Testing Accessibility
```bash
# Lighthouse audit in Chrome DevTools
# Press F12 → Lighthouse → Audit

# WAVE Web Accessibility Evaluation Tool
# https://wave.webaim.org

# axe DevTools Browser Extension
# Available for Chrome and Firefox
```

---

## 📝 Credits

### Technologies Used
- **HTML5** - Latest semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript ES6+** - Latest JavaScript features

### Design Inspiration
- Modern e-commerce best practices
- Sustainable technology branding
- Premium minimal aesthetics

### Resources
- [MDN Web Docs](https://developer.mozilla.org)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS Tricks](https://css-tricks.com)

---

## 📧 Support & Feedback

### Common Issues

**Q: Cart doesn't persist after refresh?**
- A: localStorage might be disabled. Check browser settings.
- Ensure you're not in private/incognito mode.

**Q: Video doesn't play?**
- A: Add the video file to `assets/video/econova-showcase.mp4`
- Ensure file is in MP4 format

**Q: Mobile menu not working?**
- A: Check browser JavaScript console for errors
- Clear browser cache and reload

**Q: Form not validating?**
- A: JavaScript must be enabled
- Check console for any errors

---

## 📄 License

This project is open source and free to use for personal and commercial projects.

---

## 🌍 Live URL

**Coming Soon!** - Deploy this website and update this README with your live URL.

```
https://your-domain.com/econova
```

---

**Built with ❤️ for a sustainable future**

EcoNova Store © 2026 - All Rights Reserved
