declare module '*.module.less' {
  const classess: {
    [key: string]: string;
  };
  export default classess;
}

declare module '*.vue' {
  import { ComponentOptions } from 'vue';
  const Component: ComponentOptions;
  export default Component;
}
