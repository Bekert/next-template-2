import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname
})

const nextConfig = compat.extends('next/core-web-vitals')

export default tseslint.config(
	js.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	...nextConfig,
	{
		ignores: ['dist/', 'eslint.config.js']
	},
	{
		plugins: {
			'@stylistic': stylistic
		},
		languageOptions: {
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname
			}
		},
		rules: {
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'@stylistic/semi': ['error', 'never'],
			'@stylistic/max-len': ['warn', { code: 100 }],
			'@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
			'@stylistic/quote-props': ['error', 'as-needed'],
			'@stylistic/comma-dangle': ['error', 'never'],
			'@stylistic/object-curly-spacing': ['error', 'always'],
			'@stylistic/array-bracket-spacing': ['error', 'never'],
			'@stylistic/arrow-parens': ['error', 'as-needed']
		}
	}
)
