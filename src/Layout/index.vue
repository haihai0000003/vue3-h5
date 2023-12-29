<template>
    <div class="layout">
        <div class="container">
            <div class="main-container">
                <router-view />
            </div>
            <Footer />
        </div>
    </div>
</template>

<script setup>
import Footer from './components/Footer/index.vue'

</script>

<style lang="scss" scoped>
    .layout {
        height: 100%;
        width: 100%;
        .container {
            height: 100%;
            overflow: auto;
        }
        .main-container {
            margin-bottom: var(--van-tabbar-height);
            padding-bottom: 10px;
        }
    }
</style>