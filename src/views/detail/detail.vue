<template>
  <div class="detail">
    <!-- <van-nav-bar title="6月份热销活动" /> -->
  <van-nav-bar title="6月份热销活动" left-text="返回" left-arrow @click-left="onClickLeft"  />
    <div class="description">
      大礼包/产品介绍（description)
    </div>
    <div>
      <van-image width="100%" height="auto" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </div>
    <van-submit-bar :price="3050" button-text="下单" @submit="onSubmit" />
  </div>
</template>

<script>
export default {
  created () {
    console.log('我是参数: ', this.$route.params.id)
  },
  methods: {
    onClickLeft () {
      console.log('返回:')
      this.$router.push({ path: '/list' })
    },
    onSubmit () {
      console.log('下单:')
    }

  }
}
</script>

<style lang="less" scoped>
.detail {
  min-height: 100%;
  background: #fff;
}

.description {
  padding: 20px;
  text-align: left;
}
</style>
