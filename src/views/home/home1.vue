<template>
  <layout :leftSpan="5" :rightSpan="19">
    <template #left>
      <el-button @click="changeSpan">修改</el-button>
    </template>
    <template #right>
      <el-button @click="changeSpan">动画</el-button>
      <container class="parent-class">
        <div>Example</div>
      </container>
      <div class="animate__animated animate__rubberBand">Example</div>
      <div class="test-class">我就是动画效果</div>
    </template>
  </layout>
</template>

<script lang="tsx">
  import layout from '@/components/layout.vue';
  import { ref } from 'vue';
  export default {
    components: { layout },
    name: 'home',
    setup() {
      const animationList = ref(false);
      const changeSpan = () => {
        if (animationList.value) {
          animationList.value = false;
        } else {
          animationList.value = true;
        }
        console.log(animationList.value);
      };

      return {
        animationList,
        changeSpan
      };
    }
  };
</script>

<style lang="less" scoped>
  .parent-class {
    > :first-child {
      animation: bounce;
      animation-duration: 2s;
    }
    .test-class {
      animation: bounce;
      animation-duration: 2s;
    }
  }
</style>
