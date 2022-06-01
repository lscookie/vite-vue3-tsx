<template>
  <div class="login">
    <div class="login-block">
      <el-form
        ref="loginFormRef"
        class="form-block"
        :rules="loginForm.rules"
        :model="loginForm.data"
        label-width="30%"
      >
        <el-form-item label="用户名" prop="user">
          <el-input v-model="loginForm.data.user" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input v-model="loginForm.data.passWord" type="password" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item class="button-block">
          <el-button type="primary" @click="formSubmit(loginFormRef)">登录</el-button>
          <el-button type="success" @click="formSubmit()">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
  import { reactive, ref } from 'vue';
  import md5 from 'md5-ts';
  import * as httpServer from '@/server/httpServer';
  import basicUtil from 'utils/basicsUtls';
  import { ElForm } from 'element-plus';
  import { useRouter } from 'vue-router';
  export default {
    setup() {
      const { msgOpen } = basicUtil();
      const router = useRouter();
      const loginForm = reactive({
        data: {
          user: '',
          passWord: ''
        },
        rules: {
          user: [
            {
              required: true,
              message: '请输入用户名！',
              trigger: 'blur'
            }
          ],
          passWord: [
            {
              required: true,
              message: '请输密码！',
              trigger: 'blur'
            }
          ]
        }
      });

      const loginFormRef = ref<typeof ElForm>();

      const formSubmit = async (formRef: any) => {
        if (!formRef) return;
        await formRef.validate((valid: boolean, fields: any) => {
          if (valid) {
            // 提交请求
            let params: any = { ...loginForm.data };
            params.passWord = md5(params.passWord);
            httpServer.loading(params).then((res: any) => {
              if (res.err > 0) {
                msgOpen(res.msg, 'error');
              } else {
                router.push('/main');
              }
            });
          } else {
            console.log('表单验证不通过！', fields);
          }
        });
      };

      return {
        loginForm,
        formSubmit,
        loginFormRef
      };
    }
  };
</script>

<style lang="less" scoped>
  .login {
    width: 100%;
    height: 100%;
    // background: linear-gradient(-45deg, red,blue,green)
  }
  .login-block {
    position: absolute;
    width: 30%;
    min-width: 400px;
    height: 30%;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 15px;
    box-sizing: border-box;
    padding: 20px;
    box-shadow: 4px 4px 12px 4px #efefef;
    .form-block {
      height: 100%;
      width: 70%;
      transform: translate(15%, 25%);
    }
    .button-block {
      transform: translate(10%, 0px);
    }
  }
</style>
