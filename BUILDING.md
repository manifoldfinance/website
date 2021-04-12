### favicon util

### Favicon

`faviconDescription.json` is where this is managed, install the CLI tool below
and run the scripts:

```bash
npm install -g cli-real-favicon
```

```bash
mkdir -p outputDir
real-favicon generate faviconDescription.json faviconData.json outputDir
real-favicon inject faviconData.json outputDir htmlFiles/*.html
real-favicon check-for-update --fail-on-update faviconData.json
```

### Lint

```js
"npx prettier --config .prettierrc.json --write 'src/**/*.js'"

"lint": "npx eslint src/**/*.js --fix"
```

### Browserslist

```sh
npx browserslist ">0.27%, not dead, not op_mini all, not IE > 0"
```

### Release

```bash
rm -rf node_modules
rm package-lock.json
rm yarn.lock
rm -rf ~/.yarn-cache
rm -rf ~/.npm-cache
git gc
git add .
git commit -s -m "build(update): prerelease"
node --version
yarn --version
```

```bash
currentver="$(node --version)"
requiredver="14.*.*"
 if [ "$(printf '%s\n' "$requiredver" "$currentver" | sort -V | head -n1)" = "$requiredver" ]; then
        echo "Greater than or equal to ${requiredver}"
 else
        echo "Less than ${requiredver}"
 fi
```
