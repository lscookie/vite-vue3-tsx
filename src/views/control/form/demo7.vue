<template>
  <div class="slot-block">
    <formCore ref="formDemo7" :form-json="formDemoJson7"> </formCore>
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
  import { code7 } from './code';
  import CodeComponent from '../codeMirror.vue';

  export default defineComponent({
    name: 'Demo7',
    components: { formCore, CodeComponent },
    setup() {
      const CodeShow = ref(false);
      const codeblock = ref(code7);
      const formDemo7 = ref();
      const validatePass2 = (rule: any, value: any, callback: any) => {
        if (value === '123') {
          callback(new Error('不允许输入123'));
        }
        callback();
      };
      const validatePass3 = (rule: any, value: any, callback: any) => {
        if (value === '456') {
          callback(new Error('不允许输入456'));
        }
        callback();
      };
      const formDemoJson7: formJsonType = reactive({
        columnsNumber: 3,
        labelWidth: 'auto',
        size: 'default',
        colOrder: {
          text1: {
            formItemMeta: {
              columnId: '020',
              label: '姓名',
              controlType: 'text',
              labelWidth: 'auto'
            },
            colCount: 1,
            defaultValue: '张三',
            placeholder: '请输入姓名'
          }
        },
        ruleMeta: {
          text1: [
            { trigger: 'blur', message: '请输入姓名', required: true },
            { validator: validatePass2, trigger: 'blur' },
            { validator: validatePass3, trigger: 'blur' }
          ]
        },
        select: {
          backFun: () => {
            window.alert('提交成功');
          }
        }
      });
      return {
        formDemo7,
        formDemoJson7,
        CodeShow,
        codeblock
      };
    }
  });
</script>
<style scoped lang="less">
  @import url('../controlStyle.less');
</style>
