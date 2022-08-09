<template>
  <div class="slot-block">
    <formCore ref="formDemo1" :form-json="formDemoJson4"> </formCore>
  </div>
</template>
<script lang="tsx">
  import { formJsonType } from '@/components/formCore/formItem/itemObject';
  import formCore from '@/components/formCore/formCore.vue';
  import { defineComponent, reactive } from 'vue';

  export default defineComponent({
    name: 'Demo4',
    components: { formCore },
    setup() {
      const formDemoJson4: formJsonType = reactive({
        columnsNumber: 3,
        labelWidth: 'auto',
        size: 'default',
        colOrder: {
          text1: {
            formItemMeta: {
              columnId: '100',
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
              columnId: '100',
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
              columnId: '100',
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
              columnId: '100',
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
        formDemoJson4
      };
    }
  });
</script>
<style scoped lang="less">
  @import url('../controlStyle.module.less');
</style>
