/*
# Create afm_applicants table (single-tenant, no auth)

1. New Tables
- `afm_applicants`
- `id` (uuid, primary key) — also surfaced to the applicant as their Applicant ID
- `full_name` (text, not null)
- `email` (text, not null)
- `phone` (text, nullable)
- `date_of_birth` (date, not null)
- `city_town` (text, not null)
- `applicant_type` (text, not null) — Performer / Songwriter / Producer / Composer / Multi-instrumentalist / Band / Other
- `primary_instrument` (text, not null)
- `secondary_instruments` (text, nullable)
- `sings` (boolean, nullable)
- `writes_original_music` (boolean, nullable)
- `writes_lyrics` (boolean, nullable)
- `looking_to_collaborate` (text, nullable) — yes / no / maybe
- `favorite_bands` (text, not null)
- `representative_artists` (text, not null)
- `about_yourself` (text, not null)
- `sample_link` (text, nullable) — pasted video/audio link
- `social_links` (text, nullable)
- `consent` (boolean, not null) — must be true to submit
- `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `afm_applicants`.
- Allow anon + authenticated INSERT only (public submission form, no login).
- No SELECT/UPDATE/DELETE for anon — submissions are private to project owners.
*/

CREATE TABLE IF NOT EXISTS afm_applicants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  date_of_birth date NOT NULL,
  city_town text NOT NULL,
  applicant_type text NOT NULL,
  primary_instrument text NOT NULL,
  secondary_instruments text,
  sings boolean,
  writes_original_music boolean,
  writes_lyrics boolean,
  looking_to_collaborate text,
  favorite_bands text NOT NULL,
  representative_artists text NOT NULL,
  about_yourself text NOT NULL,
  sample_link text,
  social_links text,
  consent boolean NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE afm_applicants ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_afm_applicants" ON afm_applicants;
CREATE POLICY "anon_insert_afm_applicants"
ON afm_applicants FOR INSERT
TO anon, authenticated
WITH CHECK (true);
