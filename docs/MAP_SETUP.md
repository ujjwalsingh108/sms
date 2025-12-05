# Interactive Map Setup Guide

## Overview
The contact page now includes an interactive Google Maps component that allows visitors to click or drag a marker to select their precise location.

## Setup Steps

### 1. Get Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - **Maps JavaScript API**
   - **Geocoding API** (for address lookup)
   - **Places API** (optional, for enhanced location data)
4. Go to **Credentials** → **Create Credentials** → **API Key**
5. Copy your API key
6. **Important**: Restrict your API key:
   - Under "API restrictions", select "Restrict key"
   - Choose: Maps JavaScript API, Geocoding API, Places API
   - Under "Application restrictions", select "HTTP referrers"
   - Add your domains (e.g., `localhost:3000/*`, `yourdomain.com/*`)

### 2. Configure Environment Variables

1. Create a `.env.local` file in your project root:
   ```bash
   cp .env.local.example .env.local
   ```

2. Add your Google Maps API key:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

3. Add Supabase credentials (for form submission):
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   ```

### 3. Restart Development Server

```bash
npm run dev
```

## How It Works

### User Experience
1. Visitor fills out the contact form
2. Visitor clicks on the map or drags the marker to select their location
3. The selected location is automatically geocoded to get the address
4. Form submission includes:
   - Name, email, phone, institution name, message
   - **Latitude & longitude** (precise coordinates)
   - **Address** (human-readable)
   - **Place ID** (Google Maps reference)

### Technical Details

**MapPicker Component** (`components/map-picker.tsx`):
- Dynamically loads Google Maps JavaScript API
- Initializes map centered on HSR Layout, Bengaluru (default)
- Creates draggable marker
- Handles click events on map
- Uses Geocoding API to convert coordinates → address
- Calls `onLocationSelect` callback with location data

**Contact Page Updates** (`app/contact/page.tsx`):
- Added `latitude`, `longitude`, `address`, `placeId` to form state
- Integrated `MapPicker` component
- Validates location selection before form submission
- Displays selected address to user

**Data Flow**:
```
User clicks map 
→ MapPicker captures lat/lng 
→ Geocoding API gets address 
→ onLocationSelect callback fires 
→ Contact form state updates 
→ Form submission includes all location data
```

## Database Integration

The `enquiry` table (see `db/enquiry_table.sql`) stores:
- `latitude` NUMERIC(10,7) - Up to 7 decimal precision
- `longitude` NUMERIC(10,7)
- `address` TEXT - Human-readable address
- `place_id` TEXT - Google Maps Place ID

### Next Steps for Supabase Integration

1. **Install Supabase Client**:
   ```bash
   npm install @supabase/supabase-js
   ```

2. **Create Supabase Client** (`lib/supabase.ts`):
   ```typescript
   import { createClient } from '@supabase/supabase-js'

   export const supabase = createClient(
     process.env.NEXT_PUBLIC_SUPABASE_URL!,
     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
   )
   ```

3. **Update Form Submission** in `app/contact/page.tsx`:
   ```typescript
   import { supabase } from '@/lib/supabase'

   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     
     if (!formData.latitude || !formData.longitude) {
       alert("Please select your location on the map");
       return;
     }

     const { data, error } = await supabase
       .from('enquiry')
       .insert([
         {
           name: formData.name,
           email: formData.email,
           phone: formData.phone,
           institution_name: formData.school,
           message: formData.message,
           latitude: formData.latitude,
           longitude: formData.longitude,
           address: formData.address,
           place_id: formData.placeId,
           user_agent: navigator.userAgent,
         }
       ]);

     if (error) {
       console.error('Error submitting form:', error);
       alert('Failed to submit form. Please try again.');
     } else {
       alert('Thank you! Your enquiry has been submitted.');
       // Reset form
     }
   };
   ```

## Testing

1. Open contact page: `http://localhost:3000/contact`
2. Fill out form fields
3. Click anywhere on the map or drag the marker
4. Verify the "Selected: [address]" appears below the map
5. Submit the form
6. Check browser console for submitted data (includes lat/lng)

## Troubleshooting

**Map doesn't load**:
- Check browser console for errors
- Verify `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` is set in `.env.local`
- Ensure Maps JavaScript API is enabled in Google Cloud Console
- Check API key restrictions aren't blocking localhost

**Geocoding not working**:
- Enable Geocoding API in Google Cloud Console
- Check API key has Geocoding API permission
- Verify no quota limits reached

**"Loading map..." stuck**:
- Check network tab for failed script loads
- Verify API key is correct
- Try refreshing the page

## API Costs

Google Maps offers a **$200 monthly credit** (free tier):
- Maps JavaScript API: $7 per 1,000 loads
- Geocoding API: $5 per 1,000 requests
- Typical usage for small-medium sites stays within free tier

Monitor usage at: [Google Cloud Console → Billing](https://console.cloud.google.com/billing)
