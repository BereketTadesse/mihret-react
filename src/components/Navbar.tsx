import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const location = useLocation();
  const { theme } = useTheme();
  const path = location.pathname;
  const logoSrc = theme === 'dark' ? '/m1x1 black.png' : '/m1x1 white.png';

  const getLinkClass = (target: string) => {
    const active = "text-primary font-bold font-headline tracking-tighter uppercase transition-colors duration-300 text-sm lg:text-base";
    const inactive = "text-on-surface-variant hover:text-primary font-headline tracking-tighter uppercase transition-colors duration-300 text-sm lg:text-base";
    return path === target ? active : inactive;
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex justify-between items-center px-6 md:px-8 py-4 md:py-6 border-b border-outline-variant/10">
      <div className="flex items-center gap-4">
        <Link to="/" aria-label="Mihret home">
          <img
            src={logoSrc}
            alt="Mihret logo"
            className="h-10 w-auto object-contain sm:h-12 md:h-14"
          />
        </Link>
        <Link to="/">
          <h1 className="font-headline uppercase text-primary leading-none">
            <span className="block text-xl font-black tracking-[0.22em] sm:text-2xl">MIHRET</span>
            <span className="block text-[0.68rem] font-bold tracking-[0.4em] sm:text-xs">MULTIMEDIA</span>
          </h1>
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-6 lg:gap-12">
        <Link className={getLinkClass('/')} to="/">HOME</Link>
        <Link className={getLinkClass('/services')} to="/services">SERVICES</Link>
        <Link className={getLinkClass('/portfolio')} to="/portfolio">PORTFOLIO</Link>
        <Link className={getLinkClass('/about')} to="/about">OUR TEAM</Link>
        <Link className={getLinkClass('/contact')} to="/contact">CONTACT</Link>
      </nav>
      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
