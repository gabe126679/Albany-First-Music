import { Calendar, Clock, MapPin, Video, Users } from 'lucide-react';
import Reveal from './Reveal';

const details = [
  { icon: Calendar, label: 'When', value: 'Every Tuesday & Saturday' },
  { icon: Clock, label: 'Time', value: '5:00 – 8:00 PM' },
  { icon: MapPin, label: 'Where', value: 'See Instagram/Facebook for weekly updates' },
  { icon: Video, label: 'What happens', value: 'Bring your instrument, show your best work and have a good time!' },
];

export default function OpenSessions() {
  return (
    <section id="open-sessions" className="relative py-24 sm:py-32 bg-ink-50 dark:bg-[#0a0a0a] grain">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <Reveal>
              <p className="text-xs font-semibold tracking-widest uppercase text-gold-600 dark:text-neon-500 mb-4">
                Open Sessions
              </p>
              <h2 className="font-display text-5xl sm:text-6xl text-ink-900 dark:text-white leading-[0.95]">
                Show up. Play. Get recorded.
              </h2>
              <p className="mt-6 text-lg text-ink-700 dark:text-gray-300 leading-relaxed max-w-xl">
                Before the October audition, AFM holds informal Open Sessions every week. No
                pressure, no formal audition — just show up, perform, meet other artists, and get
                your work recorded for AFM's social channels.
              </p>
              <p className="mt-4 text-lg text-ink-700 dark:text-gray-300 leading-relaxed max-w-xl">
                These are advertised and open to the public. Bring an instrument, bring a friend,
                or just come watch.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-8 flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-white/[0.03] border border-ink-200 dark:border-white/10">
                <Users className="text-gold-600 dark:text-neon-500 flex-shrink-0" size={22} />
                <p className="text-ink-700 dark:text-gray-300">
                  Open Sessions may become more valuable than the October audition itself — they
                  create recurring momentum instead of one big event.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-white/[0.03] border border-ink-200 dark:border-white/10 shadow-sm">
              <h3 className="font-display text-2xl tracking-wide text-ink-900 dark:text-white mb-6">
                Session Details
              </h3>
              <div className="space-y-5">
                {details.map((d) => (
                  <div key={d.label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-ink-50 dark:bg-white/5 border border-ink-200 dark:border-white/10 grid place-items-center">
                      <d.icon className="text-gold-600 dark:text-neon-500" size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-ink-500 dark:text-gray-500">
                        {d.label}
                      </p>
                      <p className="text-base text-ink-900 dark:text-white font-medium">{d.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#apply"
                className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-gold-500 hover:bg-gold-600 dark:bg-neon-500 dark:hover:bg-neon-400 dark:text-black text-white font-semibold transition-all hover:scale-[1.01]"
              >
                Apply to Audition
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
