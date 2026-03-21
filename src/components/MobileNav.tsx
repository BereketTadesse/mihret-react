import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function MobileNav() {
  const location = useLocation();
  const path = location.pathname;

  const getLinkClass = (target: string) => {
    const active = "flex flex-col items-center justify-center text-on-primary bg-primary rounded-lg p-2 md:p-3 transition-all active:scale-90 duration-300";
    const inactive = "flex flex-col items-center justify-center text-on-surface-variant p-2 md:p-3 hover:bg-surface-container-high/60 hover:text-on-surface transition-all active:scale-90 duration-300";
    return path === target ? active : inactive;
  };

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-lg rounded-xl z-50 bg-surface-container-high/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.22)] border border-outline-variant/20 md:hidden">
      <div className="flex justify-around items-center py-2 px-2 gap-1">
        <Link className={getLinkClass('/')} to="/">
          <span className="material-symbols-outlined mb-1">home</span>
        </Link>
        <Link className={getLinkClass('/portfolio')} to="/portfolio">
          <span className="material-symbols-outlined mb-1">grid_view</span>
        </Link>
        <Link className={getLinkClass('/about')} to="/about">
          <span className="material-symbols-outlined mb-1">groups</span>
        </Link>
        <Link className={getLinkClass('/contact')} to="/contact">
          <span className="material-symbols-outlined mb-1">forum</span>
        </Link>
        <Link className={getLinkClass('/services')} to="/services">
          <span className="material-symbols-outlined mb-1">mail</span>
        </Link>
        <ThemeToggle compact />
      </div>
    </nav>
  );
}
