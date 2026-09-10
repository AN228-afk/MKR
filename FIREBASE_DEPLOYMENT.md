# Firebase Deployment Guide

## Prerequisites

1. **Firebase CLI** installed globally:
   ```bash
   npm install -g firebase-tools
   ```

2. **Authenticated with Firebase**:
   ```bash
   firebase login
   ```

3. **Environment variables configured**:
   - Ensure `.env.local` exists in `artifacts/mkr-safety/` with your API key
   - Never commit this file (it's in `.gitignore`)

## Deployment Steps

### Option 1: Using the Deploy Script (Recommended)

```bash
# Make the script executable
chmod +x deploy.sh

# Run the deployment
./deploy.sh
```

### Option 2: Manual Deployment

```bash
# 1. Build the application
cd artifacts/mkr-safety
pnpm build
cd ../..

# 2. Deploy to Firebase
firebase deploy --only hosting:mkr-safety
```

## Handling API Key in Firebase

The Google Maps API key is embedded during the build process via environment variables. Here's how it works:

### Current Approach (Build-time)
- ✅ Secure: Key is not exposed in version control
- ✅ Simple: Works with existing Vite setup
- ⚠️ Limitation: Key is embedded in the bundle (visible in browser)

### Build Configuration

The Vite config loads `VITE_GOOGLE_MAPS_API_KEY` from `.env.local` during build:
- During `pnpm build`, Vite replaces `import.meta.env.VITE_GOOGLE_MAPS_API_KEY` with the actual key
- The bundle includes the key value (unavoidable for client-side Maps usage)

### Security Best Practices

To secure your API key on Firebase:

1. **Domain Restrictions** (Most Important):
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Find your API key
   - Add HTTP referrer restrictions to your Firebase domain: `*.web.app/*`

2. **API Method Restrictions**:
   - Only enable Maps JavaScript API
   - Disable other APIs you don't use

3. **Monitoring**:
   - Enable billing alerts in Google Cloud
   - Monitor API usage regularly

## Environment Variables for Firebase

Firebase has several ways to handle environment variables:

### For Sensitive Data (Recommended for Production)

Use **Firebase Remote Config** or **Cloud Functions** to serve sensitive values:

```typescript
// In your StoreLocator.tsx, fetch from Cloud Function instead:
const response = await fetch('/api/config');
const config = await response.json();
const apiKey = config.mapsApiKey;
```

Then deploy a Cloud Function to securely serve the key.

### For This Implementation

Since the Google Maps API key must be client-side accessible (web requirement), we:
1. Keep it in `.env.local` (not committed)
2. Rely on **domain restrictions** in Google Cloud Console
3. Use **HTTP referrer restrictions** to limit key usage to your domain

## Firebase Configuration

Your `firebase.json` is configured correctly:

```json
{
  "hosting": [
    {
      "target": "mkr-safety",
      "public": "artifacts/mkr-safety/dist/public",
      "rewrites": [
        {
          "source": "**",
          "destination": "/index.html"
        }
      ]
    }
  ]
}
```

This:
- Points to the build output directory
- Rewrites all routes to `index.html` (SPA routing)
- Prevents 404 errors on page refresh

## Deployment Checklist

Before deploying, ensure:

- [ ] `.env.local` exists with valid API key
- [ ] `.env.local` is in `.gitignore` (won't be committed)
- [ ] Build succeeds: `pnpm build`
- [ ] No TypeScript errors: `pnpm typecheck`
- [ ] API key has domain restrictions in Google Cloud
- [ ] Firebase project is linked: `firebase projects:list`

## Post-Deployment

After deployment:

1. **Test your site**:
   ```bash
   firebase open hosting:mkr-safety
   ```

2. **View logs**:
   ```bash
   firebase hosting:log
   ```

3. **Monitor performance**:
   - Use Firebase Console > Hosting
   - Check build times and deployment status

## Troubleshooting

### "API key is not configured"
- Ensure `.env.local` is in `artifacts/mkr-safety/` directory
- Restart build after creating `.env.local`
- Check that key name is `VITE_GOOGLE_MAPS_API_KEY` (starts with `VITE_`)

### Map not loading after deployment
- Check browser console for errors
- Verify HTTP referrer restrictions include your Firebase domain
- Ensure domain is `*.web.app/*` format

### Build fails
- Run `pnpm install` to ensure dependencies
- Check Node version: should be 18+
- Verify all environment variables

### Large bundle size
- Google Maps Extended Component Library is ~100KB
- This is normal and expected

## CI/CD Integration

For automated deployments, set environment variables in GitHub Actions:

```yaml
- name: Deploy to Firebase
  env:
    VITE_GOOGLE_MAPS_API_KEY: ${{ secrets.FIREBASE_MAPS_API_KEY }}
  run: |
    firebase deploy --only hosting:mkr-safety
```

Never commit API keys to git!

## Further Reading

- [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [Google Maps API Security](https://developers.google.com/maps/gmp-get-started)
