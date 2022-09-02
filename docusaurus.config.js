// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */

const config = {
	title: 'Anthane Core',
	tagline:
		'Our design system for all of our products, services and experiences.',
	url: 'https://anthane-git.github.io',
	baseUrl: '/core/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	trailingSlash: false,

	plugins: ['docusaurus-plugin-sass'],

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			{
				docs: {
					path: './elements',
					routeBasePath: '/elements',
					sidebarPath: require.resolve('./sidebars.js'),
				},
				blog: {
					showReadingTime: true,
					path: './base',
					routeBasePath: '/base',
				},
				theme: {
					customCss: require.resolve('./src/styles/custom.scss'),
				},
			},
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		{
			navbar: {
				title: 'Core',
				logo: {
					alt: 'My Site Logo',
					src: 'img/logo.png',
				},
				items: [
					{
						to: '/base',
						label: 'Base',
						position: 'left',
					},
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Elements',
					},
				],
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			algolia: {
				appId: 'YOUR_APP_ID',
				apiKey: 'YOUR_SEARCH_API_KEY',
				indexName: 'YOUR_INDEX_NAME',
				contextualSearch: true,
				searchParameters: {},
				searchPagePath: 'search',
			},
		},
};

module.exports = config;
