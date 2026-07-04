import { ArrowRight, Calendar, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grain pt-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-ink-50 via-white to-ink-100 dark:from-black dark:via-[#0a0a0a] dark:to-[#111]" />
        <div className="absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-gold-400/20 dark:bg-neon-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-ink-400/20 dark:bg-neon-600/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink-300/60 dark:border-white/20 bg-white/60 dark:bg-white/5 backdrop-blur-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-gold-500 dark:bg-neon-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-ink-700 dark:text-gray-300">
              Capital Region · Live Variety Show
            </span>
          </div>

          <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl leading-[0.85] tracking-tight text-ink-900 dark:text-white animate-fade-up">
            Albany
            <br />
            First <span className="text-gold-600 dark:text-neon-500">Music</span>
          </h1>

          <p className="mt-7 text-xl sm:text-2xl font-serif italic text-ink-700 dark:text-gray-300 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Representing the High Quality Art in the Capital Region.
          </p>

          <p className="mt-4 text-base sm:text-lg text-ink-600 dark:text-gray-400 max-w-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            A live variety show and creative community for serious artists in the Capital Region.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#apply"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md bg-gold-500 hover:bg-gold-600 dark:bg-neon-500 dark:hover:bg-neon-400 dark:text-black text-white font-semibold text-base transition-all hover:scale-[1.02] shadow-lg shadow-gold-500/20"
            >
              Apply to Audition
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-7 py-4 rounded-md border-2 border-ink-300 dark:border-white/20 text-ink-800 dark:text-white font-semibold text-base hover:border-ink-900 dark:hover:border-neon-500 transition-colors"
            >
              Learn About AFM
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-600 dark:text-gray-400 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <span className="inline-flex items-center gap-2">
              <Calendar size={16} className="text-gold-600 dark:text-neon-500" />
              Auditions · Oct 11, 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-gold-600 dark:text-neon-500" />
              Empire Live · Albany, NY
            </span>
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 inset-x-0 border-y border-ink-200/50 dark:border-white/10 bg-ink-50/50 dark:bg-white/[0.02] py-3 overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 whitespace-nowrap font-display text-lg tracking-widest text-ink-500 dark:text-gray-500">
              {['MUSIC', 'COMEDY', 'FILM', 'STORYTELLING', 'ORIGINAL WORK', 'LIVE VARIETY', 'CAPITAL REGION', 'SINCE 2026'].map((w) => (
                <span key={w} className="flex items-center gap-8">
                  {w} <span className="text-gold-500 dark:text-neon-500">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
