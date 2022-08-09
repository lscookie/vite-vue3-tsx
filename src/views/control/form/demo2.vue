<template>
  <div class="slot-block">
    <!-- <div class="item-show-block"> -->
    <label>labelWidth</label>
    <el-select v-model="formDemoJson2.labelWidth" size="default">
      <el-option label="auto" value="auto"></el-option>
      <el-option label="10px" value="10px"></el-option>
      <el-option label="50px" value="50px"></el-option>
      <el-option label="120px" value="120px"></el-option>
    </el-select>
    <!-- </div> -->
    <formCore ref="formDemo1" :form-json="formDemoJson2"> </formCore>
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
      const formDemoJson2: formJsonType = reactive({
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
          }
        },
        linkageMeta: {},
        ruleMeta: {}
      });
      return {
        formDemoJson2
      };
    }
  });
</script>
<style scoped lang="less">
  @import url('../controlStyle.module.less');
</style>
