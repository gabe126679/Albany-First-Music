import { Disc3, Music, Clapperboard, BookMarked, Mic2 } from 'lucide-react';
import Reveal from './Reveal';

const fiveS = [
  {
    icon: Disc3,
    letter: 'S',
    title: 'Samples',
    text: 'Music clips, demos, recordings — anything that shows your sound.',
  },
  {
    icon: Music,
    letter: 'S',
    title: 'Songs',
    text: 'Original compositions. Full compositions, preferably with lyrics.',
  },
  {
    icon: Clapperboard,
    letter: 'S',
    title: 'Shorts',
    text: 'Short films, sketches, videos — visual work with a point of view.',
  },
  {
    icon: BookMarked,
    letter: 'S',
    title: 'Stories',
    text: 'Scripts, screenplays, written work — narrative in any form.',
  },
  {
    icon: Mic2,
    letter: 'S',
    title: 'Sets',
    text: 'Live sets, theatrical performances, set design.',
  },
];

export default function FiveS() {
  return (
    <section id="five-s" className="relative py-24 sm:py-32 grain overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-[32rem] h-[32rem] rounded-full bg-gold-400/10 dark:bg-neon-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="text-xs font-semibold tracking-widest uppercase text-gold-600 dark:text-neon-500 mb-4">
              5 S's
            </p>
            <h2 className="font-display text-5xl sm:text-7xl text-ink-900 dark:text-white leading-[0.9]">
              What we're looking for.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-lg text-ink-700 dark:text-gray-300 leading-relaxed">
              AFM exists to discover and showcase the Capital Region's best work across five
              categories. This is the creative language of AFM — and it's what we want you to
              submit.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {fiveS.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="group h-full p-7 rounded-xl border border-ink-200 dark:border-white/10 bg-white dark:bg-white/[0.03] hover:border-gold-400 dark:hover:border-neon-500/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-lg bg-ink-900 dark:bg-neon-500/10 grid place-items-center group-hover:scale-110 transition-transform">
                    <item.icon className="text-gold-500 dark:text-neon-500" size={26} />
                  </div>
                  <span className="font-display text-5xl text-ink-100 dark:text-white/10 group-hover:text-gold-300 dark:group-hover:text-neon-500/30 transition-colors">
                    {item.letter}
                  </span>
                </div>
                <h3 className="font-display text-2xl tracking-wide text-ink-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-ink-600 dark:text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 p-8 rounded-2xl bg-ink-900 dark:bg-gradient-to-br from-white/[0.05] to-transparent border border-ink-800 dark:border-white/10 text-center">
            <p className="font-serif italic text-xl sm:text-2xl text-white dark:text-gray-100 max-w-2xl mx-auto leading-snug">
              Send any art you make to the AFM Instagram. We repost artists from the area.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
