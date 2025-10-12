# Red Lotus International - Design System

## 🎨 Brand Colors

### Primary Palette

- **Primary**: `#8B4513` (Coffee Brown) - Main brand color
- **Secondary**: `#7CB342` (Matcha Green) - Accent color
- **Accent**: `#2D1B1B` (Dark Brown) - High contrast elements
- **Warm**: `#F5F5DC` (Warm Cream) - Light backgrounds

### Semantic Colors

- **Success**: `#7CB342` (Matcha Green)
- **Error**: `#DC2626` (Red)
- **Warning**: `#D97706` (Amber)
- **Info**: `#2563EB` (Blue)

### Dark Mode Colors

- **Primary**: `#10b981` (Emerald Green)
- **Secondary**: `#059669` (Dark Emerald)
- **Accent**: `#111827` (Dark Gray)
- **Warm**: `#1f2937` (Medium Gray)

## 📏 Spacing Scale

- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)

## 🔤 Typography

- **Font Family**: Inter, system-ui, sans-serif
- **Headings**: font-bold
- **Body**: font-medium
- **Small**: text-sm

## 🎯 Component Guidelines

### Buttons

- **Primary**: Coffee brown gradient with white text
- **Secondary**: Matcha green with white text
- **Ghost**: Transparent with brand color text
- **Sizes**: sm, default, lg, icon

### Forms

- **Inputs**: Rounded corners, brand color focus rings
- **Labels**: Clear, accessible labeling
- **Validation**: Brand error colors for feedback

### Navigation

- **Active States**: Brand color backgrounds
- **Hover Effects**: Subtle scale and color transitions
- **Mobile**: Sheet-based navigation with accordion

## 🌓 Theme System

- **Light Mode**: Coffee brown and warm cream colors with gradients
- **Dark Mode**: Emerald green and dark gray solid colors (no gradients)
- **CSS Custom Properties**: Theme-aware color switching without !important
- **Smooth Transitions**: 300ms duration for theme changes

## 📱 Responsive Design

- **Mobile First**: Base styles for mobile
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Progressive Enhancement**: Features added at larger breakpoints

## ♿ Accessibility

- **WCAG AA Compliance**: 4.5:1 contrast ratio minimum
- **Focus Management**: Visible focus indicators
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Keyboard Navigation**: Full keyboard support

## 🚀 Performance

- **CSS Custom Properties**: Theme-aware color switching
- **Tailwind Safelist**: Ensures all brand colors are compiled
- **Optimized Animations**: Hardware-accelerated transitions
- **Minimal JavaScript**: Theme switching with minimal overhead

## 📋 Usage Guidelines

### Do's ✅

- Use brand colors consistently across all components
- Maintain proper contrast ratios for accessibility
- Follow the established spacing scale
- Use semantic color names (success, error, warning)
- Test both light and dark modes

### Don'ts ❌

- Don't use hardcoded colors outside the design system
- Don't create new color variants without updating the system
- Don't use gradients in dark mode (solid colors only)
- Don't use !important in CSS (use proper specificity instead)
- Don't skip accessibility testing
- Don't ignore responsive breakpoints

## 🔧 Implementation

- **Tailwind CSS**: Utility-first styling
- **CSS Custom Properties**: Theme switching
- **Radix UI**: Accessible component primitives
- **Class Variance Authority**: Consistent component variants
- **TypeScript**: Type-safe component props

## 📊 Success Metrics

- **Consistency**: All components use design tokens
- **Accessibility**: WCAG AA compliance
- **Performance**: Fast theme switching
- **Maintainability**: Easy to update and extend
- **Developer Experience**: Clear documentation and examples
