
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize any global GSAP settings
    gsap.config({
      nullTargetWarn: false,
    });
    
    // Smooth scroll initialization
    const smoothScroll = () => {
      const html = document.documentElement;
      const body = document.body;
      
      const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      
      // Refresh ScrollTrigger on page change/navigation
      ScrollTrigger.refresh();
    };
    
    smoothScroll();
    
    return () => {
      // Clean up all ScrollTrigger instances on component unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill(false));
      ScrollTrigger.clearMatchMedia();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
