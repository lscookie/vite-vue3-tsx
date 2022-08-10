<template>
  <div class="slot-block">
    <formCore ref="formDemo1" :form-json="formDemoJson4"> </formCore>
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
  import CodeComponent from '../codeMirror.vue';
  import { code4 } from './code';

  export default defineComponent({
    name: 'Demo4',
    components: { formCore, CodeComponent },
    setup() {
      const CodeShow = ref(false);
      const codeblock = ref(code4);
      const formDemoJson4: formJsonType = reactive({
        columnsNumber: 3,
        labelWidth: 'auto',
        size: 'default',
        colOrder: {
          text1: {
            formItemMeta: {
              columnId: '011',
              label: '姓名',
              controlType: 'text',
              isClear: false,
              title: '姓名',
              labelWidth: 'auto'
            },
            size: 'small',
            colCount: 1,
            defaultValue: '张三',
            placeholder: '请输入姓名'
          },
          text2: {
            formItemMeta: {
              columnId: '012',
              label: 'text1',
              controlType: 'text',
              isClear: false,
              title: 'text1',
              labelWidth: 'auto'
            },
            size: 'large',
            colCount: 2,
            defaultValue: '',
            placeholder: '请输入text1'
          },
          text3: {
            formItemMeta: {
              columnId: '013',
              label: 'text2',
              controlType: 'text',
              isClear: false,
              title: 'text2'
            },
            colCount: 3,
            defaultValue: '',
            placeholder: '请输入text2'
          },
          text4: {
            formItemMeta: {
              columnId: '014',
              label: 'text4',
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
        CodeShow,
        codeblock,
        formDemoJson4
      };
    }
  });
</script>
<style scoped lang="less">
  @import url('../controlStyle.less');
</style>
