<template>
    <div class="note">
        <div class="note-item" v-for="item in 3" :key="item"></div>
    </div>
</template>

<style scoped lang="scss">
    .note {
        .note-item {
            width: 177px;
            height: 300px;
            border: 1px solid #000;
        }
    }
    
</style>