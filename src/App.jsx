import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

// Pages
import Index from "./pages/Index";
import GetStarted from "./pages/GetStarted";
import ContactSales from "./pages/ContactSales";
import LearnMore from "./pages/LearnMore";
import NotFound from "./pages/NotFound";

// Placeholder Page Template
const PageTemplate = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
    <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
  </div>
);

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
}

// App Wrapper with Navigation, Routes, and Footer
function AppWrapper() {
  const location = useLocation();

  return (
    <>
      <Navigation />

      <main>
        <ScrollToTop />

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Index />
                </PageTransition>
              }
            />

            <Route
              path="/get-started"
              element={
                <PageTransition>
                  <GetStarted />
                </PageTransition>
              }
            />

            <Route
              path="/contact-sales"
              element={
                <PageTransition>
                  <ContactSales />
                </PageTransition>
              }
            />

            {/* LearnMore Pages */}
            <Route
              path="/learn-more"
              element={
                <PageTransition>
                  <LearnMore />
                </PageTransition>
              }
            />
            <Route
              path="/learn-more/:topicId"
              element={
                <PageTransition>
                  <LearnMore />
                </PageTransition>
              }
            />

            {/* Product Pages */}
            <Route path="/features" element={<PageTemplate title="Features" />} />
            <Route path="/pricing" element={<PageTemplate title="Pricing" />} />
            <Route path="/security" element={<PageTemplate title="Security" />} />
            <Route path="/updates" element={<PageTemplate title="Updates" />} />

            {/* Company Pages */}
            <Route path="/careers" element={<PageTemplate title="Careers" />} />
            <Route path="/blog" element={<PageTemplate title="Blog" />} />
            <Route path="/press" element={<PageTemplate title="Press" />} />

            {/* Resources Pages */}
            <Route path="/api" element={<PageTemplate title="API" />} />
            <Route path="/support" element={<PageTemplate title="Support" />} />
            <Route path="/community" element={<PageTemplate title="Community" />} />

            {/* Legal Pages */}
            <Route path="/terms" element={<PageTemplate title="Terms" />} />
            <Route path="/compliance" element={<PageTemplate title="Compliance" />} />
            <Route path="/cookies" element={<PageTemplate title="Cookies" />} />

            {/* Catch-all */}
            <Route
              path="*"
              element={
                <PageTransition>
                  <NotFound />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
