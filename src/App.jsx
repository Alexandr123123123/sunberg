import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './widgets/layout/Header';
import { Footer } from './widgets/layout/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
