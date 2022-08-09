<template>
  <div class="slot-block">
    <div class="item-show-block">
      <label>columnsNumber</label>
      <el-slider v-model="formDemoJson1.columnsNumber" :min="1" :max="10"></el-slider>
    </div>
    <formCore ref="formDemo1" :form-json="formDemoJson1"> </formCore>
  </div>
</template>
<script lang="tsx">
  import { formJsonType } from '@/components/formCore/formItem/itemObject';
  import formCore from '@/components/formCore/formCore.vue';
  import { defineComponent, reactive } from 'vue';

  export default defineComponent({
    name: 'Demo1',
    components: { formCore },
    setup() {
      const formDemoJson1: formJsonType = reactive({
        columnsNumber: 2,
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
            colCount: 1,
            defaultValue: '',
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
            colCount: 1,
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
            colCount: 1,
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
        formDemoJson1
      };
    }
  });
</script>
<style scoped lang="less">
  @import url('../controlStyle.module.less');
</style>
