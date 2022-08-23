<template>
  <div class="slot-block">
    <formCore ref="formDemo1" :form-json="formDemoJson1"> </formCore>
    <div class="item-show-bottom">
      <el-button link type="primary" @click="CodeShow = !CodeShow"> 代码</el-button>
    </div>
    <CodeComponent v-show="CodeShow" :code="codeblock" :height="600"></CodeComponent>
  </div>
</template>
<script lang="tsx">
  import { formJsonType } from '@/components/formCore/formItem/itemObject';
  import formCore from '@/components/formCore/formCore.vue';
  import { defineComponent, reactive, ref } from 'vue';
  import CodeComponent from '../codeMirror.vue';
  import { formItemCode2 } from './form-item-code';

  export default defineComponent({
    name: 'FormItemDemo2',
    components: { formCore, CodeComponent },
    setup() {
      const CodeShow = ref(false);
      const codeblock = ref(formItemCode2);
      const formDemoJson1: formJsonType = reactive({
        columnsNumber: 2,
        labelWidth: 'auto',
        size: 'default',
        colOrder: {
          area0: {
            formItemMeta: {
              columnId: '005',
              label: '多行输入框',
              controlType: 'area',
              labelWidth: 'auto'
            },
            colCount: 2,
            defaultValue: '',
            placeholder: '请输入任意信息',
            autosize: { minRows: 2, maxRows: 4 },
            rows: 5
          },
          area1: {
            formItemMeta: {
              columnId: '006',
              label: '自适应行高',
              controlType: 'area',
              labelWidth: 'auto'
            },
            colCount: 2,
            defaultValue: '',
            placeholder: '请输入任意信息',
            autosize: { minRows: 2, maxRows: 4 }
          }
        },
        linkageMeta: {},
        ruleMeta: {},
        button: {}
      });
      return {
        formDemoJson1,
        CodeShow,
        codeblock
      };
    }
  });
</script>
<style scoped lang="less">
  @import url('../controlStyle.less');
</style>
