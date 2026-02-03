import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Layout Components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

// Core Pages
import Index from "./pages/Index";
import GetStarted from "./pages/GetStarted";
import ContactSales from "./pages/ContactSales";
import LearnMore from "./pages/LearnMore";
import NotFound from "./pages/NotFound";

// ✅ REAL PAGES (built)
import Security from "./pages/Security";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Updates from "./pages/Updates"; 

// ✅ REAL COMPANY PAGES
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Press from "./pages/Press";

// ✅ REAL RESOURCES PAGES
import API from "./pages/API";
import Support from "./pages/Support";
import Community from "./pages/Community";

// ✅ REAL LEGAL PAGES
import Terms from "./pages/Terms";
import Compliance from "./pages/Compliance";
import Cookies from "./pages/Cookies";

/**
 * Scroll to top on route change
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

/**
 * App Wrapper
 */
function AppWrapper() {
  const location = useLocation();

  return (
    <>
      <Navigation />

      <main className="pt-16">
        <ScrollToTop />

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* ================= HOME ================= */}
            <Route path="/" element={<PageTransition><Index /></PageTransition>} />

            {/* ================= PRIMARY CTAs ================= */}
            <Route path="/get-started" element={<PageTransition><GetStarted /></PageTransition>} />
            <Route path="/contact-sales" element={<PageTransition><ContactSales /></PageTransition>} />

            {/* ================= LEARN MORE ================= */}
            <Route path="/learn-more" element={<PageTransition><LearnMore /></PageTransition>} />
            <Route path="/learn-more/:topicId" element={<PageTransition><LearnMore /></PageTransition>} />

            {/* ================= PRODUCT ================= */}
            <Route path="/features" element={<PageTransition><Features /></PageTransition>} />
            <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
            <Route path="/security" element={<PageTransition><Security /></PageTransition>} />
            <Route path="/updates" element={<PageTransition><Updates /></PageTransition>} />

            {/* ================= COMPANY ================= */}
            <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
            <Route path="/press" element={<PageTransition><Press /></PageTransition>} />

            {/* ================= RESOURCES ================= */}
            <Route path="/api" element={<PageTransition><API /></PageTransition>} />
            <Route path="/support" element={<PageTransition><Support /></PageTransition>} />
            <Route path="/community" element={<PageTransition><Community /></PageTransition>} />

            {/* ================= LEGAL ================= */}
            <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
            <Route path="/compliance" element={<PageTransition><Compliance /></PageTransition>} />
            <Route path="/cookies" element={<PageTransition><Cookies /></PageTransition>} />

            {/* ================= 404 ================= */}
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}

/**
 * Root App
 */
export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}
