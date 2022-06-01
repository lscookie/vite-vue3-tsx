<template>
  <el-icon
    :style="{ 'font-size': propObject.size, color: propObject.color }"
    :class="{ 'is-loading': propObject.loading }"
  >
    <component :is="propObject.iconType"> </component>
  </el-icon>
</template>

<script lang="tsx">
  import { defineComponent, reactive } from 'vue';
  export default defineComponent({
    name: 'Icon',
    props: {
      iconType: {
        type: String,
        default: 'edit'
      },
      color: {
        type: String,
        default: '#000000'
      },
      size: {
        type: String,
        default: '18px'
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    setup(props) {
      const propObject = reactive(props);
      return {
        propObject
      };
    }
  });
</script>
<style lang="scss" scoped></style>
