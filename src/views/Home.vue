<template>
  <div class="home">
    <van-nav-bar :title="giftbagTitle"/>
    <van-pull-refresh class="refresh-box" v-model="isLoading" @refresh="onRefresh">
      <div slot="default">
        <van-card
          v-for="( item, key ) in giftbagData"
          :key="key"
          :title="item.title"
          :price="item.price"
          :origin-price="item.originalPrice"
          :desc="item.name"
          :thumb="item.imageURL"
          thumb-link="http://baidu.com"
        >
          <!-- <div slot="tag" >
        <van-tag mark type="danger">
          热卖
        </van-tag>
          </div>-->

          <van-row slot="title" gutter="20" v-if="item.status==='售罄' || item.status==='售完'">
            <van-col span="18">{{item.title}}</van-col>
            <van-col span="6">
              <van-button size="mini" type="warning" class="van-tag disabled-btn">售完</van-button>
            </van-col>
          </van-row>

          <div slot="num">
            <van-button size="small" type="warning">加入购物车</van-button>
          </div>
        </van-card>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  components: {
  },
  name: 'home',
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapState('home', {
      giftbagData (state) {
        let list = state.list
        return list
      },
      giftbagTitle (state) {
        return state.title
      },
      loading: state => state.loading
    })
  },
  created () {
    this.getData()
  },
  methods: {
    ...mapActions('home', ['fetchList', 'changeLoading']),
    async getData () { // 查询
      this.changeLoading({ payload: true })
      await this.fetchList()
      this.changeLoading({ payload: false })
    },
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.getData()
      }, 500)
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  height: calc(100vh - 50px);
  .refresh-box {
    height: calc(100vh - 106px);
    ::v-deep {
      .van-pull-refresh__track {
        height: calc(100vh - 106px);
      }
    }
  }
}
.van-card__content {
  text-align: left;
}

.disabled-btn {
  border-radius: 10em;
  background-color: #aaa;
  border: 0;
}
</style>
