import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../theme';

const links = [
  { label: 'About', href: '#about' },
  { label: '5 S\u2019s', href: '#five-s' },
  { label: 'Auditions', href: '#auditions' },
  { label: 'Open Sessions', href: '#open-sessions' },
  { label: 'Community', href: '#community' },
  { label: 'Ensemble', href: '#ensemble' },
  { label: 'The Show', href: '#show' },
  { label: 'Apply', href: '#apply' },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm border-b border-ink-200/50 dark:border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-9 h-9 rounded-md bg-ink-900 dark:bg-neon-500 text-gold-500 dark:text-black font-display text-xl leading-none">
            A
          </span>
          <span className="font-display text-xl tracking-wide text-ink-900 dark:text-white">
            ALBANY FIRST MUSIC
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-neon-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-md text-ink-700 dark:text-gray-300 hover:bg-ink-100 dark:hover:bg-white/10 transition-colors"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a
            href="#apply"
            className="px-5 py-2 rounded-md bg-gold-500 hover:bg-gold-600 dark:bg-neon-500 dark:hover:bg-neon-400 dark:text-black text-white font-semibold text-sm transition-colors"
          >
            Apply to Audition
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-md text-ink-800 dark:text-white"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="p-2 rounded-md text-ink-800 dark:text-white"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white dark:bg-black border-t border-ink-200/50 dark:border-white/10 px-5 py-4 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-base font-medium text-ink-800 dark:text-gray-200 hover:text-gold-600 dark:hover:text-neon-400"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
