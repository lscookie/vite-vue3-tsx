import { computed, defineComponent, onMounted, ref, watch } from 'vue';
import style from './style.module.less';
import Icon from '@/components/icon.vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
export default defineComponent({
  name: 'Menu',
  components: { Icon },
  setup() {
    const store = useStore();
    const router = useRouter();
    // 根据当前路由更新面包屑
    const route = useRoute();
    const menuCollapse = computed(() => store.state.menu.collapse);
    const routerChange = computed(() => store.state.menu.routerChange);
    const menuData = ref<Array<any>>([
      {
        title: '表单1',
        id: '1111',
        icon: 'Camera',
        children: [
          {
            title: '表单1-1',
            id: '2222',
            icon: 'Burger',
            route: '/home1',
            children: []
          }
        ]
      },
      {
        title: '表单2',
        id: '333333',
        icon: 'Calendar',
        children: [
          // { title: '表单2-1', id: '44444', icon: 'DataAnalysis', route: '/home1', children: [] },
          { title: '表单2-2', id: '66666', icon: 'DataAnalysis', route: '/home2', children: [] },
          { title: '表单2-3', id: '77777', icon: 'DataAnalysis', route: '/home', children: [] }
        ]
      }
    ]);

    const formatMenuData = (data: any): Array<any> => {
      let resultList: Array<any> = data.map((element: any) => {
        if (element.hasOwnProperty('children') && element.children.length > 0) {
          return (
            <el-sub-menu index={element.id}>
              {{
                title: () => (
                  <div>
                    <Icon iconType={element.icon}></Icon>
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
          let resultList: Array<any> = [];
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
        let result: any = {
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
        default-active="66666"
        collapse={menuCollapse.value}
        router={true}
        class={[style.menu, 'el-menu-vertical-demo']}
      >
        {formatMenuData(menuData.value)}
      </el-menu>
    );
  }
});
