import { defineComponent, KeepAlive } from 'vue';
import { RouterView } from 'vue-router';

export default defineComponent({
  setup() {
    // 获取当前应用于系统中的样式
    return () => (
      <KeepAlive>
        <RouterView></RouterView>
      </KeepAlive>
    );
  }
});
