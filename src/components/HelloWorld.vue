<template>
  <div>

  <van-picker :columns="columns" @change="onChange" />

  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
    }
  },
  methods: {
    onChange (picker, value, index) {
      this.$toast(`当前值：${value}, 当前索引：${index}`)
    }
  }
}
</script>

<style>

</style>
