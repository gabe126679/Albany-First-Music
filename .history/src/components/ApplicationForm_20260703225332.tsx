import { useState, FormEvent } from 'react';
import { supabase } from '../lib/supabase';
import { CheckCircle2, Loader2, AlertCircle, Send } from 'lucide-react';
import Reveal from './Reveal';

const applicantTypes = [
  'Performer',
  'Songwriter',
  'Producer',
  'Composer',
  'Multi-instrumentalist',
  'Band',
  'Other',
];

const booleanOptions = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
];

const collaborateOptions = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'maybe', label: 'Maybe' },
];

interface FormData {
  full_name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  city_town: string;
  applicant_type: string;
  primary_instrument: string;
  secondary_instruments: string;
  sings: string;
  writes_original_music: string;
  writes_lyrics: string;
  looking_to_collaborate: string;
  favorite_bands: string;
  representative_artists: string;
  about_yourself: string;
  sample_link: string;
  social_links: string;
  consent: boolean;
}

const initialData: FormData = {
  full_name: '',
  email: '',
  phone: '',
  date_of_birth: '',
  city_town: '',
  applicant_type: '',
  primary_instrument: '',
  secondary_instruments: '',
  sings: '',
  writes_original_music: '',
  writes_lyrics: '',
  looking_to_collaborate: '',
  favorite_bands: '',
  representative_artists: '',
  about_yourself: '',
  sample_link: '',
  social_links: '',
  consent: false,
};

