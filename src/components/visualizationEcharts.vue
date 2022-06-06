<template>
  <div class="echarts-block">
    <div class="config-block">
      <!-- 标题配置 -->
      <el-form>
        <el-form-item label="标题">
          <el-switch v-model="localConfig.title.show" active-text="显示" inactive-text="隐藏">
          </el-switch>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="localConfig.title.text"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="echarts-show"> <echarts :echartsConfig="localConfig"></echarts> </div>
  </div>
</template>

<script lang="tsx">
  import { defineComponent, reactive, toRefs, ref } from '@vue/runtime-core';
  import Echarts from '@/components/echarts.vue';
  import { watch } from 'vue';

  interface echartsConfig {
    title: titleConfig | any;
  }

  interface titleConfig {
    show?: boolean;
    text?: string;
    link?: string;
    target?: 'self' | 'blank';
    testStyle?: textStyleConfig;
    subtext?: string;
    sublink?: string;
    subtarget?: 'self' | 'blank';
    subtestStyle?: subTextStyleConfig;
    textAlign?: 'auto' | 'left' | 'right' | 'center';
    textVerticalAlign?: 'auto' | 'top' | 'bottom' | 'middle';
    triggerEvent?: boolean;
    padding?: number;
    itemGap?: number;
    zlevel?: number;
    z?: number;
    left?: number | string;
    top?: number | string;
    right?: number | string;
    bottom?: number | string;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    shadowBlur?: number;
    shadowColor?: string;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
  }

  interface textStyleConfig {
    color?: string;
    fontStyle?: 'normal' | 'italic' | 'oblique';
    fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
    fontFamily?: string;
    fontSize?: number;
    lineHeight?: number;
    width?: number;
    height?: number;
    textBorderColor?: string;
    textBorderWidth?: number;
    textBorderType?: 'solid' | 'dashed' | 'dotted';
    textBorderDashOffset?: number;
    textShadowColor?: string;
    textShadowBlur?: number;
    textShadowOffsetX?: number;
    textShadowOffsetY?: number;
    overflow?: 'none' | 'truncate' | 'break' | 'breakAll';
    ellipsis?: string;
  }
  interface subTextStyleConfig extends textStyleConfig {
    align?: 'left' | 'center' | 'right';
    verticalAlign?: 'top' | 'middle' | 'bottom';
  }

  export default defineComponent({
    name: 'VisualizationEchartsVue',
    components: { Echarts },
    setup() {
      const localConfig = reactive<echartsConfig>({
        title: {
          show: true,
          text: '',
          link: '',
          target: 'self',
          // testStyle: '',
          subtext: '',
          sublink: '',
          subtarget: 'self',
          // subtestStyle: subTextStyleConfigString,
          textAlign: 'auto',
          textVerticalAlign: 'auto',
          triggerEvent: true,
          padding: 0,
          itemGap: 0,
          zlevel: 0,
          z: 0,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '',
          borderColor: '',
          borderWidth: 0,
          borderRadius: 0,
          shadowBlur: 0,
          shadowColor: '',
          shadowOffsetX: 0,
          shadowOffsetY: 0
        }
      });

      // 监听配置文件
      watch(localConfig, (newData: echartsConfig) => {
        // 应用样式
      });

      return {
        localConfig
      };
    }
  });
</script>

<style lang="less" scoped>
  .echarts-block {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
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
