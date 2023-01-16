module.exports = {
  // Type check TypeScript files
  './src/**/*.{ts,tsx}': () => 'pnpm tsc --noEmit',

  // Lint & Prettify JS, CJS, TS, and TSX files
  './**/*.{js,cjs,ts,tsx}': (filenames) => [
    `pnpm eslint ${filenames.join(' ')}`,
    `pnpm prettier --w ${filenames.join(' ')} --config ./prettier.config.cjs`,
  ],
};
