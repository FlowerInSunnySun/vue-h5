<template>
  <div class="tab_class">
    <div class="tal_class_searchBox">
      <van-search placeholder="点击前往搜索" />
      <div class="tal_class_searchMask"></div>
    </div>
    <div class="class_tree clearfix">
      <ul class="class_tree_nav">
        <li class="active_nav">
          家电
        </li>
        <li>
          生活用品
        </li>
      </ul>
      <div class="class_tree_content">
        <!-- <div class="class_tree_all">
                <span>全部
                  <i class="van-icon van-icon-arrow"></i>
                </span>
              </div> -->
        <div class="class_tree_items_wrap clearfix">
          <div @click="$router.push({path: '/detail'})">
            <div class="class_tree_item_img">
              <!-- <img :src="item.pic_url" :alt="item.name"> -->
              <img :src="imageURL">
            </div>
            <div class="class_tree_item_name">小家电xx</div>
          </div>

          <div>
            <div class="class_tree_item_img">
              <!-- <img :src="item.pic_url" :alt="item.name"> -->
              <img :src="imageURL">
            </div>
            <div class="class_tree_item_name">小家电xx</div>
          </div>
          <div>
            <div class="class_tree_item_img">
              <!-- <img :src="item.pic_url" :alt="item.name"> -->
              <img :src="imageURL">
            </div>
            <div class="class_tree_item_name">小家电xx</div>
          </div>

          <div>
            <div class="class_tree_item_img">
              <!-- <img :src="item.pic_url" :alt="item.name"> -->
              <img :src="imageURL">
            </div>
            <div class="class_tree_item_name">小家电xx</div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>
<script>
import goodImg from '@/assets/images/good.jpg'
export default {
  data () {
    return {
      imageURL: goodImg,
      activeKey: 0
    }
  },
  methods: {
    onChange (key) {
      this.activeKey = key
    }
  }
}
</script>
<style lang="less" scoped>
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
  >li {
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
    >div {
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
