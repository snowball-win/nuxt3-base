import AutoImport from 'unplugin-auto-import/vite'
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from "unplugin-icons/resolver";
const lifecycle = process.env.npm_lifecycle_event;

export default defineNuxtConfig({
    ssr: true,
    // runtimeConfig: { // 运行时常量
    //     public: { // 客户端-服务的都能访问
    //         apiBase: 'm-staff-center/'
    //     }
    // },    
    nitro: {
        devProxy: {
            '/m-staff-center/': {
                target: 'https://md.heng-tai.com.cn',
                changeOrigin: true
            },
        }
    },
    vite: {
        // server: {
        //     proxy: {
        //         '/m-staff-center': {
        //             target: 'https://md.heng-tai.com.cn',
        //             changeOrigin: true
        //         },
        //     }
        // },
        plugins: [
            AutoImport({ // 自动引入element
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
    // transpile: ["element-plus"],
    build: {
        transpile: lifecycle === "build" ? ["element-plus"] : [],
    },
})