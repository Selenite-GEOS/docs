import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { loadEnv } from 'vite';

const { SITE_URL = 'http://localhost:4444', SITE_BASE = '' } = loadEnv(process.env.NODE_ENV, process.cwd(), "");
console.log('SITE_URL', SITE_URL);
console.log('SITE_BASE', SITE_BASE);
// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	base: SITE_BASE,
	trailingSlash: 'always',
	// prefetch: true,
	integrations: [
		starlight({
			title: 'Selenite Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting started', slug: 'guides/getting-started' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en'
				},
				fr: {
					label: 'Français',
				}
			}
		}),
	],
	server: {
		port: 4444,
		host: true
	}
});
