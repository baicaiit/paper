import Vue from '@vitejs/plugin-vue'

export default {
    plugins: [
        Vue({
            include: [/\.vue$/, /\.md$/], // <--
        }),
    ],
}
