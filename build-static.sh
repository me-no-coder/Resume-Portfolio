#!/bin/bash
echo "Building static portfolio website..."

# Ensure the script has execute permissions
chmod +x build-static.sh

# Build the client-side code with Vite
npx vite build

# Create a deployment directory
mkdir -p static-deploy

# Copy all assets from dist/public to static-deploy
cp -r dist/public/* static-deploy/

# Create a simple 404.html to support SPA routing on static hosts
cp static-deploy/index.html static-deploy/404.html

# Create a netlify.toml configuration for Netlify deployment (optional)
cat > static-deploy/netlify.toml << EOL
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
EOL

# Create a _redirects file for Netlify (as a fallback)
echo "/* /index.html 200" > static-deploy/_redirects

echo "==================================================="
echo "Static build complete! Files are in the 'static-deploy' directory."
echo "For deployment:"
echo "1. Upload the contents of the 'static-deploy' directory to your hosting provider."
echo "2. For Netlify/Vercel: Point to this directory during deployment setup."
echo "3. For GitHub Pages: Copy these files to your gh-pages branch."
echo "==================================================="