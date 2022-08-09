import {
  createRouter,
  RouteRecordRaw,
  NavigationGuardNext,
  createWebHashHistory,
  RouteLocationNormalized
} from 'vue-router';
import store from '@/store';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      type: 'login'
    },
    component: () => import('@/views/login/login')
  },
  {
    path: '/main',
    name: 'main',
    meta: {
      type: 'main'
    },
    component: () => import('@/views/dashboard/dashboard'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          type: 'home',
          transition: 'animate__backInRight'
        },
        component: () => import('@/views/home/home.vue')
      },
      {
        path: '/home1',
        name: 'Home1',
        meta: {
          type: 'home1',
          transition: 'animate__backInLeft'
        },
        component: () => import('@/views/home/home1.vue')
      },
      {
        path: '/home2',
        name: 'Home2',
        meta: {
          type: 'home2',
          transition: 'animate__backInUp'
        },
        component: () => import('@/views/home/home2.vue')
      },
      {
        path: '/formControlInfo',
        name: 'FormControlInfo',
        meta: {
          type: 'formControlInfo',
          transition: 'animate__backInUp'
        },
        component: () => import('@/views/control/form/index.vue')
      },
      {
        path: '/baseButton',
        name: 'BaseButton',
        meta: {
          type: 'baseButton',
          transition: 'animate__backInUp'
        },
        component: () => import('@/components/button/buttondemo.vue')
      }
    ]
  },
  {
    path: '/error',
    name: 'error',
    meta: {
      type: 'error'
    },
    component: () => import('@/views/error/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/error'
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    store.commit('SET_ROUTER_CHANGE', to.path);
    // if (to.meta.type === 'login') {
    //   next({ name: 'home' });
    //   return;
    // }

    // if (to.meta.type === 'home') {
    //   next({ name: 'login' });
    //   return;
    // }
    next();
  }
);

export default router;
