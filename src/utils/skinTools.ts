function setStyle(element: any, styleList: any) {
  Object.keys(styleList).forEach((item: string) => {
    console.log(item);
    element.style.setProperty(item, styleList[item]);
  });
}
/***
 * className: assets/base.css中的class
 * styleList: 一个对象，由css变量作为key,value是样式值，{xxxx: 'xxx'}
 */

export function updateStyle(className: string, styleList: any) {
  let dom: any = document.getElementsByClassName(className);
  console.log(styleList);
  let length = dom.length;
  for (let i = 0; i < length; i++) {
    setStyle(dom[i], styleList);
  }
}
