<template>
  <div class="echarts-block">
    <div class="config-block"> 132 </div>
    <div class="echarts-show"> 456 </div>
  </div>
</template>

<script lang="tsx">
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    name: 'VisualizationEchartsVue'
  });
</script>

<style lang="less" scoped>
  .echarts-block {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    > div {
      height: 100%;
      box-sizing: border-box;
      padding: 10px;
    }
    .config-block {
      width: 40%;
    }
    .echarts-show {
      width: 60%;
    }
  }
</style>
