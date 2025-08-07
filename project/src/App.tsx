import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import WerkwijzePage from './pages/WerkwijzePage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen relative bg-background">
        <Navbar />
        <Layout>
          <Routes>
            <Route path="/fotoboek" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/werkwijze" element={<WerkwijzePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}