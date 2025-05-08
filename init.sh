#!/bin/bash

# Create necessary directories
mkdir -p app/components app/styles app/pages public

# Install dependencies
npm install

# Initialize git repository if not already initialized
if [ ! -d ".git" ]; then
  git init
fi

# Create .gitignore if it doesn't exist
if [ ! -f ".gitignore" ]; then
  echo "# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# typescript
*.tsbuildinfo
next-env.d.ts" > .gitignore
fi

# Make the script executable
chmod +x init.sh

echo "Project initialized successfully! Run 'npm run dev' to start the development server." 