import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { getStyleByClassName } from '@/utils/skinTools';

export default function initStyleConfig() {
  const store = useStore();
  // 初始化样式控制台
  const mySeadStyle = computed(() => store.state.menu.headStyle);
  const myMenuStyle = computed(() => store.state.menu.menuStyle);
  const myMainStyle = computed(() => store.state.menu.mainStyle);
  const myButtonStyle = computed(() => store.state.menu.buttonStyle);
  const myTableStyle = computed(() => store.state.menu.tableStyle);
  const initSettingFun = () => {
    let styleObject: any = {};
    Object.keys(mySeadStyle.value).forEach((item: any) => {
      styleObject[item] = getStyleByClassName('dashboard-head', item);
    });
    store.commit('SET_HEAD_STYLE', Object.assign({}, styleObject));

    styleObject = {};
    Object.keys(myMenuStyle.value).forEach((item: any) => {
      styleObject[item] = getStyleByClassName('dashboard-menu', item);
    });
    store.commit('SET_MENU_STYLE', Object.assign({}, styleObject));

    styleObject = {};
    Object.keys(myMainStyle.value).forEach((item: any) => {
      styleObject[item] = getStyleByClassName('dashboard-main', item);
    });
    store.commit('SET_MAIN_STYLE', Object.assign({}, styleObject));

    styleObject = {};
    Object.keys(myButtonStyle.value).forEach((item: any) => {
      styleObject[item] = getStyleByClassName('dashboard-button', item);
    });
    store.commit('SET_BUTTON_STYLE', Object.assign({}, styleObject));

    styleObject = {};
    Object.keys(myTableStyle.value).forEach((item: any) => {
      styleObject[item] = getStyleByClassName('dashboard-table', item);
    });
    store.commit('SET_TABLE_STYLE', Object.assign({}, styleObject));
  };

  onMounted(() => {
    initSettingFun();
  });

  return { initSettingFun };
}
