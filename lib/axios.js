import axios from "axios";
import qs from "qs";
let cancel = "";
let requestConfig = {
  production: "http://127.0.0.1:7001/",
  development: "http://127.0.0.1:7001/",
  timeout: 1000
};
// // 环境的切换
// if (process.env.NODE_ENV == "development") {
//   axios.defaults.baseURL = requestConfig.development;
// } else if (process.env.NODE_ENV == "production") {
//   axios.defaults.baseURL = requestConfig.production;
// }
axios.defaults.baseURL = requestConfig[process.env.NODE_ENV];
// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 每次请求之前拦截加上token
    const token = sessionStorage.token;
    token && (config.headers["X-CSRF-TOKEN"] = token);
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    // 对响应错误做点什么
    // 这里可以指定判断错误码来提示或者重定向
    console.log("error", error);

    // eslint-disable-next-line no-empty
    if (error) {
    }
    return Promise.reject(error);
  }
);

const handelData = (options, data) => {
  let httpDefaultOpts = {
    timeout: requestConfig.timeout,
    method: options.method,
    url: options.url,
    responseType: "json",
    withCredentials: true, // 表示跨域请求时是否需要使用凭证
    arrayFormat: options.arrayFormat, //有三个参数 'indices' id[0]=b&id[1]=c  'brackets' 'id[]=b&id[]=c' 'repeat' 'id=b&id=c'
    data,
    header: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    cancelToken: new axios.CancelToken(c => {
      cancel = c; // 记录当前请求的取消方法
    })
  };
  httpDefaultOpts.data =
    httpDefaultOpts.method === "post" ? qs.stringify(httpDefaultOpts.data) : "";
  return new Promise((resolve, reject) => {
    axios(httpDefaultOpts)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default handelData;
