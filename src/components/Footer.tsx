import { Music2, Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-ink-900 dark:bg-black border-t border-white/10 py-14 grain">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="grid place-items-center w-9 h-9 rounded-md bg-neon-500 text-black font-display text-xl">
                A
              </span>
              <span className="font-display text-xl tracking-wide text-white">
                ALBANY FIRST MUSIC
              </span>
            </div>
            <p className="text-ink-300 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              Representing the high quality art in the Capital Region. A live variety show and
              creative community for serious artists.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gold-500 dark:text-neon-500 mb-4">
              Explore
            </p>
            <ul className="space-y-2.5">
              {[
                { label: 'About', href: '#about' },
                { label: 'Auditions', href: '#auditions' },
                { label: 'Community', href: '#community' },
                { label: 'Ensemble', href: '#ensemble' },
                { label: 'The Show', href: '#show' },
                { label: 'Apply', href: '#apply' },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-ink-300 dark:text-gray-400 hover:text-gold-500 dark:hover:text-neon-500 transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gold-500 dark:text-neon-500 mb-4">
              Connect
            </p>
            <div className="flex gap-3 mb-4">
              {[Instagram, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#apply"
                  className="w-10 h-10 rounded-lg bg-white/5 grid place-items-center text-ink-300 dark:text-gray-400 hover:bg-gold-500 hover:text-white dark:hover:bg-neon-500 dark:hover:text-black transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-ink-400 dark:text-gray-500 text-sm">
              Albany, NY
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-ink-400 dark:text-gray-500 text-xs">
            © {new Date().getFullYear()} Albany First Music. All rights reserved.
          </p>
          <p className="text-ink-400 dark:text-gray-500 text-xs flex items-center gap-1.5">
            <Music2 size={12} className="text-gold-500 dark:text-neon-500" />
            Judged by what they create, not by credentials.
          </p>
        </div>
      </div>
    </footer>
  );
}
