import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import { compression } from 'vite-plugin-compression2';

// import devtools from 'solid-devtools/vite';

export default defineConfig({
	plugins: [
		/*
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
		// devtools(),
		solidPlugin(),
		tsconfigPaths(),
		compression(),
	],
	server: {
		port: 3000,
	},
	build: {
		target: 'esnext',
		minify: 'terser',
	},
	publicDir: 'public',
});
