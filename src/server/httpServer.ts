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
  return http.post(serverUrl + '/user/login', formData, {}, true);
}

export function errTest(): any {
  return http.post(serverUrl + '/user/errtest', {}, {}, true);
}

// 表单数据获取
export function formItemGetData(url: string, params: any): any {
  return http.get(url, params);
}

// 表格数据获取
export function tableGetData(url: string, params: any): any {
  return http.get(url, params);
}

export function getAllUser(): any {
  return http.get(serverUrl + '/user/list', {});
}

export function formUpdate(formData: Record<string, unknown>, success?: string, err?: any): any {
  return http.post(serverUrl + '/user/testform', formData);
}
