import AutoImport from 'unplugin-auto-import/vite'
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from "unplugin-icons/resolver";
const lifecycle = process.env.npm_lifecycle_event;
export default defineNuxtConfig({
    ssr: true,
    vite: {
        plugins: [
            AutoImport({
                resolvers: [
                    ElementPlusResolver(
                    ),
                    IconsResolver()]
            }),
            Components({
                dts: true,
                resolvers: [ElementPlusResolver(
                    {
                        importStyle: false
                    }
                )]
            }),
        ],
    },
    components: true,
    css: ["~/assets/scss/index.scss"],
    transpile: ["element-plus"],
    build: {
        transpile: lifecycle === "build" ? ["element-plus"] : [],
    },
})