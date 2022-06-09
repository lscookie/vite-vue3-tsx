module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser', // 采用 typescript-eslint 作为语法解析器
    ecmaVersion: 2017, // 指定ECMAScript支持的版本，6为ES6
    sourceType: 'module', // 指定来源的类型，有两种script或module
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // 扩展使用 typescript 检查规则
    'plugin:vue/vue3-recommended', // 扩展使用 vue3的规范
    'plugin:prettier/recommended' // 使用prettier接管eslint的规范
    // 'airbnb' // 使用airbnb标准，有点小问题这里先不启用
  ],
  rules: {
    'no-empty-function': 'off',
    // 关闭函数返回值声明限制
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 关闭any检测，太残暴了这个
    '@typescript-eslint/no-explicit-any': ['off'],
    'vue/require-default-prop': 'off' // 修改@vue/compiler-sfc中的默认配置
  }
};
