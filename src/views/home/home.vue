<template>
  <layout>
    <template #left>
      <el-button @click="login">login</el-button>
      <el-button @click="testerr">testerr</el-button>
      <el-button @click="getAllUserBtn">getAllUser</el-button>
    </template>
    <template #right>
      <visualization-echartsVue></visualization-echartsVue>
    </template>
  </layout>
</template>

<script lang="tsx">
  import { loading, errTest, getAllUser } from '@/server/httpServer';
  import VisualizationEchartsVue from '@/components/echarts/visualizationEcharts.vue';
  import { defineComponent, PropType } from 'vue';
  export default defineComponent({
    name: 'Home',
    components: { VisualizationEchartsVue },
    props: {},
    setup(props, context) {
      const login = async () => {
        await loading({
          user: '123',
          passWord: '456'
        })
          .then((res: any) => {
            console.log('res', res);
          })
          .catch((err: any) => {
            console.log('err', err);
          });
        console.log('请求完毕');
      };
      const testerr = () => {
        errTest()
          .then((res: any) => {
            console.log(res);
          })
          .catch((err: any) => {
            console.log('err', err);
          });
      };
      const getAllUserBtn = () => {
        getAllUser();
      };
      return {
        login,
        testerr,
        getAllUserBtn
      };
    }
  });
</script>

<style></style>
