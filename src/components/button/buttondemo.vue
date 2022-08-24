<template>
  <layout :left-span="5" :right-span="19">
    <template #left>
      <el-button size="large" type="primary">按钮</el-button>
      <el-button type="primary">primary</el-button>
    </template>
    <template #right>
      <el-button>短按钮</el-button>
      <el-button type="success">成功</el-button>
      <el-button type="info">重置</el-button>
      <el-button type="warning">警告</el-button>
      <el-button type="danger">危险</el-button>
      <el-button>五个字长按钮</el-button>
      <ptButton pt="edit" @click="clickBtn">编辑</ptButton>
      <ptButton pt="delete" @click="clickBtn">删除</ptButton>
      <ptButton type="primary" @click="clickBtn">普通</ptButton>
    </template>
  </layout>
</template>

<script lang="tsx">
  import layout from '@/components/layout.vue';
  import ptButton from './ptButton.vue';
  export default {
    name: 'Button',
    components: { layout, ptButton },
    setup() {
      const clickBtn = () => {
        console.log('我被点击啦');
      };
      return { clickBtn };
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
