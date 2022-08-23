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
  import { formItemCode1 } from './form-item-code';

  export default defineComponent({
    name: 'FormItemDemo1',
    components: { formCore, CodeComponent },
    setup() {
      const CodeShow = ref(false);
      const codeblock = ref(formItemCode1);
      const formDemoJson1: formJsonType = reactive({
        columnsNumber: 2,
        labelWidth: 'auto',
        size: 'default',
        colOrder: {
          text0: {
            formItemMeta: {
              columnId: '001',
              label: '金额',
              controlType: 'text',
              labelWidth: 'auto'
            },
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入金额',
            clearable: true,
            formatter: (value: any) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
            parser: (value: any) => value.replace(/\$\s?|(,*)/g, '')
          },
          text1: {
            formItemMeta: {
              columnId: '002',
              label: 'text1',
              controlType: 'text',
              labelWidth: 'auto'
            },
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入text1',
            disabled: true
          },
          text2: {
            formItemMeta: {
              columnId: '003',
              label: 'text2',
              controlType: 'text'
            },
            colCount: 1,
            defaultValue: '默认值',
            placeholder: '请输入text2',
            prefixIcon: 'Aim',
            suffixIcon: 'Aim'
          },
          text3: {
            formItemMeta: {
              columnId: '004',
              label: '密码',
              controlType: 'text'
            },
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入密码',
            showPassword: true
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
