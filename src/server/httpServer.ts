// import { throws } from 'assert';
// import { ElMessage } from 'element-plus';
import * as http from './http';

const serverUrl = '/api';

/**
 * 登录接口
 * @param formData 请求参数
 * @param success 成功时的运行函数
 * @param err 失败时的运行函数
 * @returns
 */
export function loading(formData: Record<string, unknown>, success?: string, err?: any): any {
  return http.post(serverUrl + '/user/login', formData);
}

export function formUpdate(formData: Record<string, unknown>, success?: string, err?: any): any {
  return http.post(serverUrl + '/user/testform', formData);
}
