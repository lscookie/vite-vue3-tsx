import { computed, defineComponent } from 'vue';
import dashboardStyle from './dashboard.module.less';
import DashboardHead from './head/head.vue';
import DashboardMain from './main/main.vue';
import DashboardFoot from './foot/foot.vue';
import Menu from './menu/menu';
import initStyleConfig from './head/globalSettings/initGlobalSetting';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'Dashboard',
  components: { DashboardHead, DashboardMain, DashboardFoot },
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
              <dashboard-head></dashboard-head>
            </el-header>
            <el-main
              // class={[dashboardStyle.main, 'dashboard-main', 'dashboard-button', 'dashboard-table']}
              class={[dashboardStyle.main, 'dashboard-main', 'dashboard-table']}
            >
              <dashboard-main></dashboard-main>
            </el-main>
            <el-footer class={dashboardStyle.footer}>
              <dashboard-foot></dashboard-foot>
            </el-footer>
          </el-container>
        </el-container>
      </div>
    );
  }
});
