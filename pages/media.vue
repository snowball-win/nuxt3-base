<!-- 测试媒体查询 -->
<template>
    <div>
        <h1>media</h1>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@media screen and (max-width: 1000px) {
    // 失败
    body {
        background-color: yellow;
    }
    // 成功
    h1{
        color: red;
    }
}
</style>
