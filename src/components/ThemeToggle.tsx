import { useTheme } from './ThemeProvider';

type ThemeToggleProps = {
  compact?: boolean;
};

export default function ThemeToggle({ compact = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={[
        'group inline-flex items-center justify-center rounded-full border border-outline-variant/30',
        'bg-surface-container-low/90 text-on-surface shadow-[0_10px_30px_rgba(0,0,0,0.12)]',
        'transition-all duration-300 hover:border-primary/50 hover:text-primary',
        compact ? 'h-11 w-11' : 'h-11 gap-2 px-4',
      ].join(' ')}
    >
      <span
        className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:rotate-12"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {isDark ? 'light_mode' : 'dark_mode'}
      </span>
      {!compact && (
        <span className="font-label text-[11px] font-bold uppercase tracking-[0.22em]">
          {isDark ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  );
}
