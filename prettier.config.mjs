/* @type {import("prettier").Config} */
const config = {
  endOfLine: 'auto',
  importOrder: ['^@/(.*)$', '^[./]'],
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
};

export default config;
