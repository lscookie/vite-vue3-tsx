<template>
  <el-select v-model="color" @change="ColorChange">
    <el-option
      v-for="item of lcoalProps.colorList.value"
      :key="item.color"
      :value="item.color"
    >
      <div class="color-select-block">
        {{ item.color }}
        <div
          class="color-div-block option-color-block"
          :style="{ 'background-color': item.color }"
        ></div>
      </div>
    </el-option>
  </el-select>
  <div
    class="color-div-block show-color-block"
    :style="{ 'background-color': color }"
  ></div>
</template>

<script lang="tsx">
import { defineComponent, onMounted, reactive, ref, toRefs, watch } from "vue";
export default defineComponent({
  name: "colorSelect",
  emits: ["selectChange", "update:selectColor"],
  props: {
    selectColor: {
      type: String,
      default: "",
    },
    colorList: {
      type: Object,
      default: [],
    },
  },
  setup(props, { emit }) {
    const lcoalProps = toRefs(props);
    const color = ref("");
    const ColorChange = (value: string) => {
      emit("update:selectColor", color);
      emit("selectChange");
    };
    watch(
      lcoalProps.selectColor,
      (oldValue) => {
        color.value = oldValue;
      },
      { immediate: true }
    );
    onMounted(() => {});
    return {
      ColorChange,
      color,
      lcoalProps,
    };
  },
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
.show-color-block {
  position: relative;
  right: 50px;
}
.color-div-block {
  border-radius: 4px;
  width: 15px;
  height: 15px;
  border: 1px solid #efefef;
  display: inline-block;
}
</style>
