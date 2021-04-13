#!/bin/bash
echo "Building..."
export NODE_ENV=production
start=$(date +%s)
yarn 
netlify build
netlify deploy --prod
echo "Build deployment done..."
sleep 1
echo "Total Time (in seconds):"
end=$(date +%s)
runtime=$((end-start))
echo $runtime
sleep 1
echo "Cleaning up"
git gc