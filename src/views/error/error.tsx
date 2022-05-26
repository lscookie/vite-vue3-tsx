import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Error',
  setup() {
    return () => (
      <div class={'wscn-http404-container'}>
        <div class={'wscn-http404'}>
          <div class={'pic-404'}>
            <img class={'pic-404__parent'} src="../assets/img/404.png" alt="404" />
          </div>
        </div>
        <div class={'bullshit'}>
          <div class={'bullshit__info'}>抱歉！你访问的页面出错了......</div>
          <el-button type="primary" round onClick={}>
            返回首页
          </el-button>
        </div>
      </div>
    );
  }
});
