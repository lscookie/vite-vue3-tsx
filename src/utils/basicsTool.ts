// 防抖函数
export function shake(fun: any, time: number): any {
  let startTime: NodeJS.Timeout | null = null;
  return (...args: any) => {
    if (startTime) {
      clearTimeout(startTime);
    }
    startTime = setTimeout(() => {
      startTime = null;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return fun.apply(this, args);
    }, time);
  };
}

// 节流函数
export function throttle(fun: any, time: number): any {
  let startTime = 0;
  return (...args: any) => {
    if (Date.now() - startTime > time) {
      startTime = Date.now();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return fun.apply(this, args);
    }
  };
}
