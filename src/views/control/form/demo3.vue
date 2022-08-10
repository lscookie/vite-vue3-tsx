<template>
  <div class="slot-block">
    <div class="item-show-block">
      <label>size</label>
      <el-select v-model="formDemoJson3.size">
        <el-option label="default" value="default"></el-option>
        <el-option label="small" value="small"></el-option>
        <el-option label="large" value="large"></el-option>
      </el-select>
    </div>
    <formCore ref="formDemo1" :form-json="formDemoJson3"> </formCore>
    <div class="item-show-bottom">
      <el-button link @click="CodeShow = !CodeShow"> 代码</el-button>
    </div>
    <CodeComponent v-show="CodeShow" :code="codeblock" :height="600"></CodeComponent>
  </div>
</template>
<script lang="tsx">
  import { formJsonType } from '@/components/formCore/formItem/itemObject';
  import formCore from '@/components/formCore/formCore.vue';
  import { defineComponent, reactive, ref } from 'vue';
  import { code3 } from './code';
  import CodeComponent from '../codeMirror.vue';

  export default defineComponent({
    name: 'Demo2',
    components: { formCore, CodeComponent },
    setup() {
      const CodeShow = ref(false);
      const codeblock = ref(code3);
      const formDemoJson3: formJsonType = reactive({
        columnsNumber: 1,
        labelWidth: 'auto',
        size: 'default',
        colOrder: {
          default: {
            formItemMeta: {
              columnId: '007',
              label: 'default',
              controlType: 'text',
              isClear: false,
              title: '姓名',
              labelWidth: 'auto'
            },
            size: 'default',
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入姓名'
          },
          small: {
            formItemMeta: {
              columnId: '008',
              label: 'small',
              controlType: 'text',
              isClear: false,
              title: 'text1',
              labelWidth: 'auto'
            },
            size: 'small',
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入text1'
          },
          large: {
            formItemMeta: {
              columnId: '009',
              label: 'large',
              controlType: 'text',
              isClear: false,
              title: 'text2'
            },
            size: 'large',
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入text2'
          },
          test: {
            formItemMeta: {
              columnId: '110',
              label: 'test',
              controlType: 'text',
              isClear: false,
              title: 'text4'
            },
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入text4'
          }
        },
        linkageMeta: {},
        ruleMeta: {}
      });
      return {
        formDemoJson3,
        CodeShow,
        codeblock
      };
    }
  });
</script>
<style scoped lang="less">
  @import url('../controlStyle.less');
</style>
