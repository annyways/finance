import * as types from "./types.js"

export default {
  recordUser(state,msg){
    state.usermsg = msg
  },
  [types.LOGIN]: (state, data) => {
    localStorage.token = data
    state.token = data
  },
  [types.LOGOUT]: (state, data) => {
    localStorage.removeItem("token")
    state.token = null
  },
  [types.HEADTITLE]: (state, data) => {
    state.headtitle = data
  }
}
