<template>
  <layout :left-span="5" :right-span="19">
    <template #left>
      <el-button>按钮</el-button>
      <el-button type="primary">primary</el-button>
    </template>
    <template #right>
      <el-button>短按钮</el-button>
      <el-button>五个字长按钮</el-button>
    </template>
  </layout>
</template>

<script lang="tsx">
  import layout from '@/components/layout.vue';
  export default {
    name: 'Button',
    components: { layout },
    setup() {
      return {};
    }
  };
</script>

<style lang="less">
  // .el-button {
  //   padding: var(--btn-padding);
  //   margin: var(--btn-margin);
  //   background-color: var(--btn-bg-color);
  //   border-color: var(--btn-border-color);
  //   border-radius: var(--btn-border-radius);
  //   color: var(--btn-text-color);
  // }
</style>
