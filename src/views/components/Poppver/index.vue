<template>
    <teleport to="body">
        <div ref="poppver"
            class="poppver"
            :style = "[popStyle, {fontSize: fontSize + 'px'}]"
        >
            {{ content }}
        </div>
    </teleport>
</template>

<script setup>
    import { ref, computed, toRefs, reactive, onMounted, watch } from 'vue'
    const props = defineProps({
        content: {
            type: String,
            default: '',
        },
        dom: Object,
        fontSize: {
            type: Number,
            default: 14
        },
    })
    const poppver = ref(null)
    // console.log(poppver)
    const { content, dom } = toRefs(props)
    const dis = dom?.value?.getBoundingClientRect()
    const domDistance = reactive(dis)
    const offsetX = 20
    const offsetY = 20
    const popStyle = ref({})
    
    // const left = computed(() => {
    //     return domDistance.left < offsetX ? domDistance.left : domDistance.left - offsetX
    // })

    // const top = computed(() => {
    //     return domDistance.left < offsetX ? domDistance.left : domDistance.left - offsetX
    // })

    
    // watch(() => domDistance, (newValue) => {
    //     calcStyle(newValue)
    // })
    onMounted(() => {
        calcStyle(domDistance)
        poppver.value.style.setProperty('--poppver-position-top', offsetX + 'px' )
    })
    
    const calcStyle = (newValue) => {
        let obj = {
        }
        if(window.innerHeight < newValue.top + newValue.height) {
            obj.top = newValue.top - newValue.height - poppver.value.offsetHeight - offsetY + 'px'
        } else {
            obj.top = newValue.top + newValue.height + offsetY + 'px'
        }
        if(window.innerWidth < newValue.left + newValue.width) {
            obj.right = 0
        } else {
            obj.left = newValue.left < offsetX ? newValue.left : newValue.left - offsetX + 'px'
        }
        popStyle.value = obj
    }
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
        // left: 22.5px;

        left: var(--poppver-position-top);
        border-left: 5px solid transparent ;
        border-right: 5px solid transparent;
        border-bottom: 5px solid #585858;
        z-index: 2;
    }
 }
</style>