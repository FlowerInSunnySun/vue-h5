import request from '@/utils/ajax'
// 获取所有产品类型
export const getProdtypes = (params = {}) => {
  return request({
    url: 'prodtypes',
    method: 'get',
    // headers: {
    //   'Content-Type': 'application/json;charset=UTF-8'
    // },
    params
  })
}
// 根据产品类型Id获取所有的产品
export const getProds = (params = {}) => {
  return request({
    url: 'prods',
    method: 'get',
    // headers: {
    //   'Content-Type': 'application/json;charset=UTF-8'
    // },
    params
  })
}
