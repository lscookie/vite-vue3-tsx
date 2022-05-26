import App from './App';
import store from './store';
import router from './router';
import { createApp } from 'vue';
import 'element-plus/dist/index.css';
import 'assets/base.css';
import ElementPlus, { useGlobalConfig } from 'element-plus';
import Layout from '@/components/layout.vue';
import 'animate.css';
import locale from 'element-plus/es/locale/lang/zh-cn';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);
app.component('Layout', Layout);
app.use(ElementPlus, { locale });
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(store);
app.use(router);
app.mount('#app');
// app.config.globalProperties.$baseConfig = '';
