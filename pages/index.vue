<template>
    <div class="container">
        <el-button> ElButton </el-button>
        <h1>snow</h1>
        <div class="test1">
            123456
            <NuxtLink to="/user/1">user-id-1</NuxtLink>
        </div>
        <div>
            <a href="/user/2">user-id-2</a>
        </div>
        <div>
            <NuxtLink :to="{ path: `/user/${3}`}">user-id-3</NuxtLink>
        </div>
        <div>
            <button @click="toUser">user-id-4</button>
        </div>
        <div>
            <img src="~/assets/imgs/nginx.jpg" alt="nginx">
            <!-- <img src="~/public/imgs/nginx.jpg" alt="nginx"> public目录下不需要写public，直接从public下层目录写即可-->
            <img src="/imgs/nginx.jpg" alt="nginx">
        </div>
    </div>
</template>

<script setup lang="ts">
// const { data } = await useFetch('https://www.baidu.com')
// console.log('26', data)
// import {config1} from "../utils/api"
// config1('https://baidu.com').then(res => {
//   console.log('27', res)
// }).catch((err)=>{
//   console.log('29', err)
// })

function toUser() {
    navigateTo({
        path: '/user/4',
        query: {
            name: 'snow'
        }
    })
}

</script>

<style scoped lang="scss">

.container{
    h1{
    color: red;
}
    .test1{
        color: red;
    }
}
</style>