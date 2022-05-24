import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export default defineComponent({
  setup() {
    // 获取当前应用于系统中的样式
    return () => (
      <keep-alive>
        <RouterView />
      </keep-alive>
    );
  },
});
