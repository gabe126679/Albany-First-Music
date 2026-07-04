import { Calendar, MapPin, Clock, Music, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';

const details = [
  { icon: Calendar, label: 'Date', value: 'October 11, 2026' },
  { icon: MapPin, label: 'Location', value: 'Empire Live / 93 North Pearl Street, Albany, New York, 12207' },
  { icon: Clock, label: 'Format', value: 'Live audition before a panel of artists' },
];

export default function Auditions() {
  return (
    <section id="auditions" className="relative py-24 sm:py-32 bg-ink-50 dark:bg-[#0a0a0a] grain">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <Reveal>
              <p className="text-xs font-semibold tracking-widest uppercase text-gold-600 dark:text-neon-500 mb-4">
                Auditions
              </p>
              <h2 className="font-display text-5xl sm:text-6xl text-ink-900 dark:text-white leading-[0.95]">
                Take the stage.
              </h2>
              <p className="mt-6 text-lg text-ink-700 dark:text-gray-300 leading-relaxed max-w-xl">
                AFM holds open auditions for serious artists across the Capital Region. If you
                create original work and want to be part of something real, this is your way in.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-10 space-y-4">
                {details.map((d) => (
                  <div key={d.label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-white dark:bg-white/5 border border-ink-200 dark:border-white/10 grid place-items-center">
                      <d.icon className="text-gold-600 dark:text-neon-500" size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-ink-500 dark:text-gray-500">
                        {d.label}
                      </p>
                      <p className="text-lg text-ink-900 dark:text-white font-medium">{d.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <a
                href="#apply"
                className="mt-10 inline-flex items-center gap-2 px-7 py-4 rounded-md bg-gold-500 hover:bg-gold-600 dark:bg-neon-500 dark:hover:bg-neon-400 dark:text-black text-white font-semibold transition-all hover:scale-[1.02] shadow-lg shadow-gold-500/20"
              >
                Apply to Audition
              </a>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-white/[0.03] border border-ink-200 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Music className="text-gold-600 dark:text-neon-500" size={24} />
                <h3 className="font-display text-2xl tracking-wide text-ink-900 dark:text-white">
                  What to Prepare
                </h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="flex-shrink-0 text-gold-600 dark:text-neon-500 mt-0.5" size={20} />
                  <p className="text-ink-700 dark:text-gray-300">
                    <span className="font-semibold text-ink-900 dark:text-white">An original song</span> around
                    3 minutes long.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="flex-shrink-0 text-gold-600 dark:text-neon-500 mt-0.5" size={20} />
                  <p className="text-ink-700 dark:text-gray-300">
                    Covers are allowed, but <span className="font-semibold text-ink-900 dark:text-white">original work is preferred</span>.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="flex-shrink-0 text-gold-600 dark:text-neon-500 mt-0.5" size={20} />
                  <p className="text-ink-700 dark:text-gray-300">
                    Open to musicians, songwriters, producers, composers, multi-instrumentalists, bands, and other serious creatives.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="flex-shrink-0 text-gold-600 dark:text-neon-500 mt-0.5" size={20} />
                  <p className="text-ink-700 dark:text-gray-300">
                    Bring yourself and your instrument. We handle the rest.
                  </p>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
