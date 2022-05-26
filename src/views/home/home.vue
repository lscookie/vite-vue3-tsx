<template>
  <layout>
    <template #left>
      <el-button @click="login">login</el-button>
      <el-button @click="testerr">testerr</el-button>
      <el-button @click="getAllUserBtn">getAllUser</el-button>
    </template>
    <template #right> 7777 </template>
  </layout>
</template>

<script lang="tsx">
  import { loading, errTest, getAllUser } from '@/server/httpServer';

  export default {
    name: 'Home',
    setup() {
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
  };
</script>

<style></style>
