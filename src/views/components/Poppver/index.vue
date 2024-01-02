<template>
    <div ref="poppver"
        class="poppver"
        :style="{
            fontSize: props.fontSize + 'px',
            top: props.domDistance.top + props.fontSize + props.offsetY + 'px',
            left: props.domDistance.left - props.offsetX + 'px'
        }"
    >
        {{ content }}
    </div>
</template>

<script setup>
    const props = defineProps({
        content: {
            type: String,
            default: '',
        },
        domDistance: Object,
        fontSize: {
            type: Number,
            default: 14
        },
        offsetY: {
            type: Number,
            default: 20
        },
        offsetX: {
            type: Number,
            default: 20
        }
    })
</script>

<style lang="scss" scoped>
 .poppver {
    position: absolute;
    max-width: 200px;
    z-index: 999;
    line-height: 1;
    padding: 12px;
    background-color: #585858;
    color: #fff;
    border-radius: 5px;
    letter-spacing: 1px;
    &::after {
        content: '';
        display: block;
        position: absolute;
        top: -4px;
        left: 22.5px;
        border-left: 5px solid transparent ;
        border-right: 5px solid transparent;
        border-bottom: 5px solid #585858;
        z-index: 2;
    }
 }
</style>