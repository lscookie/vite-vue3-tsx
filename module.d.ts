declare module '*.module.less' {
  const classess: {
    [key: string]: string;
  };
  export default classess;
}

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const Component: DefineComponent<{}, {}, any>;
  export default Component;
}
