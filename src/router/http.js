import axios from "axios"
import store from "./store/index.js"
import * as types from "./store/types"
import router from "./router"

axios.default.timeout = 5000
axios.default.baseURL = "https://api.github.com"

axios.interceptors.request.use(
  config => {
    if(store.state.token) {
      config.headers.Authorization = 'token ${store.state.token}'
    }
    return config
  },
  err => {
    reject(err)
  }
)

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if(error.response) {
      switch (error.response.status) {
        case 401:
          store.commit(types.LOGOUT)

          router.currentRouter.path !== 'login' &&
            router.replace({
              path: 'login',
              query: {redirect: router.currentRouter.path}
            })
      }
    }
    return Promise.reject(error.response.data)
  }
)
export default axios
