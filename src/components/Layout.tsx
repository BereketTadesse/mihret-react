import type { ReactNode } from 'react';
import Navbar from './Navbar';
import MobileNav from './MobileNav';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background text-on-background font-body min-h-screen relative selection:bg-primary selection:text-on-primary transition-colors duration-300">
      <Navbar />
      {children}
      <Footer />
      <MobileNav />
    </div>
  );
}
