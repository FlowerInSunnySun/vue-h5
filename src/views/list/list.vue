<template>
  <div class="tab_class list">
    <!-- <div class="tal_class_searchBox">
      <van-search placeholder="点击前往搜索"/>
      <div class="tal_class_searchMask"></div>
    </div>-->
    <div class="class_tree clearfix">
      <ul class="class_tree_nav">
        <li :class="activeNav === item.id ? 'active_nav' : ''" v-for="item in typeData" :key="item.id" @click="navClick(item.id)">{{item.name}}</li>
      </ul>
      <div class="class_tree_content">
        <div class="class_tree_items_wrap clearfix">
          <van-pull-refresh class="refresh-box" v-model="isLoading" @refresh="onRefresh">
            <div class="good-item" @click="$router.push({path: '/detail'})">
              <div class="class_tree_item_img">
                <!-- <img :src="item.pic_url" :alt="item.name"> -->
                <img :src="imageURL">
              </div>
              <div class="class_tree_item_name">小家电xx</div>
            </div>

            <div class="good-item">
              <div class="class_tree_item_img">
                <!-- <img :src="item.pic_url" :alt="item.name"> -->
                <img :src="imageURL">
              </div>
              <div class="class_tree_item_name">小家电xx</div>
            </div>
          </van-pull-refresh>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import goodImg from '@/assets/images/good.jpg'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
  },
  name: 'list',
  data () {
    return {
      activeNav: null,
      isLoading: false,
      imageURL: goodImg
    }
  },
  computed: {
    ...mapState('list', {
      goodList (state) {
        let list = state.list
        return list
      },
      typeData (state) {
        let types = state.types
        console.log('2222左边菜单数据===', types)
        return types
      },
      loading: state => state.loading
    })
  },
  created () {
    this.getData()
  },
  methods: {
    ...mapActions('list', ['fetchTypes', 'fetchProds', 'changeLoading']),
    // 获取左边类型数据
    async getData () {
      this.changeLoading({ payload: true })
      await this.fetchTypes()
      this.navClick(this.typeData[0].id)
      this.changeLoading({ payload: false })
    },

    // 根据左边产品类型获取产品列表
    async getProds (id) {
      this.changeLoading({ payload: true })
      await this.fetchProds({ typeId: id })
      this.changeLoading({ payload: false })
    },

    navClick (id) {
      this.activeNav = id
      this.getProds(id)
    },

    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.getProds(this.activeNav)
      }, 500)
    }
  }
}
</script>
<style lang="less" scoped>
.list {
  height: calc(100vh - 50px);
  .refresh-box {
    height: calc(100vh - 50px);
    ::v-deep {
      .van-pull-refresh__track {
        height: calc(100vh - 50px);
      }
    }
  }
}

.tab_class {
  overflow: hidden;
  background-color: #fff;
  min-height: 100%;
}

.tal_class_searchBox {
  position: relative;
}

.tal_class_searchMask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
}

.class_tree {
  position: relative;
  top: 30px;
  background-color: #fff;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 100%;
  box-sizing: border-box;
}

.class_tree_nav {
  float: left;
  width: 200px;
  height: 100%;
  background-color: #f8f8f8;
  overflow: scroll;
  > li {
    @include one-border;
    height: 80px;
    line-height: 80px;
    text-align: center;
    border-left: 2px solid @bg-color;
    &.active_nav {
      background-color: #fff;
      border-left: 2px solid @red;
      color: @red;
    }
  } // li.active_nav {
  //   background-color: #fff;
  //   border-left: 2px solid @red;
  //   color: @red;
  // }
}

.class_tree_content {
  margin-left: 200px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  .class_tree_all {
    text-align: right;
    padding-right: 10px;
    height: 80px;
    line-height: 80px;
    color: @font-color-gray;
    font-size: @font-size-small;
  }
  .van-icon-arrow {
    font-size: @font-size-small;
  }
  .class_tree_items_wrap {
    padding: 10px 20px;
    margin-right: -3%;
    text-align: center;
    .good-item {
      float: left;
      padding-right: 3%;
      box-sizing: border-box;
      width: 50%;
      margin-bottom: 20px;
    }
    img {
      max-width: 100%;
    }

    .class_tree_item_img {
      display: inline-block;
      max-width: 100%;
      width: 70px;
      height: 70px;
    }
    .class_tree_item_name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
