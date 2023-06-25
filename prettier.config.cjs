/** @type {import("prettier").Config} */
module.exports = {
  semi: true,
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  jsxSingleQuote: true,
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@/lib/(.*)$',
    '^@/components/(.*)$',
    '^@/styles/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: [
    require.resolve('prettier-plugin-tailwindcss'),
    require.resolve('@ianvs/prettier-plugin-sort-imports'),
  ],
};
