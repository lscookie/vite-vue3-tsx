<template>
  <layout :left-span="7" :right-span="17">
    <template #left> 11111 </template>
    <template #right>
      <el-input v-model="inputValue"> </el-input>
      <colorPicker v-model="color" />
    </template>
  </layout>
</template>

<script lang="tsx">
  import { onActivated, onDeactivated, ref } from 'vue';
  export default {
    name: 'Home2',
    setup() {
      const inputValue = ref('');
      const color = ref('');
      onActivated(() => {
        console.log('我激活啦！');
      });
      onDeactivated(() => {
        console.log('我失活啦！');
      });
      return {
        inputValue,
        color
      };
    }
  };
</script>

<style></style>
