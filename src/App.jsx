import { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Header } from './widgets/layout/Header';
import { Footer } from './widgets/layout/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import SolarTechPage from './pages/SolarTechPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

import { BookingModalProvider } from './app/providers/BookingModalProvider';
import { RegionProvider } from './app/providers/RegionProvider';
import { ChatWidget } from './widgets/marketing/ChatWidget';

function AppLayout() {
  return (
    <RegionProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tech" element={<SolarTechPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <ChatWidget />
    </RegionProvider>
  );
}

function App() {
  return (
    <BookingModalProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/be/nl" replace />} />
        <Route path="/:region/:lang/*" element={<AppLayout />} />
      </Routes>
    </BookingModalProvider>
  )
}

export default App;
