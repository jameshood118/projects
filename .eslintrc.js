module.exports = {
	'env': {
		'browser': true,
		'es2020': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/essential'
	],
	'parserOptions': {parser: 'babel-eslint'},
	'plugins': [
		'vue'
	],
	'rules': {
		'no-console': process.env.NODE_ENV === 'production' ? ['error', {allow: ['warn', 'error']}] : ['warn', {allow: ['warn', 'error']}],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
}
