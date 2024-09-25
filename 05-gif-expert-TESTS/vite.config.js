import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		name: 'happy-dom',
		environment: 'happy-dom',
		// root: './shared_tests',
		// setupFiles: ['./setup.happy-dom.ts'],
		// globals: true,
		// environment: 'jsdom',
		// setupFiles: './src/setupTests.js',
		// css: true,
	},
})
