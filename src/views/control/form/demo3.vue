<template>
  <div class="slot-block">
    <div class="item-show-block">
      <label>size</label>
      <el-select v-model="formDemoJson3.size">
        <el-option label="default" value="default"></el-option>
        <el-option label="small" value="small"></el-option>
        <el-option label="large" value="large"></el-option>
      </el-select>
    </div>
    <formCore ref="formDemo1" :form-json="formDemoJson3"> </formCore>
  </div>
</template>
<script lang="tsx">
  import { formJsonType } from '@/components/formCore/formItem/itemObject';
  import formCore from '@/components/formCore/formCore.vue';
  import { defineComponent, reactive } from 'vue';

  export default defineComponent({
    name: 'Demo2',
    components: { formCore },
    setup() {
      const formDemoJson3: formJsonType = reactive({
        columnsNumber: 1,
        labelWidth: 'auto',
        size: 'default',
        colOrder: {
          default: {
            formItemMeta: {
              columnId: '100',
              label: 'default',
              controlType: 'text',
              isClear: false,
              title: '姓名',
              labelWidth: 'auto'
            },
            size: 'default',
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入姓名'
          },
          small: {
            formItemMeta: {
              columnId: '100',
              label: 'small',
              controlType: 'text',
              isClear: false,
              title: 'text1',
              labelWidth: 'auto'
            },
            size: 'small',
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入text1'
          },
          large: {
            formItemMeta: {
              columnId: '100',
              label: 'large',
              controlType: 'text',
              isClear: false,
              title: 'text2'
            },
            size: 'large',
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入text2'
          },
          test: {
            formItemMeta: {
              columnId: '100',
              label: 'test',
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
        formDemoJson3
      };
    }
  });
</script>
<style scoped lang="less">
  @import url('../controlStyle.module.less');
</style>
