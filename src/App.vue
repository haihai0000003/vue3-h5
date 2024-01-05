
<template>
    <router-view v-slot="{ Component,route }">
      <Transition name="slide-fade" mode="out-in">
        <KeepAlive include="login">
          <component :is="Component" :key="route.path" />
        </KeepAlive>
      </Transition>
    </router-view>
</template>

<script setup>
  import { useCachedViewStoreHook } from "@/store/modules/cachedView";
  import { computed } from "vue";

  const cachedViews = computed(() => {
    console.log(useCachedViewStoreHook().cachedViewList)
    return useCachedViewStoreHook().cachedViewList;
  })

</script>

<style lang="scss" scoped>
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
</style>
