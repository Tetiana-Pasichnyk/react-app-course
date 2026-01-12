import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
    },
    rules: {
      // базовые правила
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],
      'no-console': 'warn',
      eqeqeq: 'error',
      'prefer-const': 'error',

      // prettier
      'prettier/prettier': [
        'error',
        {
          singleQuote: false,
          printWidth: 130,
          tabWidth: 2,
        },
      ],

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Vite Fast Refresh
      'react-refresh/only-export-components': 'warn',

      // target="_blank"
      'react/jsx-no-target-blank': [
        'warn',
        {
          enforceDynamicLinks: 'always',
          warnOnSpreadAttributes: true,
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]);
