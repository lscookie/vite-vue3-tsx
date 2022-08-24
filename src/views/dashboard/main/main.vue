<template>
  <!-- <router-view v-slot="{ Component }"> -->
  <!-- <transition enter-active-class="animate__delay-.1s animate__animated animate__backInRight"> -->
  <!-- <component :is="Component" /> -->
  <!-- </transition> -->
  <!-- </router-view> -->
  <!-- :name="route.meta.transition ?? defaultTransition" -->
  <router-view v-slot="{ Component, route }">
    <transition
      mode="out-in"
      @before-enter="(dom:any, fun:any) => addenter(dom, fun, route, 'in')"
      @after-enter="(dom:any, fun:any) => removeLeave(dom, fun, route, 'in')"
      @before-leave="(dom:any, fun:any) => addenter(dom, fun, route, 'out')"
      @after-leave="(dom:any, fun:any) => removeLeave(dom, fun, route, 'out')"
    >
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
      <!-- <component v-if="!route?.meta?.keep" :is="Component" /> -->
    </transition>
  </router-view>
</template>

<script lang="tsx">
  import { ref, defineComponent, reactive } from 'vue';
  import { animationDefault } from '@/utils/baseConfig';
  export default defineComponent({
    name: 'DashboardMain',
    setup() {
      const defaultTransition = ref('scale');
      const classList = reactive<{ out: Array<string>; in: Array<string> }>({
        out: [],
        in: []
      });
      const addenter = (el: any, done: any, route: any, type: string) => {
        if (type === 'out') {
          classList.out = [
            'animate__animated',
            `${route?.meta?.transition ?? animationDefault}`,
            // 反向动画
            'animation-direction'
          ];
          el.classList.add(...classList.out);
        } else {
          classList.in = ['animate__animated', `${route?.meta?.transition ?? animationDefault}`];
          el.classList.add(...classList.in);
        }
      };
      const removeLeave = (el: any, done: any, route: any, type: string) => {
        if (type === 'out') {
          el.classList.remove(...classList.out);
        } else {
          el.classList.remove(...classList.in);
        }
      };
      return {
        defaultTransition,
        removeLeave,
        addenter
      };
    }
  });
</script>

<style lang="less">
  // .el-button {
  //   padding: 24px var(--btn-padding);
  //   margin: var(--btn-margin);
  //   background-color: var(--btn-bg-color) !important;
  //   border-color: var(--btn-border-color) !important;
  //   border-radius: var(--btn-border-radius);
  //   color: var(--btn-text-color);
  // }
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
