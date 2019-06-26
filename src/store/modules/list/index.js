import { getProdtypes, getProds } from './services'
// import { getImgUrl } from '@/utils/assist'
const goodLists = {
  namespaced: true,
  state: {
    loading: false,
    list: [], // 产品列表
    types: [] // 产品类型
  },

  mutations: {
    saveList: (state, payload = {}) => {
      const { data } = payload
      let list = data.result || []
      // list = list.map(item => {
      //   item.imageURL = getImgUrl(item.image)
      //   return item
      // })
      state.list = list
    },

    saveType: (state, payload = {}) => {
      const { result } = payload
      state.types = result
    },

    saveLoading: (state, payload) => {
      state.loading = payload
    }
  },
  actions: {
    // 获取左边产品类型
    async fetchTypes ({ commit }, { payload, callback } = {}) {
      try {
        const { data } = await getProdtypes()
        commit('saveType', {
          result: data.result || []
        })
        callback && callback(null, data)
      } catch (error) {
        callback && callback({ msg: '请求出错' })
      }
    },

    // 根据左边产品类型获取产品列表
    async fetchProds ({ commit }, { payload, callback } = {}) {
      try {
        const { data } = await getProds(payload)
        console.log('右边列表数据===', data)
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

export default goodLists
