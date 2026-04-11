import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="group inline-flex items-center justify-center h-10 w-10 rounded-full border border-outline-variant/30 bg-surface-container-low/90 text-on-surface shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:border-primary/50 hover:text-primary"
    >
      <span
        className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:rotate-12"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {isDark ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );
}
