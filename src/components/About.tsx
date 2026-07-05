import { Users, Star, Mic, Film } from 'lucide-react';
import Reveal from './Reveal';

const pillars = [
  { icon: Mic, title: 'Discover', text: 'We find the strongest creative voices across the Capital Region — based on what they make, not by status.' },
  { icon: Users, title: 'Connect', text: 'Artists meet collaborators, audiences, and opportunities through a community built on original work.' },
  { icon: Star, title: 'Showcase', text: 'Proven to be the best artists in the Capital Region, 8 musicians take the stage in a live monthly variety show.' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 grain">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-widest uppercase text-gold-600 dark:text-neon-500 mb-4">
            About AFM
          </p>
          <h2 className="font-display text-5xl sm:text-6xl text-ink-900 dark:text-white max-w-3xl leading-[0.95]">
            A show that develops artists.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 max-w-5xl">
            <p className="text-lg text-ink-700 dark:text-gray-300 leading-relaxed">
              Albany First Music exists to discover, connect, and showcase the strongest creative
              voices in the Capital Region. We believe creators should be judged by what they
              create — not by credentials, connections, or who they know.
            </p>
            <p className="text-lg text-ink-700 dark:text-gray-300 leading-relaxed">
              Every artist in the Capital Region should be a community member, because AFM is
              designed to amplify ALL artists' voices. Each member gets an opportunity to network,
              collaborate and perform, because AFM is part arts institution, part underground scene,
              part live variety show.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="group h-full p-7 rounded-xl border border-ink-200/60 dark:border-white/10 bg-white dark:bg-white/[0.03] hover:border-gold-400 dark:hover:border-neon-500/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-ink-900 dark:bg-neon-500/10 grid place-items-center mb-5 group-hover:scale-110 transition-transform">
                  <p.icon className="text-gold-500 dark:text-neon-500" size={22} />
                </div>
                <h3 className="font-display text-2xl tracking-wide text-ink-900 dark:text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-ink-600 dark:text-gray-400 leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-ink-900 dark:bg-gradient-to-br from-white/[0.04] to-transparent border border-ink-800 dark:border-white/10 text-center">
            <Film className="mx-auto text-gold-500 dark:text-neon-500 mb-4" size={28} />
            <p className="font-serif italic text-2xl sm:text-3xl text-white dark:text-gray-100 max-w-3xl mx-auto leading-snug">
              Become an Albany First Music Member.
            </p>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
