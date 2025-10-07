# Coding Standards - Red Lotus International LLC

## TypeScript Standards
- **Strict Mode:** Always use TypeScript strict mode
- **Type Definitions:** Provide proper type definitions for all functions and components
- **Interface vs Type:** Use interfaces for object shapes, types for unions and primitives
- **Generic Types:** Use generic types for reusable components and utilities
- **No Any:** Avoid using `any` type, use proper typing instead
- **Import Organization:** Organize imports in the following order:
  1. React and Next.js imports
  2. Third-party libraries
  3. Internal components and utilities
  4. Relative imports
  5. Type-only imports at the end

## React/Next.js Standards
- **Functional Components:** Use functional components only
- **Hooks:** Use React hooks appropriately and follow rules of hooks
- **Error Boundaries:** Implement error boundaries for better error handling
- **Loading States:** Always include loading states for async operations
- **Performance:** Use React.memo, useMemo, and useCallback for optimization
- **App Router:** Follow Next.js 15 App Router patterns and conventions
- **Server Components:** Use Server Components when possible for better performance
- **Client Components:** Mark components with "use client" when needed

## Styling Standards
- **Tailwind CSS:** Use Tailwind CSS utility classes for all styling
- **Mobile-First:** Implement mobile-first responsive design
- **Brand Colors:** Use brand colors consistently (Red #DC2626, Black #000000)
- **Accessibility:** Ensure proper color contrast ratios and accessibility compliance
- **CSS Variables:** Use CSS variables for consistent theming
- **Component Styling:** Use className prop for component styling
- **Responsive Design:** Use Tailwind responsive prefixes (sm:, md:, lg:, xl:)

## Component Standards
- **Naming:** Use PascalCase for component names
- **Props Interface:** Define proper TypeScript interfaces for component props
- **Default Props:** Use default parameters instead of defaultProps
- **Children:** Use React.ReactNode for children prop type
- **Event Handlers:** Use proper event handler types
- **Refs:** Use proper ref types with useRef
- **State Management:** Use useState and useContext appropriately

## File Naming Conventions
- **Components:** PascalCase (e.g., ProductCard.tsx)
- **Pages/Routes:** kebab-case (e.g., about-us/page.tsx)
- **Utilities:** camelCase (e.g., formatCurrency.ts)
- **Types:** PascalCase with .types.ts suffix
- **Hooks:** camelCase starting with 'use' (e.g., useAuth.ts)
- **Constants:** UPPER_SNAKE_CASE (e.g., API_ENDPOINTS.ts)

## Performance Standards
- **Image Optimization:** Use Next.js Image component for all images
- **Code Splitting:** Use dynamic imports for code splitting
- **Bundle Size:** Optimize bundle size and avoid unnecessary dependencies
- **Caching:** Implement proper caching strategies
- **Core Web Vitals:** Ensure Core Web Vitals compliance
- **Lazy Loading:** Implement lazy loading for components and images

## Security Standards
- **Input Validation:** Validate all user inputs
- **Data Sanitization:** Sanitize data before processing
- **Environment Variables:** Use environment variables for sensitive data
- **Authentication:** Implement proper authentication flows
- **HTTPS:** Use HTTPS for all communications
- **OWASP:** Follow OWASP security guidelines

## Testing Standards
- **Unit Tests:** Write unit tests for utilities and hooks
- **Component Tests:** Test component rendering and interactions
- **Integration Tests:** Test API endpoints and data flow
- **Mocking:** Mock external dependencies properly
- **Coverage:** Maintain good test coverage
- **Tools:** Use Jest and React Testing Library

## Documentation Standards
- **JSDoc:** Use JSDoc comments for complex functions
- **README:** Maintain comprehensive README files
- **API Docs:** Document API endpoints and parameters
- **Component Docs:** Document component props and usage
- **Changelog:** Keep changelog updated with changes

## Accessibility Standards
- **WCAG 2.1 AA:** Ensure WCAG 2.1 AA compliance
- **ARIA Labels:** Implement proper ARIA labels
- **Keyboard Navigation:** Support keyboard navigation
- **Screen Readers:** Include screen reader support
- **Color Contrast:** Maintain proper color contrast ratios
- **Focus Management:** Implement proper focus management
