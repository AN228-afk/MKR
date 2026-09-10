w# Store Locator Integration Guide

This document explains the integration of Google Maps Store Locator into the mkr-safety application.

## Files Created/Modified

### New Files
- **`src/pages/StoreLocator.tsx`** - React component for the store locator page
- **`.env.example`** - Environment variables template
- **`.env.local`** - Local environment configuration (contains API key)
- **`.gitignore`** - Git ignore rules (ensures `.env.local` is not committed)

### Modified Files
- **`src/App.tsx`** - Added StoreLocator import and route
- **`src/components/Layout.tsx`** - Added "Store Locator" link to navigation

## Environment Configuration

The store locator uses Google Maps API key stored in environment variables:

### Setup Steps

1. **Copy the example file** (already done):
   ```bash
   cp .env.example .env.local
   ```

2. **Add your API key** to `.env.local`:
   ```
   VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

3. **Never commit `.env.local`** - It's already in `.gitignore`

## API Key Security

⚠️ **Important Security Recommendations:**

1. **Revoke the old exposed key**: Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Navigate to Credentials
   - Delete the key: `AIzaSyDcuSnnxnfCDbMb9UH6GAmEMl0zQxWSpEY`

2. **Generate a new restricted key**:
   - Click "Create Credentials" → "API Key"
   - Click the pencil to edit restrictions
   - **Application restrictions**: Select "HTTP referrers (web sites)"
   - Add your domain(s): `yourdomain.com/*`
   - **API restrictions**: Enable only:
     - Maps JavaScript API
     - Maps Embed API
     - Maps SDK for Android (if needed)
   - Copy the new key and add to `.env.local`

3. **Development setup**:
   - Use `localhost/*` for development
   - Use production domain for production

## Accessing the Store Locator

The store locator is available at: `/store-locator`

It's also linked in the main navigation menu.

## Features

- Interactive map centered on MKR Safety Solutions' Bangalore location
- Store information display
- Distance matrix calculations
- Autocomplete search for nearest locations
- Full-screen map option
- Mobile-responsive design

## Location Details

- **Title**: MKR SAFETY SOLUTIONS
- **Address**: H.No.24/1, 18th a cross Road, Muthyala nagar, Mathikere
- **City**: Bangalore, Karnataka, India
- **Coordinates**: 13.0381072, 77.5470819
- **Google Place ID**: ChIJo_c0R1M9rjsRWUwguZ4b_JQ

## Customization

To add more locations, modify the `locations` array in `src/pages/StoreLocator.tsx`:

```typescript
const config: StoreLocatorConfig = {
  locations: [
    // Add more locations here
    {
      title: "Location Name",
      address1: "Street Address",
      address2: "City, State, Country",
      coords: { lat: 0, lng: 0 },
      placeId: "ChIJ...",
    },
  ],
  // ... rest of config
};
```

## Styling Customization

The map appearance can be customized via CSS variables in `StoreLocator.tsx`:

```typescript
style={{
  "--gmpx-color-primary": "#1967d2",
  "--gmpx-font-family-base": "'Roboto', sans-serif",
  // ... other variables
}}
```

Refer to the [Google Maps Extended Component Library documentation](https://github.com/googlemaps/extended-component-library/blob/main/src/store_locator/README.md) for more styling options.

## Troubleshooting

### "Google Maps API key is not configured"
- Ensure `.env.local` exists in the project root
- Verify `VITE_GOOGLE_MAPS_API_KEY` is set correctly
- Restart the development server after changing environment variables

### Map not loading
- Check browser console for API errors
- Verify the API key has the correct permissions
- Ensure HTTP referrer restrictions match your development environment

### Component not rendering
- Ensure the `.env.local` file is in the correct location
- Check that `VITE_GOOGLE_MAPS_API_KEY` starts with `VITE_` (required by Vite)
- Clear browser cache and reload

## Related Files

- [Store Locator Component](src/pages/StoreLocator.tsx)
- [App Routes](src/App.tsx)
- [Navigation Layout](src/components/Layout.tsx)
- [Environment Example](.env.example)
