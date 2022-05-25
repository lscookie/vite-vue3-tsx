function setStyle(element: any, styleList: any) {
  Object.keys(styleList).forEach((item: string) => {
    element.style.setProperty(item, styleList[item]);
  });
}

/***
 * className: assets/base.css中的class
 * styleList: 一个对象，由css变量作为key,value是样式值，{xxxx: 'xxx'}
 */
export function updateStyle(className: string, styleList: Record<string, unknown>): void {
  const dom: any = document.getElementsByClassName(className);
  const length = dom.length;
  for (let i = 0; i < length; i++) {
    setStyle(dom[i], styleList);
  }
}

/**
 * 获取系统中现已经生效的css样式
 * @param className 类名，用来区分root,头部，和内容
 * @param styleName  css变量名
 * @returns
 */
export function getStyleByClassName(className: string, styleName: string): string {
  const dom: any = document.getElementsByClassName(className)[0];
  return getComputedStyle(dom).getPropertyValue(formatStyleName(styleName));
}

// 格式化class名称
export function formatStyleName(name: string): string {
  const reg = /[A-Z]/g;
  return `--${name.replace(reg, (str: string) => `-${str.toLocaleLowerCase()}`)}`;
}
