<template>
  <layout class="dashboard-button" :left-span="5" :right-span="19">
    <template #left>
      <el-button>按钮</el-button>
    </template>
    <template #right>
      <el-button>短按钮</el-button>
      <el-button>五个字长按钮</el-button>
    </template>
  </layout>
</template>

<script lang="tsx">
  import layout from '@/components/layout.vue';
  import { ref } from 'vue';
  export default {
    name: 'Button',
    components: { layout },
    setup() {
      return {};
    }
  };
</script>

<style lang="less" scoped>
  .el-button {
    padding: var(--btn-padding);
    margin: var(--btn-margin);
    background-color: var(--btn-bg-color);
    border-color: var(--btn-border-color);
    border-radius: var(--btn-border-radius);
    color: var(--btn-text-color);
  }
</style>
