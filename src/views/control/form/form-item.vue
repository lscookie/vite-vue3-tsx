<template>
  <layout :left-span="24" :right-span="0">
    <template #left>
      <el-scrollbar height="780px">
        <div class="flex-column info-block">
          <div class="flex-column">
            <h id="form-表单项说明" class="title title1">
              表单项说明
              <a href="#form-表单项说明" aria-hidden="true"></a>
            </h>
            <label>
              表单项是表单功能的实际实现部分,在后期功能拓展中只需要添加这部分的功能即可。
            </label>
            <label>
              <h class="title title3">常规属性列表</h>
            </label>
            <label>常规属性是指每个表单项配置都有的通用属性</label>
            <el-table :data="routineTableData" style="width: 100%">
              <el-table-column prop="attr" label="属性名" width="230" />
              <el-table-column prop="note" label="说明" min-width="320" />
              <el-table-column prop="type" label="类型" width="180" />
            </el-table>
            <br />
          </div>
          <div class="flex-column">
            <h id="form-input" class="title title2">
              Input-输入框
              <a href="#form-Input" aria-hidden="true"></a>
              <label> controlType： text </label>
            </h>
            <label>
              由于
              <label class="attr-improtant">复合输入框</label>
              需要添加插槽才能实现，目前通过配置没有办法简化插槽部分的配置，所以需要用到复合输入框的地方请直接使用
              <label class="attr-improtant">hasSlot</label>
              属性
            </label>
            <label>
              <h class="title title3">非常规属性列表</h>
            </label>
            <el-table :data="inputTableData" style="width: 100%">
              <el-table-column prop="attr" label="属性名" width="180" />
              <el-table-column prop="note" label="说明" min-width="360" />
              <el-table-column prop="type" label="类型" width="180" />
            </el-table>
            <br />
            <div class="important-block level-1">
              <label>
                到这里你会发现这里的配置和element-plus中的用法基本一致？
                是的为了让控件更佳灵活，我确实是这么做的，所以element-plus中控件属性基本都可以配置在这里实现想要的功能。目前封装的所有控件都有这个特点。</label
              >
            </div>
            <FormItemDemo1></FormItemDemo1>
          </div>
          <div class="flex-column">
            <h id="form-Area" class="title title2">
              Area-输入框
              <a href="#form-Area" aria-hidden="true"></a>
              <label> controlType： area </label>
            </h>
            <label>
              <h class="title title3">非常规属性列表</h>
            </label>
            <el-table :data="areaTableData" style="width: 100%">
              <el-table-column prop="attr" label="属性名" width="180" />
              <el-table-column prop="note" label="说明" min-width="360" />
              <el-table-column prop="type" label="类型" width="240" />
            </el-table>
            <br />
            <div class="important-block level-2">
              <label>
                当
                <label class="attr-improtant">autosize</label>
                和
                <label class="attr-improtant">rows</label>
                同时使用时，
                <label class="attr-improtant"> autosize </label>
                会覆盖掉
                <label class="attr-improtant"> rows </label>
                的配置。
              </label>
            </div>
            <FormItemDemo2></FormItemDemo2>
          </div>
          <div class="flex-column">
            <h id="form-switch" class="title title2">
              switch-开关
              <a href="#form-switch" aria-hidden="true"></a>
              <label> controlType： switch </label>
            </h>
            <label>
              <h class="title title3">非常规属性列表</h>
            </label>
            <el-table :data="switchTableData" style="width: 100%">
              <el-table-column prop="attr" label="属性名" width="180" />
              <el-table-column prop="note" label="说明" min-width="360" />
              <el-table-column prop="type" label="类型" width="240" />
            </el-table>
            <br />
            <div class="important-block level-1">
              <label> 同时支持el-switch的其它一些属性，可以自行探索优化 </label>
            </div>
            <FormItemDemo3></FormItemDemo3>
          </div>
        </div>
      </el-scrollbar>
    </template>
  </layout>
</template>

<script lang="tsx">
  import Layout from '@/components/layout.vue';
  import FormItemDemo1 from './form-item-demo1.vue';
  import FormItemDemo2 from './form-item-demo2.vue';
  import FormItemDemo3 from './form-item-demo3.vue';
  import { ref } from 'vue';
  export default {
    name: 'FormItem',
    components: { Layout, FormItemDemo1, FormItemDemo2, FormItemDemo3 },
    setup() {
      const inputTableData = ref([
        {
          attr: 'placeholder',
          note: 'input输入提示',
          type: 'string'
        },
        {
          attr: 'clearable',
          note: '是否显示清空图标',
          type: 'boolean'
        },
        {
          attr: 'prefixIcon',
          note: '前缀图标',
          type: 'boolean'
        },
        {
          attr: 'suffixIcon',
          note: '后缀图标',
          type: 'boolear'
        }
      ]);
      const routineTableData = ref([
        {
          attr: 'disabled',
          note: '是否禁用',
          type: 'boolean'
        },
        {
          attr: 'size',
          note: '控件尺寸',
          type: 'small, default, large'
        },
        {
          attr: 'colCount',
          note: '控件占位列数',
          type: 'number'
        },
        {
          attr: 'defaultValue',
          note: '控件默认值,当控件label是下划线分开时，会被解析成一个数组值，每一段对应一个默认值',
          type: 'any'
        },
        {
          attr: 'formItemMeta.columnId',
          note: '控件的ID,唯一标识',
          type: 'string'
        },
        {
          attr: 'formItemMeta.label',
          note: '表单label信息',
          type: 'string'
        },
        {
          attr: 'formItemMeta.controlType',
          note: '表单控件类型，决定本项渲染成哪一种控件',
          type: 'string'
        },
        {
          attr: 'formItemMeta.labelWidth',
          note: '表单label的宽度，默认为auto自适应',
          type: 'string'
        }
      ]);
      const areaTableData = ref([
        {
          attr: 'autosize',
          note: '设置文字输入类型的 autosize 属性使得根据内容自动调整的高度。',
          type: '{ minRows: 2, maxRows: 4 }'
        },
        {
          attr: 'rows',
          note: '文本域高度',
          type: 'number'
        }
      ]);
      const switchTableData = ref([
        {
          attr: 'inlinePrompt',
          note: '控制文本是否显示在点内',
          type: 'boolean'
        },
        {
          attr: 'activeText',
          note: '开状态的文字描述',
          type: 'string'
        },
        {
          attr: 'inactiveText',
          note: '关状态的文字描述',
          type: 'string'
        },
        {
          attr: 'style',
          note: '修改开关背景颜色',
          type: 'string'
        }
      ]);
      return {
        inputTableData,
        routineTableData,
        areaTableData,
        switchTableData
      };
    }
  };
</script>
<style scoped lang="less">
  @import url('../controlStyle.less');
</style>
