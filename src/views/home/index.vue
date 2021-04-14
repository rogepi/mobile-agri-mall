<template>
  <div class="bg-gray-50">
    <div class="bggreen h-40 bg-green-400">
      <home-header></home-header>
      <van-search
        shape="round"
        background="#34D399 "
        placeholder="请输入搜索关键词"
      />
    </div>
    <home-swipe class="-mt-16"></home-swipe>
    <home-grid></home-grid>
  </div>
</template>

<script lang="ts">
import HomeHeader from './home-header.vue'
import HomeSwipe from './home-swipe.vue'
import HomeGrid from './home-grid.vue'
export default {
  components: {
    HomeHeader,
    HomeSwipe,
    HomeGrid,
  },
  setup() {},
}
</script>

<style lang="less" scoped>
.bggreen {
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
}
</style>
