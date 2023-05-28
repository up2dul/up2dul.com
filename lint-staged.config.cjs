module.exports = {
  // Type check TypeScript files
  './src/**/*.(ts|tsx)': () => 'pnpm tsc --noEmit',

  // Lint & Prettify MDX, JS, CJS, TS, and TSX files
  './**/*.(mdx|js|cjs|ts|tsx)': ['pnpm eslint', 'pnpm prettier --w'],

  // Prettify only Markdown and JSON files
  './**/*.(md|json)': 'pnpm prettier --w',
};
