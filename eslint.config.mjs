/** @type {import('eslint').Linter.Config}  */
const eslintConfig = {
  extends: [
    'airbnb-base',
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['unused-imports', 'simple-import-sort'],
      extends: [
        'airbnb',
        'airbnb-typescript',
        'next/core-web-vitals',
        'plugin:prettier/recommended',
      ],
      parserOptions: {
        project: '**/tsconfig.json',
      },
      rules: {
        'import/extensions': 'off', // Avoid missing file extension errors, TypeScript already provides a similar feature
        'react/function-component-definition': 'off', // Disable Airbnb's specific function type
        'react/require-default-props': 'off', // Allow non-defined react props as undefined
        'react/jsx-props-no-spreading': 'off', // React-hook-form
        '@typescript-eslint/consistent-type-imports': 'error', // Ensure `import type` is used when it's necessary
        'import/prefer-default-export': 'off', // Named export is easier to refactor automatically
        'simple-import-sort/imports': 'error',
        'import/order': 'off',
        'no-console': ['error', { allow: ['warn', 'error'] }],
      },
    },
  ],
};

export default eslintConfig;
