import { updateStyle, formatStyleName } from '@/utils/skinTools';
import {
  SET_MENU_STAT,
  SET_ROUTER_CHANGE,
  SET_ROUTER_URL,
  SET_HEAD_ICON_COLOR,
  SET_HEAD_STYLE,
  SET_MENU_STYLE,
  SET_MAIN_STYLE
} from './actionType';

const setStyle = (state: any, styleObject: any, type: string) => {
  state[`${type}Style`] = Object.assign(state[`${type}Style`], styleObject);
  const styleData: any = {};
  for (const item in styleObject) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
    routerChange: '',
    // 面包屑路径
    routerList: [],
    // 头部icon颜色
    headIconColor: '',
    // 头部的Style变量合计
    headStyle: {
      headBackgorundColor: '',
      headTextColor: ''
    },
    menuStyle: {
      elMenuBgColor: '',
      elMenuHoverBgColor: '',
      elMenuTextColor: ''
    },
    mainStyle: {
      mainOutBgColor: '',
      mainOutBlockPadding: '',
      mainBlockRadios: ''
    }
  },
  mutations: {
    [SET_MENU_STAT](state: any, collapse: boolean) {
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
    [SET_HEAD_STYLE](state: any, styleObject: any) {
      setStyle(state, styleObject, 'head');
    },
    [SET_MENU_STYLE](state: any, styleObject: any) {
      setStyle(state, styleObject, 'menu');
    },
    [SET_MAIN_STYLE](state: any, styleObject: any) {
      setStyle(state, styleObject, 'main');
    }
  },
  getters: {},
  actions: {}
};

export default menu;
