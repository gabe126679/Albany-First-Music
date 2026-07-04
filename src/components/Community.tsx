import { Sparkles, Mic2, Clapperboard, PenLine, Users2 } from 'lucide-react';
import Reveal from './Reveal';

const opportunities = [
  { icon: Mic2, text: 'Future shows' },
  { icon: Users2, text: 'Collaborations' },
  { icon: Clapperboard, text: 'Featured segments' },
  { icon: PenLine, text: 'Interviews' },
  { icon: Sparkles, text: 'Creative opportunities' },
];

export default function Community() {
  return (
    <section id="community" className="relative py-24 sm:py-32 grain">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gold-600 dark:text-neon-500 mb-4">
                AFM Community
              </p>
              <h2 className="font-display text-5xl sm:text-6xl text-ink-900 dark:text-white leading-[0.95]">
                For artists who create.
              </h2>
              <p className="mt-6 text-lg text-ink-700 dark:text-gray-300 leading-relaxed">
                The AFM Community is for artists who independently create and present original work.
                It's open to anyone in the Capital Region making something real — no gatekeepers, no
                credentials required.
              </p>
              <p className="mt-4 text-lg text-ink-700 dark:text-gray-300 leading-relaxed">
                Members may be considered for future shows, collaborations, featured segments,
                interviews, and creative opportunities as AFM grows.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="p-8 sm:p-10 rounded-2xl bg-ink-900 dark:bg-gradient-to-br from-white/[0.05] to-transparent border border-ink-800 dark:border-white/10">
              <h3 className="font-display text-xl tracking-widest uppercase text-gold-500 dark:text-neon-500 mb-6">
                Members may be considered for
              </h3>
              <div className="space-y-4">
                {opportunities.map((o) => (
                  <div key={o.text} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-white/10 grid place-items-center group-hover:bg-gold-500/20 transition-colors">
                      <o.icon className="text-gold-500 dark:text-neon-500" size={18} />
                    </div>
                    <span className="text-lg text-white dark:text-gray-200">{o.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
