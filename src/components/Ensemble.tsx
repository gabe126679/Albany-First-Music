import { Star, RotateCw } from 'lucide-react';
import Reveal from './Reveal';

export default function Ensemble() {
  return (
    <section id="ensemble" className="relative py-24 sm:py-32 bg-ink-50 dark:bg-[#0a0a0a] grain">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-widest uppercase text-gold-600 dark:text-neon-500 mb-4">
            AFM Ensemble
          </p>
          <h2 className="font-display text-5xl sm:text-6xl text-ink-900 dark:text-white leading-[0.95] max-w-3xl">
            The Band.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-6 text-lg text-ink-700 dark:text-gray-300 leading-relaxed max-w-2xl">
            The AFM Ensemble is the rotating flagship group selected to perform in the monthly AFM
            live show. Ensemble members help shape the show and represent AFM onstage.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[...Array(8)].map((_, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="aspect-[3/4] rounded-xl border border-ink-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6 flex flex-col justify-between hover:border-gold-400 dark:hover:border-neon-500/50 transition-colors group">
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl text-ink-200 dark:text-white/10 group-hover:text-gold-400 dark:group-hover:text-neon-500/40 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Star className="text-ink-200 dark:text-white/10 group-hover:text-gold-500 dark:group-hover:text-neon-500 transition-colors" size={20} />
                </div>
                <div>
                  <p className="font-display text-lg tracking-wide text-ink-400 dark:text-gray-500">
                    Ensemble Member
                  </p>
                  <p className="text-sm text-ink-400 dark:text-gray-600">To be announced</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex items-center gap-3 justify-center text-ink-600 dark:text-gray-400">
            <RotateCw size={18} className="text-gold-600 dark:text-neon-500" />
            <p className="text-base">8 rotating members · selected from the AFM Community</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
