-- Supabase / Postgres schema: Single table 'enquiry'
-- File: db/enquiry_table.sql
-- Purpose: store contact form submissions with precise visitor map location (latitude/longitude)
-- Access: PUBLIC - no authentication required, any visitor can submit

-- Make sure pgcrypto is available for gen_random_uuid()
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create enquiry table
CREATE TABLE IF NOT EXISTS public.enquiry (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text,
  phone text,
  institution_name text,
  message text,
  latitude numeric(10,7), -- visitor selects location on map
  longitude numeric(10,7), -- visitor selects location on map
  place_id text, -- optional Google Place ID from map click
  address text,  -- human readable address from map geocoding
  user_agent text, -- optional metadata from visitor browser
  ip inet, -- optional visitor ip (if captured server-side)
  status text DEFAULT 'new', -- new, contacted, closed
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.enquiry ENABLE ROW LEVEL SECURITY;

-- ============================================
-- RLS POLICIES - PUBLIC ACCESS (No Auth Required)
-- ============================================

-- Policy: Allow ANYONE (including anonymous visitors) to insert enquiries
-- This enables the public contact form to work without authentication
CREATE POLICY "enquiry_insert_public" ON public.enquiry
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Helpful indexes
CREATE INDEX IF NOT EXISTS enquiry_created_idx ON public.enquiry (created_at DESC);
CREATE INDEX IF NOT EXISTS enquiry_location_idx ON public.enquiry (latitude, longitude);
CREATE INDEX IF NOT EXISTS enquiry_status_idx ON public.enquiry (status);

-- ============================================
-- NOTES & IMPLEMENTATION GUIDE
-- ============================================
-- 1) PUBLIC ACCESS: Any visitor can submit the form without authentication
-- 2) TABLE NAME: 'enquiry' (as specified)
-- 3) MAP LOCATION CAPTURE: 
--    - Add a click handler to your Google Maps iframe or embed an interactive map
--    - When visitor clicks on the map, capture: latitude, longitude, place_id (optional), address
--    - Example front-end implementation:
--      • Use Google Maps JavaScript API (not just iframe)
--      • Listen for map click event: map.addListener('click', (e) => {...})
--      • Capture e.latLng.lat() and e.latLng.lng()
--      • Use Geocoding API to get address from coordinates
--      • Store all values in hidden form fields or state
--      • Submit to Supabase when form is submitted
-- 4) FORM SUBMISSION:
--    - Use Supabase client (anon key is fine - public access allowed)
--    - Example: supabase.from('enquiry').insert({name, email, phone, institution_name, message, latitude, longitude, address})
-- 5) IP & USER_AGENT:
--    - Capture client-side: navigator.userAgent
--    - For IP, use an edge function or server-side API route

-- To apply: Run this SQL in Supabase SQL editor
