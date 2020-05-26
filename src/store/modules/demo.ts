import { userLogin } from "@/api/demo/user";

const state = {
  token: '',
  headimgurl: ''
}

const getters = {
  getToken(state) {
    return state.token
  },
  getHeadImgUrl(state) {
    return state.headimgurl
  }
}

const mutations = {
  SET_TOKEN: (state, data) => {
    state.token = data
  },
  SET_HEADIMGURL: (state, data) => {
    state.headimgurl = data
  },
}

const actions = {
  login({ commit }, formData) {
    userLogin(formData).then(res => {
      commit('SET_TOKEN', res.data.token)
      commit('SET_HEADIMGURL', res.data.headimgurl)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}
