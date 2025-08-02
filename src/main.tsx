import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { HelmetProvider } from "react-helmet-async";

// Add a global effect to move the html::before shadow with the cursor
if (typeof window !== 'undefined') {
  window.addEventListener('mousemove', (e) => {
    const root = document.documentElement;
    root.style.setProperty('--cursor-x', `${e.clientX}px`);
    root.style.setProperty('--cursor-y', `${e.clientY}px`);
    // For legacy browsers, also update left/top directly
    const before = document.querySelector('html') as HTMLElement;
    if (before) {
      before.style.setProperty('--cursor-x', `${e.clientX}px`);
      before.style.setProperty('--cursor-y', `${e.clientY}px`);
    }
  });
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </HelmetProvider>
);
