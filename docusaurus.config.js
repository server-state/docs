const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: 'Server State',
	tagline:
		'A NodeJS and React-based ecosystem to inspect the state of your servers.',
	url: 'https://www.server-state.tech/',
	baseUrl: '/',
	noIndex: true, // TODO: Allow indexing once ready
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'server-state', // Usually your GitHub org/user name.
	projectName: 'docs', // Usually your repo name.
	themeConfig: {
		navbar: {
			title: 'Server State',
			logo: {
				alt: 'Server State Logo',
				src: 'img/logo.svg'
			},
			items: [
				{
					href: '/',
					position: 'left',
					label: 'Home'
				},
				{
					type: 'doc',
					docId: 'intro',
					position: 'left',
					label: 'Documentation'
				},
				{
					type: 'doc',
					docId: 'intro',
					docsPluginId: 'develop',
					position: 'left',
					label: 'Developer Documentation'
				}
			]
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Server State',
					items: [
						{
							label: 'Home',
							href: '/'
						},
						{
							label: 'User Documentation',
							to: '/docs/'
						},
						{
							label: 'Developer Documentation',
							to: '/develop/'
						},
						// {
						// 	label: 'Development Blog',
						// 	href: '/blog'
						// },
						{
							label: 'fliegwerk',
							href: 'https://www.fliegwerk.com'
						}
					]
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Forum',
							href: 'https://forums.server-state.tech/'
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/server_state'
						}
						// {
						// 	label: 'YouTube',
						// 	href: 'https://www.youtube.com/channel/UC1mwTgqCY5-G1RouptOXnSg'
						// }
					]
				},
				{
					title: 'More',
					items: [
						{
							label: 'Internal documentation',
							href: '/internal/'
						},
						{
							label: 'Branding',
							href: '/branding/'
						},
						{
							label: "Writer's Guide",
							href: '/writers-guide'
						},
						{
							label: 'GitHub',
							href: 'https://github.com/server-state/'
						},
						{
							label: 'Legal Notice',
							href: 'https://www.fliegwerk.com/legal'
						},
						{
							label: 'Privacy Policy',
							href: 'https://www.fliegwerk.com/privacy'
						}
					]
				}
			],
			copyright: `Copyright © ${new Date().getFullYear()} fliegwerk members. Built with Docusaurus.`
		},
		prism: {
			additionalLanguages: ['java', 'powershell', 'ebnf'],
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme
		},
		colorMode: {
			disableSwitch: false,
			respectPrefersColorScheme: true
		}
	},
	scripts: [
		{
			src: 'https://analytics.server-state.tech/js/plausible.outbound-links.js',
			async: true,
			defer: true,
			'data-domain': 'server-state.tech'
		}
	],
	clientModules: [],
	plugins: [
		[
			require.resolve('@cmfcmf/docusaurus-search-local'),
			{
				docsRouteBasePath: '/docs',
				indexBlog: false
			}
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'develop',
				path: 'develop',
				routeBasePath: 'develop',
				sidebarPath: require.resolve('./sidebars-develop.js'),
				editUrl: 'https://github.com/server-state/docs/edit/main/',
				showLastUpdateTime: true,
				showLastUpdateAuthor: true
				// ... other options
			}
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'internal',
				path: 'internal',
				routeBasePath: 'internal',
				sidebarPath: require.resolve('./sidebars-internal.js'),
				editUrl: 'https://github.com/server-state/docs/edit/main/',
				showLastUpdateTime: true,
				showLastUpdateAuthor: true
				// ... other options
			}
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'branding',
				path: 'branding',
				routeBasePath: 'branding',
				sidebarPath: require.resolve('./sidebars-branding.js'),
				editUrl: 'https://github.com/server-state/docs/edit/main/',
				showLastUpdateTime: true,
				showLastUpdateAuthor: true
				// ... other options
			}
		]
	],
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),

					routeBasePath: '/docs',
					// Please change this to your repo.
					editUrl: 'https://github.com/server-state/docs/edit/main',
					showLastUpdateTime: true,
					showLastUpdateAuthor: true
				},
				blog: false,
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			}
		]
	]
};
