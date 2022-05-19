import { Module } from 'vuex';
import { SET_MENU_STAT, SET_ROUTER_CHANGE, SET_ROUTER_URL } from './actionType';

const menu = {
  namespace: true,
  state: {
    collapse: false,
    routerChange: '',
    routerList: []
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
    }
  },
  getters: {},
  actions: {
    // [SET_MENU_STAT]({ commit }, collapse: Boolean) {
    //   commit(SET_MENU_STAT, collapse);
    // }
  }
};

export default menu;
