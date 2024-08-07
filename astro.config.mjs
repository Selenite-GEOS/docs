import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { loadEnv } from 'vite';

const { SITE_URL = 'http://localhost:4444', SITE_BASE = '' } = loadEnv(process.env.NODE_ENV, process.cwd(), "");
console.log('SITE_URL', SITE_URL);
if (SITE_BASE !== '')
	console.log('SITE_BASE', SITE_BASE);
else 
	console.log('No site base.')

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	base: SITE_BASE,
	trailingSlash: 'never',
	// prefetch: true,
	integrations: [
		starlight({
			title: 'Selenite Docs',
			// social: {
			// 	github: 'https://github.com/withastro/starlight',
			// },
			sidebar: [
				{
					label: 'General',
					autogenerate: { directory: 'general' },
					translations: {
						fr: 'Général',
					},
				},
				{
					label: 'Simplified interface',
					autogenerate: { directory: 'simplified-interface' },
					translations: {
						fr: 'Interface simplifiée',
					},
				},
				{
					label: 'Advanced interface',
					autogenerate: { directory: 'advanced-interface' },
					translations: {
						fr: 'Interface avancée',
					},
				},
				{
					label: 'Developper',
					autogenerate: { directory: 'developper' },	
					translations: {
						fr: 'Développeur',
					},				
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
					translations: {
						fr: 'Référence',
					},
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
