import React from 'react';
import AboutCTASection from '../about/AboutCTASection';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useScrollToTop();
  const { pathname } = useLocation();

  const showFooter = pathname !== '/contact';

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {children}
      </main>
      {showFooter && <AboutCTASection />}
    </div>
  );
}