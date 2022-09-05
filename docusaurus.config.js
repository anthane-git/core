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
	],

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			{
				docs: {
					path: './docs/elements',
					routeBasePath: '/elements',
					sidebarPath: require.resolve('./sidebars.js'),
				},
				blog: {
					showReadingTime: true,
					path: './docs/base',
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
