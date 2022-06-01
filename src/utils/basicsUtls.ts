import { ElMessage } from 'element-plus';

export default function basicsUtil() {
  /**
   * 封装的elemen消息提示器
   * @param msg 需要显示的错误提示信息
   * @param msgType 错误类型'success' | 'warning' | 'info' | 'error'
   */
  const msgOpen = (msg: string, msgType: any) => {
    ElMessage({
      message: msg,
      type: msgType
    });
  };
  return {
    msgOpen
  };
}
