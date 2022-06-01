import { defineComponent, ref, reactive, onMounted } from 'vue';
import * as httpServer from '@/server/httpServer';
import basicUtil from 'utils/basicsUtls';
import { ElForm } from 'element-plus';
import md5 from 'md5-ts';
import './login.less';
import { useRoute } from 'vue-router';
export default defineComponent({
  name: 'Login',
  setup() {
    const { msgOpen } = basicUtil();
    const router = useRoute();
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
      await formRef.value.validate((valid: boolean, fields: any) => {
        if (valid) {
          // 提交请求
          const params: any = { ...loginForm.data };
          params.passWord = md5(params.passWord);
          // httpServer.loading(params).then((res: any) => {
          //   if (res.err > 0) {
          //     msgOpen(res.msg, 'error');
          //   } else {
          //     router.push('/main');
          //   }
          // });
          router.push('/main');
        } else {
          console.log('表单验证不通过！', fields);
        }
      });
    };

    // function keyUp({ code }: KeyboardEvent) {
    //   if (code === 'Enter') {
    //     login();
    //   }
    // }

    return () => (
      <div class="login">
        <div class="login-block">
          <el-form
            ref={loginFormRef}
            class="form-block"
            rules={loginForm.rules}
            model={loginForm.data}
            label-width="30%"
          >
            <el-form-item label="用户名" prop="user">
              <el-input v-model={loginForm.data.user} placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item label="密码" prop="passWord">
              <el-input
                v-model={loginForm.data.passWord}
                type="password"
                placeholder="请输入密码"
              />
            </el-form-item>
            <el-form-item class="button-block">
              <el-button
                type="primary"
                onClick={() => {
                  formSubmit(loginFormRef);
                }}
              >
                登录
              </el-button>
              <el-button
                type="primary"
                onClick={() => {
                  formSubmit(loginFormRef);
                }}
              >
                注册
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    );
  }
});
