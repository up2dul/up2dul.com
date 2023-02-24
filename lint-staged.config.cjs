module.exports = {
  // Type check TypeScript files
  './src/**/*.{ts,tsx}': () => 'pnpm tsc --noEmit',

  // Lint & Prettify MDX, JS, CJS, TS, and TSX files
  './**/*.{mdx,js,cjs,ts,tsx}': (filenames) => [
    `pnpm prettier --w ${filenames.join(' ')} --config ./prettier.config.cjs`,
  ],
};
