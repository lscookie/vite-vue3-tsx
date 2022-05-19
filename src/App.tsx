import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

export default defineComponent({
  setup() {
    return () => (
      <keep-alive>
        <RouterView />
      </keep-alive>
    );
  }
});
