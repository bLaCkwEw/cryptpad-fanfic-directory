// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';
import auth from 'auth-astro';
import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
	integrations: [auth(), db()],
	output: "server",
	adapter: vercel()
});
