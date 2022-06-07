export interface echartsConfig {
  title: titleConfig | any;
  xAxis?: any;
  yAxis?: any;
  series: Array<any>;
}

export interface titleConfig {
  show?: boolean;
  text?: string;
  link?: string;
  target?: string | 'self' | 'blank';
  textStyle?: textStyleConfig;
  subtext?: string;
  sublink?: string;
  subtarget?: string | 'self' | 'blank';
  subtextStyle?: subTextStyleConfig;
  textAlign?: string | 'auto' | 'left' | 'right' | 'center';
  textVerticalAlign?: string | 'auto' | 'top' | 'bottom' | 'middle';
  triggerEvent?: boolean;
  padding?: number;
  itemGap?: number;
  zlevel?: number;
  z?: number;
  left?: number | string;
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  shadowBlur?: number;
  shadowColor?: string;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
}

export interface textStyleConfig {
  color?: string;
  fontStyle?: string | 'normal' | 'italic' | 'oblique';
  fontWeight?: string | 'normal' | 'bold' | 'bolder' | 'lighter' | number;
  fontFamily?: string;
  fontSize?: number;
  lineHeight?: number;
  width?: number;
  height?: number;
  textBorderColor?: string;
  textBorderWidth?: number;
  textBorderType?: string | 'solid' | 'dashed' | 'dotted';
  textBorderDashOffset?: number;
  textShadowColor?: string;
  textShadowBlur?: number;
  textShadowOffsetX?: number;
  textShadowOffsetY?: number;
  overflow?: string | 'none' | 'truncate' | 'break' | 'breakAll';
  ellipsis?: string;
}

export interface subTextStyleConfig extends textStyleConfig {
  align?: string | 'left' | 'center' | 'right';
  verticalAlign?: string | 'top' | 'middle' | 'bottom';
}

// 标题默认字体样式
export class titleTextStyle implements textStyleConfig {
  color = '#000000';
  fontFamily = '';
  fontWeight = 800;
  fontSize = 20;
  lineHeight = 30;
  height = 30;
  textBorderColor = '#000000';
}

// 标题默认样式
export class titleStyle implements titleConfig {
  show = true;
  text = '标题内容';
  textStyle = new titleTextStyle();
  backgroundColor = '#ffffff';
  //   triggerEvent = boolean;
  //   padding = number;
  //   itemGap = number;
  //   zlevel = number;
  //   z = number;
  //   left = number | string;
  //   top = number | string;
  //   right = number | string;
  //   bottom = number | string;
  //   borderColor = string;
  //   borderWidth = number;
  //   borderRadius = number;
  //   shadowBlur = number;
  //   shadowColor = string;
  //   shadowOffsetX = number;
  //   shadowOffsetY = number;
}
