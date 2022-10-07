// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
module.exports = {
	title: 'Anthane Core',
	tagline:
		'Our design system for all of our products, services and experiences.',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	url: 'https://anthane-git.github.io',
	baseUrl: '/core/',
	organizationName: 'anthane-git',
	projectName: 'core',
	deploymentBranch: 'gh-pages',
	trailingSlash: false,

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	plugins: [
		'docusaurus-plugin-sass',
		[
			'@docusaurus/plugin-content-blog',
			/** @type {import('@docusaurus/plugin-content-blog').Options} */
			{
				id: 'getting-started',
				routeBasePath: 'getting-started',
				path: './docs/getting-started',
			},
		],
		[
			'@docusaurus/plugin-content-docs',
			/** @type {import('@docusaurus/plugin-content-docs').Options} */
			{
				id: 'base',
				routeBasePath: 'base',
				path: 'docs/base',
				sidebarPath: require.resolve('./sidebars.js'),
			},
		],
	],

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			{
				docs: {
					path: 'docs/elements',
					routeBasePath: 'elements',
					sidebarPath: require.resolve('./sidebars.js'),
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
				hideOnScroll: true,
				logo: {
					alt: 'Anthane Core',
					src: 'https://github.com/anthane-git/core-assets/blob/main/logos/core/logotype-dark.png?raw=true',
				},
				items: [
					{
						to: 'base/intro',
						label: 'Base',
						position: 'left',
					},
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Elements',
					},
					{
						position: 'left',
						label: 'Tokens',
						to: 'tokens',
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
