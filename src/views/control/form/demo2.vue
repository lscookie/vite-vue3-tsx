<template>
  <div class="slot-block">
    <div class="item-show-block">
      <label>labelWidth</label>
      <el-select v-model="formDemoJson2.labelWidth" size="default">
        <el-option label="auto" value="auto"></el-option>
        <el-option label="10px" value="10px"></el-option>
        <el-option label="50px" value="50px"></el-option>
        <el-option label="120px" value="120px"></el-option>
      </el-select>
    </div>
    <formCore ref="formDemo1" :form-json="formDemoJson2"> </formCore>
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
  import { code2 } from './code';
  import CodeComponent from '../codeMirror.vue';

  export default defineComponent({
    name: 'Demo2',
    components: { formCore, CodeComponent },
    setup() {
      const CodeShow = ref(false);
      const codeblock = ref(code2);
      const formDemoJson2: formJsonType = reactive({
        columnsNumber: 2,
        labelWidth: 'auto',
        size: 'default',
        colOrder: {
          text3: {
            formItemMeta: {
              columnId: '005',
              label: 'text2',
              controlType: 'text'
            },
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入text2'
          },
          text1: {
            formItemMeta: {
              columnId: '006',
              label: '姓名',
              controlType: 'text',
              labelWidth: 'auto'
            },
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入姓名'
          }
        },
        linkageMeta: {},
        ruleMeta: {}
      });
      return {
        formDemoJson2,
        CodeShow,
        codeblock
      };
    }
  });
</script>
<style scoped lang="less">
  @import url('../controlStyle.less');
</style>
