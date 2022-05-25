module.exports = {
  printWidth: 100, //换行长度
  tabWidth: 2, //缩进大小
  useTabs: false, //使用table缩进
  semi: true, // 句尾添加分号
  vueIndentScriptAndStyle: true,
  singleQuote: true, // 全局使用单引号
  bracketSpacing: true, // 对象{}与文本之间添加空格
  trailingComma: 'none', // 在对象或数组最后一个元素后面是否加逗号
  jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
  jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
  arrowParens: 'always', //箭头函数参数括号配置
  quoteProps: 'as-needed', // 是否保留用户输入情况
  insertPragma: false, // 是否需要在文件开头插入@prettier
  requirePragma: false, // 是否需要在文件开头插入@prettier
  proseWrap: 'never', // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'auto', // 结尾是 \n \r \n\r auto
  eslintIntegration: false, //不让prettier使用eslint的代码格式进行校验
  ignorePath: '.prettierignore', //部分不需要prettier格式化的文件放在.prettierignore文件中
  requireConfig: false, // 需要prettierconfig来格式化prettier
  stylelintIntegration: false, //不让prettier使用stylelint的代码格式进行校验
  tslintIntegration: false // 不让prettier使用tslint的代码格式进行校验
};
