import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// element-pluse组件和样式按需导入
// import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    plugins: [vue(), vueJsx()],
    base: mode === 'development' ? '/' : './',
    server: {
      host: 'localhost',
      port: 4200,
      // 设置代理
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    // 配置css模块化，以module结尾的样式文件，解决css全局污染等问题
    css: {
      modules: {
        generateScopedName: '[name]_[local]_[hash:base64:5]',
        hashPrefix: 'prefix'
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        views: resolve(__dirname, './src/views'),
        assets: resolve(__dirname, './src/assets'),
        utils: resolve(__dirname, './src/utils')
      }
    }
  });
