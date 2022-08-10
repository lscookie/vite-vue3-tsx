<!--文本域，没有清空按钮-->
<template>
  <el-input
    :id="'c' + keyName + formItemMeta.columnId"
    v-model="value"
    type="textarea"
    :name="'c' + formItemMeta.columnId"
    :rows="formItemMeta.rows"
    :size="size"
    @blur="run"
    @change="run"
    @clear="run"
    @keydown="clear"
  >
  </el-input>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ElInput } from 'element-plus';
  // 引入组件需要的属性 引入表单子控件的管理类
  import { itemController } from './formInit';
  // 引入组件需要的属性、控制类
  import { itemProps } from './itemObject';

  export default defineComponent({
    name: 'TArea',
    components: {
      ElInput
    },
    inheritAttrs: false,
    props: {
      keyName: {
        type: String,
        default: ''
      },
      modelValue: [String, Number],
      ...itemProps // 基础属性,
    },
    emits: ['update:modelValue'],
    setup(props, context) {
      return {
        ...itemController(props, context.emit)
      };
    }
  });
</script>
