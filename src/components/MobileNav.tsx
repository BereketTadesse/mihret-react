import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { to: '/', icon: 'home', label: 'Home' },
  { to: '/services', icon: 'auto_awesome', label: 'Services' },
  { to: '/portfolio', icon: 'grid_view', label: 'Portfolio' },
  { to: '/about', icon: 'groups', label: 'Team' },
  { to: '/contact', icon: 'forum', label: 'Contact' },
];

export default function MobileNav() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[94%] max-w-md rounded-2xl z-50 bg-surface-container-high/85 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.28)] border border-outline-variant/25 md:hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] rounded-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="flex justify-around items-center py-2 px-2">
        {navItems.map((item) => {
          const isActive = path === item.to;
          return (
            <Link key={item.to} to={item.to} className="relative flex flex-col items-center justify-center gap-[3px] py-1.5 px-3 rounded-xl transition-all duration-300 active:scale-90 min-w-[52px]">
              {/* Active background glow pill */}
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-pill"
                  className="absolute inset-0 rounded-xl bg-primary shadow-[0_4px_20px_rgba(201,75,28,0.5)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span
                className={`material-symbols-outlined relative z-10 text-[22px] transition-colors duration-300 ${isActive ? 'text-white' : 'text-on-surface-variant'}`}
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {item.icon}
              </span>
              <span className={`relative z-10 text-[9px] font-bold uppercase tracking-[0.12em] transition-colors duration-300 ${isActive ? 'text-white' : 'text-on-surface-variant/70'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}

      </div>
    </nav>
  );
}
