<!--下拉单选-->
<template>
  <el-tree-select
    :id="'c' + keyName + formItemMeta.columnId"
    v-model="value"
    :name="'c' + formItemMeta.columnId"
    :size="size"
    :data="localOptionList"
    :check-strictly="formItemMeta.checkStrictly"
    :render-after-expand="false"
  >
  </el-tree-select>
</template>
<script lang="ts">
  import { computed, defineComponent, onMounted, reactive, ref, toRefs } from 'vue';
  import { ElTreeSelect } from 'element-plus';
  import { itemController } from './formInit';
  // 引入组件需要的属性、控制类
  import { itemControllerType, itemProps } from './itemObject';
  import { getFormItemData } from '../formUtils';

  export default defineComponent({
    name: 'SselectTree',
    components: { ElTreeSelect },
    inheritAttrs: false,
    props: {
      ...itemProps, // 基础属性
      keyName: {
        type: String,
        default: ''
      },
      modelValue: [String, Number, Array]
    },
    emits: ['update:modelValue'],
    setup(props, context) {
      const itemData = reactive<itemControllerType>(itemController(props, context.emit));
      const httpData = ref([]);
      const localOptionList = computed((): any => {
        if (props.formItemMeta.hasOwnProperty('network')) {
          return httpData;
        }
        return ref(props.formItemMeta.optionList);
      });
      onMounted(async () => {
        // 获取服务端数据
        await getFormItemData(props, httpData);
        itemData.value = localOptionList.value.value[0]?.value ?? '';
      });
      return {
        ...toRefs(itemData),
        localOptionList
      };
    }
  });
</script>
