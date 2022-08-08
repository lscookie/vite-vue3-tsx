<!--单行文本-->
<template>
  <el-input
    v-bind="$attrs"
    :id="'c' + formItemMeta.columnId"
    v-model="value"
    :name="'c' + formItemMeta.columnId"
    :clearable="formItemMeta.isClear"
    :size="size"
    :prefix-icon="''"
    :suffix-icon="''"
    @blur="run"
    @change="run"
    @clear="run"
    @keydown="clear"
  >
  </el-input>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { itemController } from './formInit';
  import { ElInput } from 'element-plus';
  // 引入组件需要的属性、控制类
  import { itemProps } from './itemObject';

  export default defineComponent({
    name: 'Ttext',
    components: {
      ElInput
    },
    inheritAttrs: false,
    props: {
      modelValue: [String, Number],
      prefixIcon: {
        type: [Object, String],
        default: ''
      },
      suffixIcon: {
        type: [Object, String],
        default: ''
      },
      keyName: {
        type: String,
        default: ''
      },
      ...itemProps // 基础属性
    },
    emits: ['update:modelValue'],
    setup(props, context) {
      // 生成一个和表单model中相对应的值双向绑定的值
      const { value, run, clear } = itemController(props, context.emit);
      // onMounted(() => {});
      return {
        value,
        run,
        clear
      };
    }
  });
</script>
