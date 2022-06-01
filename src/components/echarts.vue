<template>
  <div ref="echartsDom" class="echarts-block"></div>
</template>

<script lang="tsx">
  import { defineComponent, onMounted, ref, toRefs } from 'vue';
  import * as echarts from 'echarts';
  export default defineComponent({
    name: 'Echarts',
    setup(props) {
      const localProps = toRefs(props);
      const echartsDom = ref(null);
      let echartsObj = null;
      onMounted(() => {
        echartsObj = echarts.init(echartsDom.value as unknown as HTMLElement);
        echartsObj.setOption({
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        });
      });
      return {
        localProps,
        echartsDom
      };
    }
  });
</script>
<style lang="less" scoped>
  .echarts-block {
    width: 50%;
    height: 50%;
  }
</style>
