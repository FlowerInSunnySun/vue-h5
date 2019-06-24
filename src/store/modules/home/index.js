import { getGiftBags } from './services'
import { getImgUrl } from '@/utils/assist'
const giftbagLists = {
  namespaced: true,
  state: {
    loading: false,
    list: [],
    title: ''
  },

  mutations: {
    saveList: (state, payload = {}) => {
      const { data } = payload
      let list = data.result || []
      list = list.map(item => {
        item.imageURL = getImgUrl(item.image)
        return item
      })
      state.list = list
      state.title = data.title || ''
    },
    saveLoading: (state, payload) => {
      state.loading = payload
    }
  },
  actions: {
    async fetchList ({ commit }, { payload, callback } = {}) {
      try {
        const { data } = await getGiftBags()
        commit('saveList', {
          data
        })
        callback && callback(null, data)
      } catch (error) {
        callback && callback({ msg: '请求出错' })
      }
    },
    async changeLoading ({ commit }, { payload, callback } = {}) {
      const loading = !!payload
      commit('saveLoading', loading)
      callback && callback(null)
    }
  }
}

export default giftbagLists
