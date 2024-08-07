import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { loadEnv } from 'vite';

const { SITE_ORIGIN, BASE_PATH = "/" } = loadEnv(process.env.NODE_ENV, process.cwd(), "");
if (SITE_ORIGIN)
console.log('SITE_ORIGIN', SITE_ORIGIN);
else
console.warn('SITE_ORIGIN is not specified. A sitemap will not be generated.');
console.log('BASE_PATH', BASE_PATH);


// https://astro.build/config
export default defineConfig({
	site: SITE_ORIGIN,
	base: BASE_PATH,
	trailingSlash: 'never',
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
			},
			components: {
				Head: "./src/components/starlight/Head.astro",
			}
		}),
	],
	server: {
		port: 4444,
		host: true
	}
});
