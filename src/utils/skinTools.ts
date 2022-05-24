function setStyle(element: any, styleList: any, type: string) {
  Object.keys(styleList).forEach((item: string) => {
    element.style.setProperty(item, styleList[item]);
  });
}

// 捕获文字颜色修改，更新相关图片
// function watchTextColor (styleName:string, value:string , type:string) {
//   let store = useStore()
//   switch(type) {
//     case 'head': styleName === '--head-text-color' ? store.commit('SET_HEAD_ICON_COLOR', value) : null;return;
//   }
// }

/***
 * className: assets/base.css中的class
 * styleList: 一个对象，由css变量作为key,value是样式值，{xxxx: 'xxx'}
 */
export function updateStyle(className: string, styleList: any) {
  let dom: any = document.getElementsByClassName(className);
  let length = dom.length;
  for (let i = 0; i < length; i++) {
    setStyle(dom[i], styleList, "head");
  }
}

/**
 * 获取系统中现已经生效的css样式
 * @param className 类名，用来区分root,头部，和内容
 * @param styleName  css变量名
 * @returns
 */
export function getStyleByClassName(className: string, styleName: string) {
  let dom: any = document.getElementsByClassName(className)[0];
  console.log(formatStyleName(styleName));
  return getComputedStyle(dom).getPropertyValue(formatStyleName(styleName));
}

// 格式化class名称
export function formatStyleName(name: string) {
  let reg = /[A-Z]/g;
  return `--${name.replace(
    reg,
    (str: string) => `-${str.toLocaleLowerCase()}`
  )}`;
}
