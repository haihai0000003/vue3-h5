<template>
    <van-config-provider :theme-vars="themeVars">
        <van-nav-bar :title="title" @click-left="onClickLeft" left-arrow>
        </van-nav-bar>
    </van-config-provider>
</template>

<script setup>
import { reactive, defineProps } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
    title: String
})

const themeVars = reactive({
    borderWidth:'0'
})
const onClickLeft = () => {
    router.go(-1)
}
</script>

<style lang="scss" scoped>
    .header {
        height: 60px;
        background: #999;
        display: flex;
        position:fixed;
        width: 100%;
        justify-content: space-between;
        .tilte {
            flex: 1;
            
        }
    }
</style>