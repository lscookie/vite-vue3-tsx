<template>
  <div class="color-select-out">
    <el-select v-model="color" @change="ColorChange">
      <el-option v-for="item of lcoalProps.colorList.value" :key="item.color" :value="item.color">
        <div class="color-select-block">
          {{ item.color }}
          <div
            class="color-div-block option-color-block"
            :style="{ 'background-color': item.color }"
          ></div>
        </div>
      </el-option>
    </el-select>
    <div class="color-div-block show-color-block" :style="{ 'background-color': color }"></div>
  </div>
</template>

<script lang="tsx">
  import { defineComponent, PropType, ref, toRefs, watch } from 'vue';
  type colorType = { color: string };
  type colorListType = Array<colorType> | null;
  export default defineComponent({
    name: 'ColorSelect',
    props: {
      selectColor: {
        type: String,
        default: ''
      },
      colorList: {
        type: Object as PropType<colorListType>,
        default: null
      }
    },
    emits: ['selectChange', 'update:selectColor'],
    setup(props, { emit }) {
      const lcoalProps = toRefs(props);
      const color = ref('');
      const ColorChange = () => {
        emit('update:selectColor', color);
        emit('selectChange');
      };
      watch(
        lcoalProps.selectColor,
        (oldValue) => {
          color.value = oldValue;
        },
        { immediate: true }
      );
      return {
        ColorChange,
        color,
        lcoalProps
      };
    }
  });
</script>

<style lang="less" scoped>
  .color-select-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .option-color-block {
    background-color: aqua;
  }
  .color-select-out {
    position: relative;
  }
  .show-color-block {
    position: absolute;
    right: 30px;
    top: 8px;
  }
  .color-div-block {
    border-radius: 4px;
    width: 15px;
    height: 15px;
    border: 1px solid #efefef;
    display: inline-block;
  }
</style>
