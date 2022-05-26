import { AxiosError, AxiosResponse } from 'axios';
import basicsUtil from 'utils/basicsUtls';
// 信息响应 (100–199)
// 成功响应 (200–299)
// 重定向消息 (300–399)
// 客户端错误响应 (400–499)
// 服务端错误响应 (500–599)

const { msgOpen } = basicsUtil();

export function httpError(err: AxiosError) {
  console.log(err);
  switch (err.response?.status) {
    case 400:
      msgOpen('请求参数有误！请检查参数！(400)', 'error');
      return;
    case 401:
      msgOpen('身份认证失败！请重新登录！(401)', 'error');
      // 身份验证失败时返回首页
      //   window.sessionStorage.clear();
      //   if (window.location.hostname === 'localhost') {
      //     router.push('../#/Login');
      //   } else {
      //     window.location.href = 'http://10.1.80.194:8008/#/404';
      //   }
      return;
    case 403:
      msgOpen('当前用户权限不够！请更换用户！(403)', 'error');
      return;
    case 404:
      msgOpen('服务器上未找到资源！请联系管理员！(404)', 'error');
      return;
    case 405:
      msgOpen('服务器禁止操作该资源！(405)', 'error');
      return;
    case 415:
      msgOpen('接口请求类型错误！(415)', 'error');
      return;
    case 429:
      msgOpen('请求太过频繁！(429)', 'error');
      return;
    case 500:
      msgOpen('服务器错误！请联系管理员(500)', 'error');
      return;
    case 0:
      msgOpen('请求超时!请稍后重试！', 'error');
      return;
    default:
      msgOpen('好像碰到一个未知错误！', 'error');
  }
}

// 验证接口返回参数是否符合自定义要求
export function validateRequest(response: AxiosResponse): boolean {
  if (response.status === 200) {
    // 自定义的一些其它逻辑,验证不通过时显示错误信息，返回false
    return false;
  }
  return false;
}
