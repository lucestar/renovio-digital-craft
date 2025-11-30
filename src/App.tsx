import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom"; // Added useLocation
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react"; // Added useEffect
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// This new component handles the scrolling behavior
const ScrollToAnchor = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Remove the leading slash from the path (e.g. "/warum-renovio" -> "warum-renovio")
    const id = pathname.replace('/', '');

    // 2. If it's the root path, scroll to top
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // 3. Try to find the element with that ID and scroll to it
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname]);

  return null;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          {/* Activate the scroller inside the router */}
          <ScrollToAnchor />
          
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* FIX FOR NAVIGATION LINKS:
              These routes tell the app: "If the user goes to /warum-renovio, 
              show the Index page (and let ScrollToAnchor handle the scrolling)."
              
              Add any other section IDs you use in your Header here:
            */}
            <Route path="/warum-renovio" element={<Index />} />
            <Route path="/leistungen" element={<Index />} />
            <Route path="/services" element={<Index />} />
            <Route path="/team" element={<Index />} />
            <Route path="/kontakt" element={<Index />} />
            <Route path="/contact" element={<Index />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
