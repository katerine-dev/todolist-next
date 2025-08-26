module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  plugins: ['testing-library', 'jest-dom'],
  env: {
    jest: true,
    browser: true,
    node: true,
  },
  rules: {
    // exemplo de ajustes úteis
    'react-hooks/exhaustive-deps': 'warn',
    '@next/next/no-html-link-for-pages': 'off',
    // testes
    'testing-library/no-node-access': 'off',
  },
  overrides: [
    {
      files: ['tests/**/*.{ts,tsx}'],
      rules: {
      },
    },
  ],
};
