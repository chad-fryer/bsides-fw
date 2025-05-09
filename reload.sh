#!/bin/bash

# Kill any running Next.js processes
pkill -f "next dev"

# Wait a moment for the port to be released
sleep 1

# Clear Next.js cache
rm -rf .next node_modules/.cache

# Start the development server
npm run dev 