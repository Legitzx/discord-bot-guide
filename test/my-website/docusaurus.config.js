module.exports = {
	title: "Discord Bot Guild",
	tagline: "Helping you build discord bots",
	url: "https://deepwebdevelopers.github.io/discordjs-guide/",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "deepwebdevelopers", // Usually your GitHub org/user name.
	projectName: "discord-bot-guide", // Usually your repo name.
	themeConfig: {
		navbar: {
			title: "Discord Bot Guild",
			logo: {
				alt: "My Site Logo",
				src: "img/logo.svg",
			},
			items: [
				{
					to: "docs/",
					activeBasePath: "docs",
					label: "Docs",
					position: "left",
				},
				{ to: "blog", label: "Blog", position: "left" },
				{
					href: "https://github.com/DeepWebDevelopers/discord-bot-guide",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Style Guide",
							to: "docs/",
						},
						{
							label: "Second Doc",
							to: "docs/doc2/",
						},
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "Discord",
							href: "https://discord.com/invite/NbqBQbaejS",
						},
						{
							label: "Twitter",
							href: ".",
						},
					],
				},
				{
					title: "More",
					items: [
						{
							label: "Blog",
							to: "blog",
						},
						{
							label: "GitHub",
							href: "https://github.com/DeepWebDevelopers/discord-bot-guide",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} DeepWebDevelopers, Inc. Built with Docusaurus.`,
		},
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl: ".",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl: ".",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
};