export default function ApplicationForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');

  const update = (field: keyof FormData, value: string | boolean) => {
    setData((d) => ({ ...d, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!data.full_name.trim()) e.full_name = 'Required';
    if (!data.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Enter a valid email';
    if (!data.date_of_birth) e.date_of_birth = 'Required';
    if (!data.city_town.trim()) e.city_town = 'Required';
    if (!data.applicant_type) e.applicant_type = 'Select one';
    if (!data.primary_instrument.trim()) e.primary_instrument = 'Required';
    if (!data.sings) e.sings = 'Select one';
    if (!data.writes_original_music) e.writes_original_music = 'Select one';
    if (!data.writes_lyrics) e.writes_lyrics = 'Select one';
    if (!data.looking_to_collaborate) e.looking_to_collaborate = 'Select one';
    if (!data.favorite_bands.trim()) e.favorite_bands = 'Required';
    if (!data.representative_artists.trim()) e.representative_artists = 'Required';
    if (!data.about_yourself.trim()) e.about_yourself = 'Required';
    else if (data.about_yourself.trim().length < 10) e.about_yourself = 'Please write a bit more';
    if (!data.consent) e.consent = 'You must agree to continue';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) {
      const firstError = document.querySelector('[data-error="true"]');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setStatus('submitting');
    setSubmitError('');
    try {
      const { data: inserted, error } = await supabase.from('afm_applicants').insert({
        full_name: data.full_name.trim(),
        email: data.email.trim(),
        phone: data.phone.trim() || null,
        date_of_birth: data.date_of_birth,
        city_town: data.city_town.trim(),
        applicant_type: data.applicant_type,
        primary_instrument: data.primary_instrument.trim(),
        secondary_instruments: data.secondary_instruments.trim() || null,
        sings: data.sings === 'yes',
        writes_original_music: data.writes_original_music === 'yes',
        writes_lyrics: data.writes_lyrics === 'yes',
        looking_to_collaborate: data.looking_to_collaborate,
        favorite_bands: data.favorite_bands.trim(),
        representative_artists: data.representative_artists.trim(),
        about_yourself: data.about_yourself.trim(),
        sample_link: data.sample_link.trim() || null,
        social_links: data.social_links.trim() || null,
        consent: true,
      })
      .select();
      console.log(inserted);
      console.log(error);
      if (error) throw error;
      setStatus('success');
      window.scrollTo({ top: document.getElementById('apply')?.offsetTop ?? 0, behavior: 'smooth' });
    } catch (err) {
      setStatus('error');
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <section id="apply" className="relative py-24 sm:py-32 bg-ink-50 dark:bg-[#0a0a0a] grain">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <div className="w-20 h-20 rounded-full bg-gold-500 dark:bg-neon-500 grid place-items-center mx-auto mb-8 animate-fade-up">
            <CheckCircle2 className="text-white dark:text-black" size={40} />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-ink-900 dark:text-white mb-5 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Application Received
          </h2>
          <p className="text-lg text-ink-700 dark:text-gray-300 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Your AFM audition application has been received. You will receive confirmation by email
            with your Applicant ID and next steps.
          </p>
          <button
            onClick={() => {
              setData(initialData);
              setStatus('idle');
            }}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-md border-2 border-ink-300 dark:border-white/20 text-ink-800 dark:text-white font-semibold hover:border-ink-900 dark:hover:border-neon-500 transition-colors animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            Submit another application
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="relative py-24 sm:py-32 bg-ink-50 dark:bg-[#0a0a0a] grain">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-gold-600 dark:text-neon-500 mb-4">
              Application Form
            </p>
            <h2 className="font-display text-5xl sm:text-6xl text-ink-900 dark:text-white leading-[0.95]">
              Apply to Audition
            </h2>
            <p className="mt-5 text-lg text-ink-700 dark:text-gray-300">
              Fill out the form below. Fields marked <span className="text-gold-600 dark:text-neon-500 font-semibold">*</span> are required.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Full Name */}
            <Field label="Full Name" required error={errors.full_name}>
              <input
                type="text"
                className="field-input"
                placeholder="Jane Doe"
                value={data.full_name}
                onChange={(e) => update('full_name', e.target.value)}
                data-error={!!errors.full_name}
              />
            </Field>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Email */}
              <Field label="Email Address" required error={errors.email}>
                <input
                  type="email"
                  className="field-input"
                  placeholder="jane@email.com"
                  value={data.email}
                  onChange={(e) => update('email', e.target.value)}
                  data-error={!!errors.email}
                />
              </Field>
              {/* Phone */}
              <Field label="Phone Number" error={errors.phone}>
                <input
                  type="tel"
                  className="field-input"
                  placeholder="(518) 555-0100"
                  value={data.phone}
                  onChange={(e) => update('phone', e.target.value)}
                />
              </Field>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* DOB */}
              <Field label="Date of Birth" required error={errors.date_of_birth}>
                <input
                  type="date"
                  className="field-input"
                  value={data.date_of_birth}
                  onChange={(e) => update('date_of_birth', e.target.value)}
                  data-error={!!errors.date_of_birth}
                />
              </Field>
              {/* City */}
              <Field label="City / Town" required error={errors.city_town}>
                <input
                  type="text"
                  className="field-input"
                  placeholder="Albany, NY"
                  value={data.city_town}
                  onChange={(e) => update('city_town', e.target.value)}
                  data-error={!!errors.city_town}
                />
              </Field>
            </div>

            {/* Applicant type */}
            <Field label="Which best describes you?" required error={errors.applicant_type}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {applicantTypes.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => update('applicant_type', t)}
                    className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all text-left ${
                      data.applicant_type === t
                        ? 'border-gold-500 dark:border-neon-500 bg-gold-50 dark:bg-neon-500/10 text-ink-900 dark:text-white'
                        : 'border-ink-200 dark:border-white/15 text-ink-700 dark:text-gray-300 hover:border-ink-400 dark:hover:border-white/30'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </Field>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Primary instrument */}
              <Field label="Primary Instrument" required error={errors.primary_instrument}>
                <input
                  type="text"
                  className="field-input"
                  placeholder="Guitar, vocals, drums..."
                  value={data.primary_instrument}
                  onChange={(e) => update('primary_instrument', e.target.value)}
                  data-error={!!errors.primary_instrument}
                />
              </Field>
              {/* Secondary */}
              <Field label="Secondary Instrument(s)" error={errors.secondary_instruments}>
                <input
                  type="text"
                  className="field-input"
                  placeholder="Piano, bass, harmonica..."
                  value={data.secondary_instruments}
                  onChange={(e) => update('secondary_instruments', e.target.value)}
                />
              </Field>
            </div>

            {/* Boolean questions */}
            <div className="grid sm:grid-cols-3 gap-6">
              <Field label="Do you sing?" required error={errors.sings}>
                <ChoiceButtons options={booleanOptions} value={data.sings} onChange={(v) => update('sings', v)} />
              </Field>
              <Field label="Write original music?" required error={errors.writes_original_music}>
                <ChoiceButtons options={booleanOptions} value={data.writes_original_music} onChange={(v) => update('writes_original_music', v)} />
              </Field>
              <Field label="Write lyrics?" required error={errors.writes_lyrics}>
                <ChoiceButtons options={booleanOptions} value={data.writes_lyrics} onChange={(v) => update('writes_lyrics', v)} />
              </Field>
            </div>

            {/* Collaborate */}
            <Field label="Are you currently looking to join a band or collaborate?" required error={errors.looking_to_collaborate}>
              <ChoiceButtons options={collaborateOptions} value={data.looking_to_collaborate} onChange={(v) => update('looking_to_collaborate', v)} />
            </Field>

            {/* Favorite bands */}
            <Field label="Top 3 favorite bands" required error={errors.favorite_bands}>
              <input
                type="text"
                className="field-input"
                placeholder="Type here..."
                value={data.favorite_bands}
                onChange={(e) => update('favorite_bands', e.target.value)}
                data-error={!!errors.favorite_bands}
              />
            </Field>

            {/* Representative artists */}
            <Field label="Top 3 artists that best represent the music you create or want to create" required error={errors.representative_artists}>
              <input
                type="text"
                className="field-input"
                placeholder="Type here..."
                value={data.representative_artists}
                onChange={(e) => update('representative_artists', e.target.value)}
                data-error={!!errors.representative_artists}
              />
            </Field>

            {/* About yourself */}
            <Field label="Tell us about yourself in 2–3 sentences" required error={errors.about_yourself}>
              <textarea
                className="field-input min-h-[120px] resize-y"
                placeholder="Type here..."
                value={data.about_yourself}
                onChange={(e) => update('about_yourself', e.target.value)}
                data-error={!!errors.about_yourself}
              />
            </Field>

            {/* Sample link */}
            <Field label="Upload an example of your music or paste a video/audio link" error={errors.sample_link}>
              <input
                type="text"
                className="field-input"
                placeholder="https://soundcloud.com/yourname or YouTube link"
                value={data.sample_link}
                onChange={(e) => update('sample_link', e.target.value)}
              />
            </Field>

            {/* Social links */}
            <Field label="Social media, website, Spotify, YouTube, or relevant links" error={errors.social_links}>
              <input
                type="text"
                className="field-input"
                placeholder="@yourhandle · yourwebsite.com"
                value={data.social_links}
                onChange={(e) => update('social_links', e.target.value)}
              />
            </Field>

            {/* Consent */}
            <div data-error={!!errors.consent}>
              <label className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-colors hover:border-ink-300 dark:hover:border-white/30 ${
                errors.consent ? 'border-red-400' : 'border-ink-200 dark:border-white/15'
              }`}>
                <input
                  type="checkbox"
                  checked={data.consent}
                  onChange={(e) => update('consent', e.target.checked)}
                  className="mt-1 w-5 h-5 rounded accent-gold-500 dark:accent-neon-500 flex-shrink-0"
                />
                <span className="text-sm text-ink-700 dark:text-gray-300 leading-relaxed">
                  By submitting this application, you agree to receive audition updates and future
                  opportunities from Albany First Music. You may unsubscribe from email
                  communications at any time.
                </span>
              </label>
              {errors.consent && (
                <p className="mt-1.5 text-sm text-red-600 dark:text-red-400 flex items-center gap-1.5">
                  <AlertCircle size={14} /> {errors.consent}
                </p>
              )}
            </div>

            {/* Submit error */}
            {status === 'error' && (
              <div className="p-4 rounded-lg bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 flex items-start gap-3">
                <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-red-700 dark:text-red-300">{submitError}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full flex items-center justify-center gap-2 px-7 py-4 rounded-md bg-gold-500 hover:bg-gold-600 dark:bg-neon-500 dark:hover:bg-neon-400 dark:text-black text-white font-semibold text-lg transition-all hover:scale-[1.01] shadow-lg shadow-gold-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Submit Application
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="field-label">
        {label} {required && <span className="text-gold-600 dark:text-neon-500">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-sm text-red-600 dark:text-red-400 flex items-center gap-1.5">
          <AlertCircle size={14} /> {error}
        </p>
      )}
    </div>
  );
}

function ChoiceButtons({
  options,
  value,
  onChange,
}: {
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex gap-2">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          className={`flex-1 px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
            value === o.value
              ? 'border-gold-500 dark:border-neon-500 bg-gold-50 dark:bg-neon-500/10 text-ink-900 dark:text-white'
              : 'border-ink-200 dark:border-white/15 text-ink-700 dark:text-gray-300 hover:border-ink-400 dark:hover:border-white/30'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
