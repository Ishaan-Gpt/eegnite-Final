import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import { Suspense, lazy } from "react";
import SmoothFollower from "@/components/ui/SmoothFollower";

const AdminApp = lazy(() => import("./pages/AdminApp"));

const queryClient = new QueryClient();

const App = () => (
  <>
    <a
      href="#main-content"
      className="skip-to-content absolute left-2 top-2 z-50 bg-primary text-primary-foreground px-4 py-2 rounded focus:translate-y-0 focus:opacity-100 opacity-0 -translate-y-8 transition-all duration-300 outline-none"
      tabIndex={0}
    >
      Skip to main content
    </a>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <SmoothFollower />
        <BrowserRouter>
          <Layout>
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-lg">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/admin" element={
                  <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-lg text-primary">Loading admin...</div>}>
                    <AdminApp />
                  </Suspense>
                } />
                {/* Redirect all other routes to home */}
                <Route path="*" element={<Index />} />
              </Routes>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </>
);

export default App;
