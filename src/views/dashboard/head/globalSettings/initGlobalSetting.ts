import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { getStyleByClassName } from "@/utils/skinTools";

export default function initStyleConfig() {
  const store = useStore();
  // 初始化样式控制台
  const mySeadStyle = computed(() => store.state.menu.headStyle);
  const myMenuStyle = computed(() => store.state.menu.menuStyle);
  const initSettingFun = () => {
    let styleObject: any = {};
    Object.keys(mySeadStyle.value).forEach((item: any) => {
      styleObject[item] = getStyleByClassName("dashboard-head", item);
    });
    store.commit("SET_HEAD_STYLE", Object.assign({}, styleObject));
    styleObject = {};
    Object.keys(myMenuStyle.value).forEach((item: any) => {
      console.log(item, getStyleByClassName("dashboard-menu", item));
      styleObject[item] = getStyleByClassName("dashboard-menu", item);
    });
    console.log("styleObject", styleObject);
    store.commit("SET_MENU_STYLE", Object.assign({}, styleObject));
  };

  onMounted(() => {
    initSettingFun();
  });

  return { initSettingFun };
}
