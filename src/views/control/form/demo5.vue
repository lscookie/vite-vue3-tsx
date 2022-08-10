<template>
  <div class="slot-block">
    <formCore ref="formDemo5" :form-json="formDemoJson5">
      <template #testSlot>
        <el-input v-model="inputValue" @change="formDemo5.setFormModel('checkbox1', inputValue)">
          <template #prepend>我是插槽类容</template>
        </el-input>
      </template>
    </formCore>
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
  import { code5 } from './code';
  import CodeComponent from '../codeMirror.vue';

  export default defineComponent({
    name: 'Demo5',
    components: { formCore, CodeComponent },
    setup() {
      const CodeShow = ref(false);
      const codeblock = ref(code5);
      const formDemo5 = ref();
      const inputValue = ref('');
      const formDemoJson5: formJsonType = reactive({
        columnsNumber: 3,
        labelWidth: 'auto',
        size: 'default',
        colOrder: {
          text1: {
            formItemMeta: {
              columnId: '015',
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
          testSlot: {
            formItemMeta: {
              columnId: '016',
              label: '插槽测试',
              controlType: '',
              isClear: false,
              title: '别名',
              labelWidth: 'auto'
            },
            hasSlot: true,
            size: 'small',
            colCount: 1,
            defaultValue: '1'
          }
        },
        linkageMeta: {},
        ruleMeta: {}
      });
      return {
        inputValue,
        formDemo5,
        formDemoJson5,
        CodeShow,
        codeblock
      };
    }
  });
</script>
<style scoped lang="less">
  @import url('../controlStyle.less');
</style>
