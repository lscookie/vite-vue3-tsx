import { updateStyle, formatStyleName } from "@/utils/skinTools";
import { Module } from "vuex";
import {
  SET_MENU_STAT,
  SET_ROUTER_CHANGE,
  SET_ROUTER_URL,
  SET_HEAD_ICON_COLOR,
  SET_HEAD_STYLE,
  SET_MENU_STYLE,
} from "./actionType";

const setStyle = (state: any, styleObject: Object, type: string) => {
  state[`${type}Style`] = Object.assign(state[`${type}Style`], styleObject);
  let styleData: any = {};
  for (let item in styleObject) {
    // @ts-ignore
    styleData[formatStyleName(item)] = styleObject[item];
  }
  updateStyle(`dashboard-${type}`, styleData);
};

const menu = {
  namespace: true,
  state: {
    // 菜单展开和收缩
    collapse: false,
    // 当前路由
    routerChange: "",
    // 面包屑路径
    routerList: [],
    // 头部icon颜色
    headIconColor: "",
    // 头部的Style变量合计
    headStyle: {
      headBackgorundColor: "",
      headTextColor: "",
    },
    menuStyle: {
      elMenuBgColor: "",
      elMenuHoverBgColor: "",
      elMenuTextColor: "",
    },
  },
  mutations: {
    [SET_MENU_STAT](state: any, collapse: Boolean) {
      state.collapse = collapse;
    },
    [SET_ROUTER_URL](state: any, routerList: Array<any>) {
      state.routerList = routerList;
    },
    [SET_ROUTER_CHANGE](state: any, path: string) {
      state.routerChange = path;
    },
    [SET_HEAD_ICON_COLOR](state: any, color: string) {
      state.headIconColor = color;
    },
    [SET_HEAD_STYLE](state: any, styleObject: Object) {
      setStyle(state, styleObject, "head");
    },
    [SET_MENU_STYLE](state: any, styleObject: Object) {
      setStyle(state, styleObject, "menu");
    },
  },
  getters: {},
  actions: {},
};

export default menu;
