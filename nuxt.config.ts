import AutoImport from 'unplugin-auto-import/vite'
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from "unplugin-icons/resolver";
const lifecycle = process.env.npm_lifecycle_event;
import { loadEnv } from 'vite'
console.log('基础服务路径：', loadEnv(process.argv[process.argv.length-1], './env').VITE_SERVER_NAME)

export default defineNuxtConfig({
    ssr: true,
    runtimeConfig: { // 运行时常量
        public: { // 客户端-服务端都能访问
            baseUrl: loadEnv(process.argv[process.argv.length-1], './env').VITE_SERVER_NAME
        }
    },
    app: {
        head: {
            title: 'ssr-snow',
            charset: 'utf-8',
            htmlAttrs: {
                lang: 'zh-CN'
            },
            meta: [
                { name: "keywords", content: "vue3,nuxt3,ssr,snow" },
                { name: "description", content: "snow-nuxt3-web" },
            ],
            script: [
                {
                    type: 'text/javascript',
                    src: 'https://webapi.amap.com/maps?v=2.0&key=296cad8de4082b7f0975ed1c39ea12f5'
                }
            ],
        }
    },
    // nitro: {
    //     devProxy: {
    //         '/m-staff-center/': {
    //             target: 'https://md.heng-tai.com.cn',
    //             changeOrigin: true
    //         },
    //     }
    // },
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
                    IconsResolver()
                ]
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