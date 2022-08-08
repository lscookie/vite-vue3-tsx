export const disabledDataFormat = (date: Date, formatConfig: any): boolean => {
  let stuas = false;
  switch (formatConfig.fun) {
    case 'max':
      stuas = max(date, formatConfig.params);
      break;
    case 'min':
      stuas = min(date, formatConfig.params);
      break;
  }
  return stuas;
};

// 这里建议时间长度由表单验证来控制
// 日期最大值
export const max = (date: Date, day = 0) => {
  if (new Date(date).getTime() > new Date().getTime() + day * 86400000) {
    return true;
  }
  return false;
};
// 日期最小值
export const min = (date: Date, day = 0) => {
  if (new Date(date).getTime() < new Date().getTime() + day * 86400000) {
    return true;
  }
  return false;
};
