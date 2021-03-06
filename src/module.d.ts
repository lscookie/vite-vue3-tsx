declare module '*.module.less' {
  const classess: {
    [key: string]: string;
  };
  export default classess;
}

declare module 'colorpicker-v3' {
  import ColorpickerV3 from 'colorpicker-v3';
  const colorpickerV3: ColorpickerV3;
  export default colorpickerV3;
}
declare module '*.vue' {
  import { ComponentOptions } from 'vue';
  const Component: ComponentOptions;
  export default Component;
}
