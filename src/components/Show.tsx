import { CalendarDays, Film, Mic, Laugh, BookOpen, Users, Star } from 'lucide-react';
import Reveal from './Reveal';

const features = [
  { icon: Mic, text: 'Original music' },
  { icon: Laugh, text: 'Comedy' },
  { icon: Film, text: 'Short films' },
  { icon: BookOpen, text: 'Storytelling' },
  { icon: Users, text: 'Guest artists' },
  { icon: Star, text: 'Recurring creative segments' },
];

export default function Show() {
  return (
    <section id="show" className="relative py-24 sm:py-32 grain overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full bg-gold-400/10 dark:bg-neon-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="text-xs font-semibold tracking-widest uppercase text-gold-600 dark:text-neon-500 mb-4">
              The Show
            </p>
            <h2 className="font-display text-5xl sm:text-7xl text-ink-900 dark:text-white leading-[0.9]">
              A live monthly
              <br />
              <span className="text-gold-600 dark:text-neon-500">variety show.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-lg text-ink-700 dark:text-gray-300 leading-relaxed">
              AFM is a live monthly variety show featuring original music, comedy, short films,
              storytelling, guest artists, and recurring creative segments.
            </p>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="mt-12 inline-flex items-center gap-3 px-6 py-4 rounded-full bg-ink-900 dark:bg-white/5 border border-ink-800 dark:border-white/10 mx-auto">
            <CalendarDays className="text-gold-500 dark:text-neon-500" size={22} />
            <span className="text-white dark:text-gray-200 font-medium">
              First proposed show date: <span className="text-gold-500 dark:text-neon-500 font-bold">January 2, 2027</span>
            </span>
          </div>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.text} delay={i * 80}>
              <div className="flex items-center gap-4 p-6 rounded-xl border border-ink-200 dark:border-white/10 bg-white dark:bg-white/[0.03] hover:border-gold-400 dark:hover:border-neon-500/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-ink-900 dark:bg-neon-500/10 grid place-items-center flex-shrink-0">
                  <f.icon className="text-gold-500 dark:text-neon-500" size={22} />
                </div>
                <span className="text-lg font-medium text-ink-900 dark:text-white">{f.text}</span>
              </div>
            </Reveal>
          ))}
        </div>


      </div>
    </section>
  );
}
