<template>
  <div class="slot-block">
    <formCore ref="formDemo8" :form-json="formDemoJson8" @putOutForm="formPutOut"> </formCore>
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
  import { code8 } from './code';
  import CodeComponent from '../codeMirror.vue';

  export default defineComponent({
    name: 'Demo8',
    components: { formCore, CodeComponent },
    setup() {
      const CodeShow = ref(false);
      const codeblock = ref(code8);
      const formDemo8 = ref();
      const formDemoJson8: formJsonType = reactive({
        columnsNumber: 3,
        labelWidth: 'auto',
        size: 'default',
        colOrder: {
          text1: {
            formItemMeta: {
              columnId: '020',
              label: '姓名',
              controlType: 'text',
              isClear: false,
              title: '姓名',
              labelWidth: 'auto'
            },
            colCount: 1,
            defaultValue: '张三',
            placeholder: '请输入姓名'
          }
        },
        reset: {
          backFun: () => {
            window.alert('表单的回调函数触发！');
          }
        },
        select: {
          label: '提交',
          span: 2
        },
        putOut: {}
      });
      const formPutOut = () => {
        window.alert('表单导出函数触发！');
      };
      return {
        formDemo8,
        formDemoJson8,
        CodeShow,
        codeblock,
        formPutOut
      };
    }
  });
</script>
<style scoped lang="less">
  @import url('../controlStyle.less');
</style>
