import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {nodePolyfills} from "vite-plugin-node-polyfills";

export default defineConfig({
    build: {
        chunkSizeWarningLimit: 1500,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                }
            },
        },
    },
    optimizeDeps: {
        esbuildOptions: {
            define: {
                global: 'globalThis', // 将 global 定义为 globalThis
            },
            plugins: [

            ],
        },
    },
    plugins: [
        nodePolyfills(),
        vue({
            include: [/\.vue$/],
        }),
    ],
})
