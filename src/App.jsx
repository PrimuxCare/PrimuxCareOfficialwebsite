import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Pages
import Index from "./pages/Index";
import GetStarted from "./pages/GetStarted";
import ContactSales from "./pages/ContactSales"; 
import LearnMore from "./pages/LearnMore"; // ✅ Added LearnMore page
import NotFound from "./pages/NotFound";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

// App Wrapper with Navigation, Routes, and Footer
function AppWrapper() {
  return (
    <>
      <Navigation />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/contact-sales" element={<ContactSales />} />
          <Route path="/learn-more" element={<LearnMore />} /> {/* ✅ Added */}
          <Route path="*" element={<NotFound />} />
        </Routes>
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
