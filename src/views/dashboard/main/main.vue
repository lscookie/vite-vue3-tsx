<template>
  <!-- <router-view v-slot="{ Component }"> -->
  <!-- <transition enter-active-class="animate__delay-.1s animate__animated animate__backInRight"> -->
  <!-- <component :is="Component" /> -->
  <!-- </transition> -->
  <!-- </router-view> -->
  <!-- :name="route.meta.transition ?? defaultTransition" -->
  <router-view v-slot="{ Component, route }">
    <transition
      v-on:before-enter="(dom:any, fun:any) => addenter(dom, fun, route, 'in')"
      v-on:after-enter="(dom:any, fun:any) => removeLeave(dom, fun, route, 'in')"
      v-on:before-leave="(dom:any, fun:any) => addenter(dom, fun, route, 'out')"
      v-on:after-leave="(dom:any, fun:any) => removeLeave(dom, fun, route, 'out')"
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="tsx">
  import { ref, defineComponent } from 'vue';
  import { animationDefault } from '@/utils/baseConfig';
  export default defineComponent({
    name: 'Main',
    setup() {
      const defaultTransition = ref('scale');
      const classList = ref<Array<string>>([]);
      const addenter = (el: any, done: any, route: any, type: string) => {
        classList.value = ['animate__animated', `${route?.meta?.transition ?? animationDefault}`];
        if (type === 'out') {
          classList.value.push('animation-direction');
        }
        el.classList.add(...classList.value);
      };
      const removeLeave = (el: any, done: any, route: any, type: string) => {
        el.classList.remove(...classList.value);
      };
      return {
        defaultTransition,
        removeLeave,
        addenter
      };
    }
  });
</script>

<style lang="less" scoped>
  .animation-direction {
    animation-direction: reverse;
  }
  .scale-enter-active {
    transform-origin: 0% 0%;
    animation: scale-transition-enter 0.5s;
  }

  @keyframes scale-transition-enter {
    0% {
      transform: scale(0.1, 0.1);
    }
    100% {
      transform: scale(1, 1);
    }
  }
</style>
