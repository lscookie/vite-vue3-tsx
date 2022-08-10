<template>
  <div class="slot-block">
    <div class="item-show-block">
      <label>columnsNumber</label>
      <el-slider v-model="formDemoJson1.columnsNumber" :min="1" :max="10"></el-slider>
    </div>
    <formCore ref="formDemo1" :form-json="formDemoJson1"> </formCore>
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
  import { code1 } from './code';

  export default defineComponent({
    name: 'Demo1',
    components: { formCore, CodeComponent },
    setup() {
      const CodeShow = ref(false);
      const codeblock = ref(code1);
      const formDemoJson1: formJsonType = reactive({
        columnsNumber: 2,
        labelWidth: 'auto',
        size: 'default',
        colOrder: {
          text1: {
            formItemMeta: {
              columnId: '001',
              label: '姓名',
              controlType: 'text',
              isClear: false,
              title: '姓名',
              labelWidth: 'auto'
            },
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入姓名'
          },
          text2: {
            formItemMeta: {
              columnId: '002',
              label: 'text1',
              controlType: 'text',
              isClear: false,
              title: 'text1',
              labelWidth: 'auto'
            },
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入text1'
          },
          text3: {
            formItemMeta: {
              columnId: '003',
              label: 'text2',
              controlType: 'text',
              isClear: false,
              title: 'text2'
            },
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入text2'
          },
          text4: {
            formItemMeta: {
              columnId: '004',
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
