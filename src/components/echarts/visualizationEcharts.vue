<template>
  <div class="echarts-block">
    <div class="config-block">
      <!-- 标题配置 -->
      <el-collapse v-model="collapseActiveNames" @change="handleChange">
        <el-collapse-item title="标题设置" name="1">
          <el-form :label-width="'80px'">
            <el-form-item>
              <el-switch v-model="localConfig.title.show" active-text="显示" inactive-text="隐藏">
              </el-switch>
            </el-form-item>
            <el-form-item label="标题内容">
              <el-input v-model="localConfig.title.text"></el-input>
            </el-form-item>
            <el-form-item label="背景颜色">
              <el-color-picker v-model="localConfig.title.backgroundColor"></el-color-picker>
            </el-form-item>
            <el-form-item label="对其方式">
              <el-select v-model="localConfig.title.textAlign">
                <el-option :label="'auto'" :value="'auto'"></el-option>
                <el-option :label="'left'" :value="'left'"></el-option>
                <el-option :label="'right'" :value="'right'"></el-option>
                <el-option :label="'center'" :value="'center'"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="对其方式">
              <el-select v-model="localConfig.title.textVerticalAlign">
                <el-option :label="'auto'" :value="'auto'"></el-option>
                <el-option :label="'top'" :value="'top'"></el-option>
                <el-option :label="'bottom'" :value="'bottom'"></el-option>
                <el-option :label="'middle'" :value="'middle'"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="字体颜色">
              <el-color-picker v-model="localConfig.title.textStyle.color"></el-color-picker>
            </el-form-item>
            <el-form-item label="字体风格">
              <el-select v-model="localConfig.title.textStyle.fontStyle">
                <el-option :label="'normal'" :value="'normal'"></el-option>
                <el-option :label="'italic'" :value="'italic'"></el-option>
                <el-option :label="'oblique'" :value="'oblique'"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="字体宽度">
              <el-autocomplete
                v-model="localConfig.title.textStyle.fontWeight"
                :fetch-suggestions="querySearch"
                :trigger-on-focus="false"
                clearable
                class="inline-input w-50"
                placeholder="Please Input"
              />
            </el-form-item>
            <el-form-item label="列高">
              <el-input-number v-model="localConfig.title.textStyle.lineHeight"></el-input-number>
            </el-form-item>
            <el-form-item label="标题宽度">
              <el-input-number v-model="localConfig.title.textStyle.width"></el-input-number>
            </el-form-item>
            <el-form-item label="标题高度">
              <el-input-number v-model="localConfig.title.textStyle.height"></el-input-number>
            </el-form-item>
            <el-form-item label="描边颜色">
              <el-color-picker v-model="localConfig.title.textBorderColor"></el-color-picker>
            </el-form-item>
            <el-form-item label="描边宽度">
              <el-input-number
                v-model="localConfig.title.textStyle.textBorderWidth"
              ></el-input-number>
            </el-form-item>
            <el-form-item label="描边类型">
              <el-select v-model="localConfig.title.textStyle.textBorderType">
                <el-option :label="'solid'" :value="'solid'"></el-option>
                <el-option :label="'dashed'" :value="'dashed'"></el-option>
                <el-option :label="'dotted'" :value="'dotted'"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="文本过长">
              <el-select v-model="localConfig.title.textStyle.overflow">
                <el-option :label="'截断'" :value="'truncate'"></el-option>
                <el-option :label="'换行'" :value="'break'"></el-option>
                <el-option :label="'强制换行'" :value="'breakAll'"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="echarts-show">
      <echarts ref="echartsDom" :echarts-config="localConfig"></echarts>
    </div>
  </div>
</template>

<script lang="tsx">
  import { defineComponent, reactive, ref, toRefs } from '@vue/runtime-core';
  import Echarts from '@/components/echarts/echarts.vue';
  import { watch } from 'vue';
  import { echartsConfig, titleStyle, titleTextStyle } from './echartsModel';

  export default defineComponent({
    name: 'VisualizationEchartsVue',
    components: { Echarts },
    setup() {
      const echartsDom = ref();
      const collapseObject = reactive({
        collapseActiveNames: '1',
        handleChange: () => {
          console.log('21544');
        }
      });

      const restaurants = ref<Array<any>>([
        { value: 'normal' },
        { value: 'bold' },
        { value: 'bolder' },
        { value: 'lighter' }
      ]);
      const querySearch = (queryString: string, cb: any) => {
        let results = queryString
          ? restaurants.value.filter((item: any) => {
              return item.value.toLowerCase().indexOf(queryString.toLowerCase()) > -1;
            })
          : restaurants.value;
        cb(results);
      };
      const localConfig = reactive<echartsConfig>({
        title: new titleStyle(),
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
      });

      // 监听配置文件
      watch(localConfig, () => {
        // 应用样式
        echartsDom.value.initEcharts();
      });

      return {
        localConfig,
        echartsDom,
        querySearch,
        ...toRefs(collapseObject)
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
      overflow: auto;
      width: 40%;
    }
    .echarts-show {
      width: 60%;
    }
  }
</style>
