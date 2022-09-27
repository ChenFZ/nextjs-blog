
import getConfig from 'next/config'
import QS from 'qs'
const { publicRuntimeConfig } = getConfig()
let baseUrl = 'http://localhost:8087/api/'

// if (typeof window == 'undefined') {
//      baseUrl = publicRuntimeConfig.baseUrl
// }

export function $fetch (method, url, body) {
  method = method.toUpperCase();
  if (method === 'GET') {
    // fetch的GET不允许有body，参数只能放在url中
    body = undefined;
  } else {
    body = body && QS.stringify(body);
  }
  console.log(baseUrl + url)
  return fetch(baseUrl + url, {
    method,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-credentials': 'true', // 每次携带cookie 必须加,不然不会携带
      'Authorization': 'token' // 从localStorageStorage中获取access token
    },
    body,
  }, { credentials: 'include' }).then((res) => res.json()).then((data) => {
    if (data.code == '00001') { //token失效

    } else if (data.data ? data.data.token : "") { // 判断token是否存在，如果存在说明需要更新token
      // app.$cookies.set('USERINFO',JSON.stringify(res.data.data))
    } else if (data.code != '00000') {
      console.log(data.msg, 1);//后端错误弹出
    }
    return data
  })

}