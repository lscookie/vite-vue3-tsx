<template>
  <div class="slot-block">
    <formCore ref="formDemo6" :form-json="formDemoJson6"> </formCore>
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
  import { code6 } from './code';
  import CodeComponent from '../codeMirror.vue';

  export default defineComponent({
    name: 'Demo6',
    components: { formCore, CodeComponent },
    setup() {
      const CodeShow = ref(false);
      const codeblock = ref(code6);
      const formDemo6 = ref();
      const formDemoJson6: formJsonType = reactive({
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
            colCount: 1,
            defaultValue: '张三',
            placeholder: '请输入姓名'
          },
          text2: {
            formItemMeta: {
              columnId: '016',
              label: '姓名',
              controlType: 'text',
              isClear: false,
              title: '姓名',
              labelWidth: 'auto'
            },
            colCount: 1,
            defaultValue: '张三',
            placeholder: '请输入姓名'
          },
          select1: {
            formItemMeta: {
              columnId: '017',
              label: '联动测试',
              controlType: 'select',
              isClear: false,
              title: '姓名',
              labelWidth: 'auto',
              optionList: [
                { label: '张三', value: 0 },
                { label: '李四', value: 1 },
                { label: '王五', value: 2 }
              ]
            },
            colCount: 1,
            defaultValue: '0'
          }
        },
        linkageMeta: {
          select1: {
            0: { changeValue: { text1: '姓名' }, showCol: ['text1', 'text2', 'select1'] },
            1: { changeValue: { text1: '李四' }, showCol: ['text2', 'select1'] },
            2: { changeValue: { text1: '张三' }, showCol: ['text1', 'select1'] }
          }
        }
      });
      return {
        formDemo6,
        formDemoJson6,
        CodeShow,
        codeblock
      };
    }
  });
</script>
<style scoped lang="less">
  @import url('../controlStyle.less');
</style>
