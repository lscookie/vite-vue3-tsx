<template>
  <div ref="echartsDom" class="echarts-block"></div>
</template>

<script lang="tsx">
  import { defineComponent, onMounted, ref, toRefs, watch } from 'vue';
  import * as echarts from 'echarts';
  import { EChartsType } from 'echarts';
  export default defineComponent({
    name: 'Echarts',
    props: {
      echartsConfig: {
        type: Object,
        // eslint-disable-next-line vue/require-valid-default-prop
        default: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar'
            }
          ]
        }
      }
    },
    setup(props) {
      const localProps = toRefs(props);
      const echartsDom = ref(null);
      let echartsObj: EChartsType;

      watch(
        localProps,
        (newData: any) => {
          console.log('newData', newData);
          if (echartsObj) {
            echartsObj.setOption(newData);
          }
        },
        { deep: true }
      );

      const initEcharts = () => {
        echartsObj.setOption(localProps.echartsConfig.value);
      };

      onMounted(() => {
        echartsObj = echarts.init(echartsDom.value as unknown as HTMLElement);
        initEcharts();
      });
      return {
        localProps,
        echartsDom,
        initEcharts
      };
    }
  });
</script>
<style lang="less" scoped>
  .echarts-block {
    width: 100%;
    height: 100%;
  }
</style>
