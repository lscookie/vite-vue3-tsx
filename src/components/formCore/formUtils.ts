import { formItemGetData } from '@/server/httpServer';

/**
 * 验证非空
 * @param str  需要检验的值
 * @returns true非空/false空 检验结果
 */
const validatevoid = (str: string): boolean => {
  if (str && str.trim().length > 0) {
    return true;
  }
  return false;
};
/**
 * 验证是否是可执行函数
 * @param Obj 需要检验的对象
 * @returns true可执行函数/false非可执行函数 检验结果
 */
const validateFunction = (Obj: any): boolean => {
  if (Obj && typeof Obj === 'function') {
    return true;
  }
  return false;
};

/**
 * 获取表单项需要的数据
 */
const getFormItemData = (item: any, httpData: any) => {
  return new Promise(async (resolve, reject) => {
    if (item.formItemMeta.hasOwnProperty('network')) {
      if (validatevoid(item.formItemMeta.network?.url)) {
        // let method = validatevoid(item.formItemMeta.network?.method)
        //   ? item.formItemMeta.network.method
        //   : 'get';
        const params = validatevoid(item.formItemMeta.network?.params)
          ? item.formItemMeta.network.params
          : {};
        await formItemGetData(item.formItemMeta.network.url, params).then((res: any) => {
          // 是否需要格式化返回数据
          if (validateFunction(item.formItemMeta.network?.formatData)) {
            item.formItemMeta.network.formatData(res);
          }
          httpData.value = res;
        });
      }
    }
    resolve('');
  });
};

export { validatevoid, validateFunction, getFormItemData };
