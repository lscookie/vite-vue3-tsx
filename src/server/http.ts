import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElLoading, ElMessage } from 'element-plus';

import router from '../router';

axios.defaults.timeout = 30000; //超时时间

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

let loading: any;
let startloadingTime: number = 0;

const startLoading = () => {
  if (startloadingTime === 0) {
    startloadingTime = Date.now();
  }
  const options = {
    lock: true,
    text: '加载中...',
    background: 'rgba(0,0,0,0.7)'
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

const httpAxios = axios.create({});

// 请求拦截
httpAxios.interceptors.request.use((config: AxiosRequestConfig) => {
  if (window.sessionStorage.getItem('tokenInfo')) {
    let token = window.sessionStorage.getItem('tokenInfo');
    if (token) {
      // let userToken = JSON.parse(token);
      // config.headers['Authorization'] = `${userToken.token_type} ${userToken.access_token}`;
    }
  } else {
    // router.push('/')
    // console.log('token is invalid')
  }
  return config;
});

//  响应拦截
httpAxios.interceptors.response.use(
  (response: AxiosResponse) => {
    // success response
    return response;
  },
  (err) => {
    console.log(err);
    // if (err.response.status === 401) {
    //   window.sessionStorage.clear();
    //   if (window.location.hostname === 'localhost') {
    //     router.push('../#/Login');
    //   } else {
    //     window.location.href = 'http://10.1.80.194:8008/#/404';
    //   }
    //   endLoading();
    // }
    return Promise.reject(err);
  }
);

// get
export function get(url: any, params: any, headers = {}, loading: any = false) {
  return new Promise((resolve, reject) => {
    // body下的loding不合理，待改进
    if (loading) {
      startLoading();
    }
    httpAxios({
      method: 'GET',
      url: url,
      params: params,
      headers: headers
    })
      .then((res) => {
        endLoading();
        if (res.status === 200) {
          resolve(res.data);
        } else {
          reject();
        }
      })
      .catch((err) => {
        // reject(err);
        endLoading();
      });
  });
}

// post
export function post(url: any, params: any, headers = {}, loading: any = false) {
  return new Promise((resolve, reject) => {
    if (loading) {
      startLoading();
    }
    httpAxios({
      method: 'POST',
      url: url,
      data: params,
      headers: headers
    })
      .then((res) => {
        endLoading();
        if (res.status === 200) {
          resolve(res.data);
        } else {
          reject();
        }
      })
      .catch((err) => {
        reject(err);
        endLoading();
      });
  });
}

export function download(url: any, params: any, headers = {}, notToken: any) {
  return new Promise((resolve, reject) => {
    startLoading();
    httpAxios({
      method: 'GET',
      url: url,
      params: params,
      headers: headers,
      responseType: 'arraybuffer'
    })
      .then((res) => {
        resolve(res);
        endLoading();
      })
      .catch((err) => {
        ElMessage.error('Network Error!!!');
        reject(err);
      });
  });
}
