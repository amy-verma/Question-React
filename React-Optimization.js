// 1. Code Optimization

// Use Memo,usecallback and React.Memo
// 1. Prevent unnecessary re-render
// 2. Especially helpfull when passig props to a child components
// 3. Avoid annonymous function in JSX
// ---------------------------------------------------------

// 2. Componenet Structure

// 1. Break large component into smaller ones.
// - Easier to maintian and test
// - Better reusability and readability

// 2. Lazy Load Componenets
// - Use Reacts lazy and Suspence to load the components only when needed

// const LazyComponenets=React.Lazy(()=>import("./MyComponent"))
// --------------------------------------------------------------------

// 3. Bundle Optimization

// 1. Use a bundler like vite or webpack(with proper config)

// 2. Use Code splitting
// Import pages/components only when needed

// const Page = React.lazy(() => import('./Page'));
// --------------------------------------------------------------------------

// 4. Asset Optimization
// Compress Images
// -use tools like Tiny pNG
// -Lazy load images

// ----------------------------------------------------------------------------
// 5. Performance Optimization

// 1. Use React profiler
// -Identify slow components

// 2. use Lighthouse(in chrome dev tools)
// -test page speed and get suggestion

// 3. Minimize re render
// -use state carefuly
// - lift state only when necessary
// - avoid passing new object/ refrence unnecessary
// ---------------------------------------------------------------

// 6. NetWork Optimization

// 1. Debounce API calls

// 2. Paginate or Infinite Scroll
// - Don't load all data at once.

// ------------------------------------------------------
// 7. Production Build Tips
// - Serve with a proper static server like:
// .Vercel, Netlify, Firebase Hosting, or Nginx

// -----------------------------------------------------------
// 8. SEO & Accessibility (if SSR or static)
// - Add meaningful <title>, <meta>, alt, etc.
// - Use react-helmet for dynamic metadata
// - Use semantic HTML elements
