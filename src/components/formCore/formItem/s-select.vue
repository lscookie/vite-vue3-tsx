<!--下拉单选-->
<template>
  <el-select
    :id="'c' + keyName + formItemMeta.columnId"
    v-model="value"
    v-bind="$attrs"
    :name="'c' + formItemMeta.columnId"
    :size="size"
    :multiple="false"
  >
    <el-option
      v-for="item in localOptionList.value"
      :key="'select' + formItemMeta.columnId + item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    >
    </el-option>
  </el-select>
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted, reactive, ref, toRefs } from 'vue';
  import { ElSelect, ElOption } from 'element-plus';
  // 引入组件需要的属性 引入表单子控件的管理类
  import { itemController } from './formInit';
  // 引入组件需要的属性、控制类
  import { getFormItemData } from '../formUtils';
  import { itemControllerType, itemProps } from './itemObject';

  export default defineComponent({
    name: 'Sselect',
    components: {
      ElSelect,
      ElOption
    },
    inheritAttrs: false,
    props: {
      keyName: {
        type: String,
        default: ''
      },
      ...itemProps, // 基础属性
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
        itemData.value = localOptionList?.value?.value[0]?.value ?? '';
      });
      return {
        ...toRefs(itemData),
        localOptionList
      };
    }
  });
</script>
