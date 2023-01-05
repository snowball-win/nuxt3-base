<template>
    <div class="container">
        <h1>snow</h1>
        <div class="test1">
            123456
        </div>
    </div>
</template>

<script setup lang="ts">
// const { data } = await useFetch('https://md.heng-tai.com.cn/m-staff-center/api/v1/role/pageList',{
//   method: "get",
// })
// console.log('26', data)

// const res = $fetch('https://md.heng-tai.com.cn/m-staff-center/api/v1/role/pageList')
// console.log('32fetch', res)

const token = useCookie("token");
// console.log('36token', token.value);
const res = $fetch('/m-staff-center/api/v1/role/pageList',{
    headers: {
        'Authorization' : `Bearer ${token.value}`
    }
})
console.log('36$fetch', res)

// import {config1} from "../utils/api"
// config1('https://baidu.com').then(res => {
//   console.log('27', res)
// }).catch((err)=>{
//   console.log('29', err)
// })

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