module.exports = {
  // Type check TypeScript files
  './src/**/*.{ts,tsx}': () => 'pnpm tsc --noEmit',

  // Lint & Prettify TS and TSX files
  './src/**/*.{ts,tsx}': (filenames) => [
    `pnpm eslint ${filenames.join(' ')}`,
    `pnpm prettier --w ${filenames.join(' ')} --config ./prettier.config.cjs`
  ],
};
