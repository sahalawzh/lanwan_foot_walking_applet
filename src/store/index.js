import Vuex from '@wepy/x'
import wxApi from '../api/wxApi'

export default new Vuex.Store({
  state: {
    currentScanItem: '',
    scanDetail: '',
    currentSkuItem: '',
    currentAddress: ''
  },
  mutations: {
    updateKey (state, {key, val}) {
      state[key] = val
    }
  },
  actions: {
    async getLocalLocation () {
      const res = await wxApi.getLocalLocation()
      return res
    }
  }
})
