import { computed, defineComponent, ref, watch } from 'vue';
import style from './style.module.less';
import MyIcon from '@/components/icon.vue';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'DashboardMenu',
  components: { MyIcon },
  setup() {
    const store = useStore();
    // const router = useRouter();
    // 根据当前路由更新面包屑
    // const route = useRoute();
    const menuCollapse = computed(() => store.state.menu.collapse);
    const routerChange = computed(() => store.state.menu.routerChange);
    const iconClolor = computed(() => store.state.menu.headStyle.headTextColor);
    const menuData = ref<Array<any>>([
      {
        title: '测试1',
        id: '1111',
        icon: 'Camera',
        children: [
          {
            title: '测试界面1-1',
            id: '2222',
            icon: 'Burger',
            route: '/home1',
            children: []
          }
        ]
      },
      {
        title: '测试2',
        id: '333333',
        icon: 'Calendar',
        children: [
          // { title: '表单2-1', id: '44444', icon: 'DataAnalysis', route: '/home1', children: [] },
          {
            title: '测试界面2-2',
            id: '66666',
            icon: 'DataAnalysis',
            route: '/home2',
            children: []
          },
          {
            title: '测试界面2-3',
            id: '77777',
            icon: 'DataAnalysis',
            route: '/home',
            children: []
          }
        ]
      },
      {
        title: '表单控件',
        id: 'formControl',
        icon: 'Document',
        children: [
          {
            title: '参数介绍',
            id: 'formControlInfo',
            icon: 'Document',
            route: '/formControlInfo',
            children: []
          }
        ]
      },
      {
        title: '基础按钮',
        id: 'baseButton',
        icon: 'Mouse',
        children: [
          {
            title: '基础按钮',
            id: 'baseButtonInfo',
            icon: 'Mouse',
            route: '/baseButton',
            children: []
          }
        ]
      }
    ]);

    const formatMenuData = (data: any): Array<any> => {
      let resultList: Array<any> = [];
      resultList = data.map((element: any): any => {
        if (element.hasOwnProperty('children') && element.children.length > 0) {
          return (
            <el-sub-menu index={element.id}>
              {{
                title: () => (
                  <div>
                    <my-icon iconType={element.icon} color={iconClolor.value}></my-icon>
                    <span>{menuCollapse.value ? '' : element.title}</span>
                  </div>
                ),
                default: () => formatMenuData(element.children)
              }}
            </el-sub-menu>
          );
        } else {
          return (
            <el-menu-item index={element.id} route={element.route}>
              {element.title}
            </el-menu-item>
          );
        }
      });
      return resultList;
    };

    watch(
      routerChange,
      () => {
        setTimeout(() => {
          const resultList: Array<any> = [];
          updaBreadcrumb(routerChange.value, menuData.value, resultList);
          // 更新到store中
          store.commit('SET_ROUTER_URL', resultList);
        }, 10);
      },
      {
        deep: true,
        immediate: true
      }
    );

    // 更新面包屑的数据
    const updaBreadcrumb = (path: string, data: Array<any>, resultList: Array<any>): any => {
      let routerList: Array<any> = [];
      data.forEach((item: any) => {
        const result: any = {
          title: item.title,
          children: [],
          id: item.id
        };
        if (item.hasOwnProperty('children') && item.children.length > 0) {
          routerList = updaBreadcrumb(path, item.children, resultList);
          if (routerList.length > 0) {
            result.hasChildren = true;
            result.active = item.title;
            result.children = Object.assign([], item.children);
            resultList.unshift(result);
            return;
          }
        } else {
          if (item.route === path) {
            result.hasChildren = false;
            resultList.push(result);
            routerList.push(result);
            return;
          }
        }
      });
      return routerList;
    };

    return () => (
      <el-menu
        default-active="77777"
        collapse={menuCollapse.value}
        router={true}
        class={[style.menu, 'el-menu-vertical-demo', 'dashboard-menu']}
      >
        {formatMenuData(menuData.value)}
      </el-menu>
    );
  }
});
