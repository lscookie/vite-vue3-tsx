<template>
  <el-button
    ref="ptBtnRef"
    class="ptBtn"
    :size="size"
    :type="type"
    :icon="icon"
    :loading="loading"
    :disabled="disabled"
    :pt="pt"
    @click="handleClick"
  >
    <slot />
  </el-button>
</template>

<script setup lang="ts">
  import { onBeforeMount, reactive } from 'vue';

  const props = defineProps({
    size: String,
    type: String,
    icon: String,
    pt: String,
    loading: Boolean,
    disabled: Boolean,
    handleClick: Object
  });
  const btnStyle = reactive({
    btnHeight: '40px',
    btnPadding: '0 24px',
    btnColor: '#fff',
    btnBorder: '1px solid'
  });

  onBeforeMount(() => {
    if (props.size === 'small') {
      btnStyle.btnHeight = '30px';
      btnStyle.btnPadding = '0 12px';
    }
    if (props.pt === 'edit') {
      btnStyle.btnHeight = '30px';
      btnStyle.btnPadding = '0 12px';
      btnStyle.btnColor = '#4490ef';
      btnStyle.btnBorder = '1px solid #4490ef';
    }
    if (props.pt === 'delete') {
      btnStyle.btnHeight = '30px';
      btnStyle.btnPadding = '0 12px';
      btnStyle.btnColor = '#eb2c31';
      btnStyle.btnBorder = '1px solid #eb2c31';
    }
    if (props.pt === 'cancel') {
      //  btnStyle.btnHeight = '30px';
      // btnStyle.btnPadding = '0 12px';
      btnStyle.btnColor = '#eb2c31';
      btnStyle.btnBorder = '1px solid #eb2c31';
    }

    // if()
  });
</script>
<style lang="less" scoped>
  .ptBtn {
    padding: v-bind('btnStyle.btnPadding');
    margin: 0 5px;
    height: v-bind('btnStyle.btnHeight');
    color: v-bind('btnStyle.btnColor');
    border: v-bind('btnStyle.btnBorder');
  }
</style>
