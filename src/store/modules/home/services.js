import request from '@/utils/ajax'

export const getGiftBags = (params = {}) => {
  return request({
    url: 'index/giftbags',
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params
  })
}
