import { createStore } from 'vuex';
import menu from './menu';

const store = createStore({
  modules: {
    menu: menu
  }
});

export default store;
