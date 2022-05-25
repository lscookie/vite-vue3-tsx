import { computed, defineComponent, onMounted } from 'vue';
import dashboardStyle from './dashboard.module.less';
import Head from './head/head.vue';
import Main from './main/main.vue';
import Foot from './foot/foot.vue';
import Menu from './menu/menu';
import initStyleConfig from './head/globalSettings/initGlobalSetting';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'Dashboard',
  setup() {
    initStyleConfig();
    const store = useStore();
    const menuCollapse = computed(() => store.state.menu.collapse);
    return () => (
      <div class={dashboardStyle['commonLayout']}>
        <el-container>
          <el-aside
            class={[
              dashboardStyle.aside,
              menuCollapse.value ? dashboardStyle.asideToLeft : dashboardStyle.asideToRight
            ]}
          >
            <Menu></Menu>
          </el-aside>
          <el-container>
            <el-header class={dashboardStyle.header}>
              <Head></Head>
            </el-header>
            <el-main class={[dashboardStyle.main, 'dashboard-main']}>
              <Main></Main>
            </el-main>
            <el-footer class={dashboardStyle.footer}>
              <Foot></Foot>
            </el-footer>
          </el-container>
        </el-container>
      </div>
    );
  }
});
