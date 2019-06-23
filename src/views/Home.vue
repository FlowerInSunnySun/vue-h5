<template>
  <div class="home">
    <van-nav-bar title="6月份热销活动" />
    <van-card tag="热卖" price="2.00" desc="描述信息" title="商品标题" :thumb="imageURL" origin-price="10.00" thumb-link="http://baidu.com">
      <div slot="tag">
        <van-tag mark type="danger">
          热卖
        </van-tag>
      </div>
      <van-row slot="title" gutter="20">
        <van-col span="18">自定义商品标题</van-col>
        <van-col span="6">
          <van-button size="mini" type="warning" class="van-tag disabled-btn">
            售完
          </van-button>
        </van-col>
      </van-row>
      <div slot="num">
        <van-button size="small" type="warning">加入购物车</van-button>
      </div>
    </van-card>

    <van-card tag="热卖" price="2.00" desc="描述信息" title="商品标题" :thumb="imageURL" origin-price="10.00" thumb-link="http://baidu.com">
      <van-row slot="title" gutter="20">
        <van-col span="18">自定义商品标题</van-col>
        <van-col span="6">
          <van-button size="mini" type="warning" class="van-tag disabled-btn">
            售完
          </van-button>
        </van-col>
      </van-row>
      <div slot="num">
        <van-button size="small" type="warning">加入购物车</van-button>
      </div>
    </van-card>

  </div>
</template>

<script>
// import { mapState, mapActions } from 'vuex'
// import { formatDate } from '@/utils/assist'
import goodImg from '@/assets/images/good.jpg'
export default {
  components: {
  },
  name: 'home',
  data () {
    return {
      imageURL: goodImg
      // import meOff from '@/assets/images/footerBar/me_off.png'
      // active: 0,
      // now: Date.now(),
      // searchData: {} // 搜索条件
    }
  },
  computed: {
    // ...mapState('mine', {
    //   tableData (state) {
    //     return state.list
    //   },
    //   pagination (state) {
    //     return state.pagination
    //   },
    //   loading: state => state.loading
    // })
  },
  created () {
    // this.initData()
  },
  methods: {

    // ...mapActions('mine', ['fetchList', 'changeLoading']),
    //     initData () {
    //       console.log('now - format: ', formatDate(this.now, 'YYYY-MM'))
    //     },
    //     async getTableData () { // 查询
    //       this.changeLoading({ payload: true })
    //       const params = this.getParams()
    //       console.log('params: ', params)
    //       const postData = {
    //         payload: {
    //           currentPage: 1,
    //           pageSize: 10,
    //           ...params
    //         },
    //         callback (err) {
    //         }
    //       }
    //       await this.fetchList(postData)
    //       this.changeLoading({ payload: false })
    //     },
    //     getParams () { // 获取查询参数
    //       const params = { ...this.searchData }
    //       params.currentPage = this.pagination.currentPage
    //       params.pageSize = this.pagination.pageSize
    //       return params
    //     }

  }
}
</script>
<style lang="less" scoped>
.van-card__content {
  text-align: left;
}

.disabled-btn {
  border-radius: 10em;
  background-color: #aaa;
  border: 0;
}
</style>
