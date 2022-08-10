<template>
  <transition
    :duration="300"
    :enter-active-class="'animate__animated animate__lightSpeedInLeft'"
    :leave-active-class="'animate__animated animate__lightSpeedOutRight'"
  >
    <div class="codemirror-out">
      <el-scrollbar :max-height="height">
        <codemirror
          v-model="local_code"
          placeholder="代码展示块..."
          :autofocus="true"
          :indent-with-tab="true"
          :disabled="true"
          :tab-size="2"
          :extensions="extensions"
        />
      </el-scrollbar>
    </div>
  </transition>
</template>
<script lang="ts">
  import { computed, defineComponent, ref, toRefs } from 'vue';
  import { Codemirror } from 'vue-codemirror';
  import { javascript } from '@codemirror/lang-javascript';
  import { oneDark } from '@codemirror/theme-one-dark';

  export default defineComponent({
    name: 'CodeComponent',
    components: { Codemirror },
    props: {
      code: {
        type: String,
        defaualt: ''
      },
      height: {
        type: Number,
        defaualt: 200
      }
    },
    setup(props) {
      const extensions = ref<Array<any>>([javascript(), oneDark]);
      const Local_props = toRefs(props);
      const local_code = computed((): string => {
        return (Local_props.code.value ?? '') as string;
      });
      return {
        extensions,
        local_code,
        ...toRefs(Local_props)
      };
    }
  });
</script>
<style scoped lang="less">
  .codemirror-out {
    margin-top: 10px;
  }
</style>
