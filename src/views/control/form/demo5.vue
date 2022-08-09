<template>
  <div class="slot-block">
    <formCore ref="formDemo5" :form-json="formDemoJson5">
      <template #testSlot>
        <el-input v-model="inputValue" @change="formDemo5.setFormModel('checkbox1', inputValue)">
          <template #prepend>我是插槽类容</template>
        </el-input>
      </template>
    </formCore>
  </div>
</template>
<script lang="tsx">
  import { formJsonType } from '@/components/formCore/formItem/itemObject';
  import formCore from '@/components/formCore/formCore.vue';
  import { defineComponent, reactive, ref } from 'vue';

  export default defineComponent({
    name: 'Demo5',
    components: { formCore },
    setup() {
      const formDemo5 = ref();
      const inputValue = ref('');
      const formDemoJson5: formJsonType = reactive({
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
          testSlot: {
            formItemMeta: {
              columnId: '106',
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
        formDemoJson5
      };
    }
  });
</script>
<style scoped lang="less">
  @import url('../controlStyle.module.less');
</style>
