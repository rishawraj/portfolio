#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "🔨 Building Nextjs Project..."
npm run build

echo "🐳 Building Docker image..."
docker build -t rishawraj/portfolio:latest .

echo "🚀 Pushing Docker image to registry..."
docker push rishawraj/portfolio:latest

echo "✅ Docker image built and pushed successfully!"
