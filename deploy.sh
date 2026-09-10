#!/bin/bash

# Firebase Deployment Script for MKR Safety
# This script builds and deploys the application to Firebase Hosting

set -e

echo "🚀 Starting Firebase deployment process..."

# Check if firebase-cli is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI is not installed"
    echo "Install it with: npm install -g firebase-tools"
    exit 1
fi

# Check if .env.local exists
if [ ! -f "artifacts/mkr-safety/.env.local" ]; then
    echo "❌ .env.local not found in artifacts/mkr-safety/"
    echo "Please create it with your Google Maps API key"
    exit 1
fi

echo "✅ Environment file found"

# Load environment variables for build
export $(grep -v '^#' artifacts/mkr-safety/.env.local | grep -v '^$' | xargs)

echo "📦 Building the application..."

# Set required environment variables for Firebase build
export PORT=8080
export BASE_PATH=/
export NODE_ENV=production

cd artifacts/mkr-safety
pnpm build
cd ../..

echo "✅ Build completed"
echo "📤 Deploying to Firebase Hosting..."
firebase deploy --only hosting:mkr-safety

echo "✅ Deployment successful!"
echo "🎉 Your application is now live on Firebase Hosting"
