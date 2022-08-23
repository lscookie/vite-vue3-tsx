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
  import { formItemCode3 } from './form-item-code';

  export default defineComponent({
    name: 'FormItemDemo2',
    components: { formCore, CodeComponent },
    setup() {
      const CodeShow = ref(false);
      const codeblock = ref(formItemCode3);
      const formDemoJson1: formJsonType = reactive({
        columnsNumber: 2,
        labelWidth: 'auto',
        size: 'default',
        colOrder: {
          switch1: {
            formItemMeta: {
              columnId: '009',
              label: '开关',
              controlType: 'switch',
              labelWidth: 'auto'
            },
            size: 'small',
            colCount: 1,
            defaultValue: true
          },
          switch2: {
            formItemMeta: {
              columnId: '010',
              label: '开关',
              controlType: 'switch',
              labelWidth: 'auto'
            },
            size: 'small',
            colCount: 1,
            defaultValue: true,
            inlinePrompt: true,
            activeText: 'Y',
            inactiveText: 'N'
          },
          switch3: {
            formItemMeta: {
              columnId: '011',
              label: '开关',
              controlType: 'switch',
              labelWidth: 'auto'
            },
            size: 'small',
            colCount: 1,
            defaultValue: false,
            activeText: 'Y',
            inactiveText: 'N'
          },
          switch4: {
            formItemMeta: {
              columnId: '012',
              label: '开关',
              controlType: 'switch',
              labelWidth: 'auto'
            },
            size: 'small',
            colCount: 1,
            defaultValue: false,
            inlinePrompt: true,
            activeText: 'Y',
            inactiveText: 'N',
            style: '--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949'
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
