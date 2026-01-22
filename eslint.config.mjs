import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import nextPlugin from '@next/eslint-plugin-next';

export default tseslint.config(
    {
        ignores: [
            'eslint.config.mjs',
            '**/node_modules/**',
            '**/dist/**',
            '**/.next/**',
            '**/coverage/**',
            '**/.swc/**',
            '**/.turbo/**',
        ],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    eslintPluginPrettierRecommended,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        files: ['apps/backend/**/*.ts'],
        languageOptions: {
            sourceType: 'commonjs',
            globals: {
                ...globals.node,
            },
        },
    },
    {
        files: ['apps/backend/**/*.{spec,test}.ts', 'apps/backend/**/__tests__/**/*.ts'],
        languageOptions: {
            globals: {
                ...globals.jest,
                ...globals.node,
            },
        },
    },
    {
        files: ['apps/frontend/**/*.{ts,tsx,js,jsx}'],
        plugins: {
            '@next/next': nextPlugin,
        },
        rules: {
            '@next/next/no-html-link-for-pages': 'off',
            '@next/next/no-img-element': 'warn',
            '@next/next/no-head-element': 'error',
            '@next/next/no-css-tags': 'error',
            '@next/next/no-sync-scripts': 'error',
            '@next/next/no-script-component-in-head': 'error',
        },
        languageOptions: {
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2023,
            },
        },
    },
    {
        files: [
            'apps/frontend/**/*.{spec,test}.{ts,tsx,js,jsx}',
            'apps/frontend/**/__tests__/**/*.{ts,tsx,js,jsx}',
        ],
        languageOptions: {
            globals: {
                ...globals.jest,
                ...globals.browser,
            },
        },
    },
    {
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-floating-promises': 'warn',
            '@typescript-eslint/no-unsafe-argument': 'warn',
            'prettier/prettier': ['error', {endOfLine: 'auto'}],
        },
    }
);
