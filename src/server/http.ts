import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElLoading } from 'element-plus';
import { httpError, validateRequest } from './httpError';
import router from '../router';
import basicsUtil from '@/utils/basicsUtls';

axios.defaults.timeout = 2000; //超时时间

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

const httpAxios = axios.create({});
const { msgOpen } = basicsUtil();
let loading: any;
let startloadingTime = 0;

const startLoading = () => {
  if (startloadingTime === 0) {
    startloadingTime = Date.now();
  }
  const options = {
    target: '.dashboard-main',
    lock: true,
    text: '数据加载中...',
    background: 'rgba(0,0,0,0.3)'
  };
  loading = ElLoading.service(options);
};

const endLoading = async () => {
  if (Date.now() - startloadingTime < 150) {
    setTimeout(() => {
      if (loading) {
        loading.close();
        loading = null;
      }
    }, 500);
  } else {
    if (loading) {
      loading.close();
      loading = null;
    }
  }
  startloadingTime = 0;
};

// 请求拦截
httpAxios.interceptors.request.use((config: any) => {
  if (window.sessionStorage.getItem('tokenInfo')) {
    const token = window.sessionStorage.getItem('tokenInfo');
    if (token) {
      // let userToken = JSON.parse(token);
      // config.headers['Authorization'] = `${userToken.token_type} ${userToken.access_token}`;
    }
  } else {
    // router.push('/')
    // console.log('token is invalid')
  }
  // 添加超时配置
  if (!config.hasOwnProperty('retryCount')) {
    config.retryCount = 0;
  }
  config = Object.assign(config, {
    retryAllCount: 2
  });
  return config;
});

/**
 * 响应拦截器
 * 在这里检查接口返回状态码的问题
 */
httpAxios.interceptors.response.use(
  (response: AxiosResponse) => {
    validateRequest(response);
    return response;
  },
  async (err: AxiosError) => {
    // 处理超时
    if (err.code === 'ECONNABORTED' || err.message.includes('timeout')) {
      return Promise.resolve(await retryFun(err));
    } else {
      httpError(err);
      return Promise.reject(err);
    }
  }
);

function retryFun(err: any) {
  const config = Object.assign({}, err.config);
  if (config.retryCount < config.retryAllCount) {
    config.retryCount++;
    // 重发请求
    return httpAxios(config);
  } else {
    msgOpen('请求超时!请稍后重试！', 'error');
    return Promise.reject(err);
  }
}

// get
export function get(url: any, params: any, headers = {}, loading: any = false) {
  return new Promise(async (resolve, reject) => {
    // body下的loding不合理，待改进
    if (loading) {
      startLoading();
    }
    await httpAxios({
      method: 'GET',
      url: url,
      params: params,
      headers: headers
    })
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data);
        } else {
          reject();
        }
      })
      .catch((err) => {
        reject(err);
      });
    endLoading();
  });
}

// post
export function post(url: any, params: any, headers = {}, loading: any = false) {
  return new Promise(async (resolve, reject) => {
    if (loading) {
      startLoading();
    }
    await httpAxios({
      method: 'POST',
      url: url,
      data: params,
      headers: headers
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
    endLoading();
  });
}

export function download(url: any, params: any, headers = {}, notToken: any) {
  return new Promise(async (resolve, reject) => {
    startLoading();
    await httpAxios({
      method: 'GET',
      url: url,
      params: params,
      headers: headers,
      responseType: 'arraybuffer'
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
    endLoading();
  });
}
