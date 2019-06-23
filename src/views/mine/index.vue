<template>
  <div>
    <!-- <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png"> -->
    <van-row class="user-header">
      <van-col span="8">
        <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
      </van-col>
      <van-col span="16">
        <p class="user-header-item">
          <van-icon name="manager-o" />昵称xxxx</p>
        <p class="user-header-item">
          <van-icon name="diamond-o" />代理会员</p>
        <p class="user-header-item">
          <van-icon name="phone-o" />13800138000</p>
      </van-col>
    </van-row>

    <van-row class="user-links">
      <van-col span="12">
        <van-icon name="points" />积分
        <span class="user-link-item">100</span>
      </van-col>
      <van-col span="12">
        <van-icon name="balance-o" /> 分红
        <span class="user-link-item">600</span>
      </van-col>
    </van-row>

    <van-cell-group class="user-group cell-line">
      <van-cell icon="records" title="我的订单" is-link />
    </van-cell-group>

    <van-cell-group class="cell-line">
      <van-cell icon="friends-o" title="我的团队" is-link />
      <van-cell icon="refund-o" title="提现" is-link />
      <van-cell icon="location-o" title="我的地址" is-link />
      <van-cell icon="award-o" title="关于我们" is-link />
      <van-cell icon="comment-o" title="联系客服" is-link />
    </van-cell-group>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
.user {
  &-header {
    padding: 30px;
  }
  &-header-item {
    text-align: left;
    font-size: 28px;
    line-height: 60px;
    .van-icon {
      padding-right: 10px;
    }
  }

  &-poster {
    width: 85%;
    height: 200px;
    display: block;
  }

  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 28px;
    text-align: center;
    background-color: #fff;
    color: @red;
    .van-col {
      text-align: left;
      padding-left: 30px;
    }
    .van-icon {
      font-size: 32px;
      padding-right: 10px;
    }
    .user-link-item {
      padding-left: 30px;
    }
  }
}

.cell-line {
  text-align: left;
}
</style>
