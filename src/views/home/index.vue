<template>
  <div class="bg-gray-50">
    <div class="bggreen h-40 bg-green-400">
      <div class="object-top">
        <home-header></home-header>
        <van-search
          shape="round"
          background="#34D399 "
          placeholder="请输入搜索关键词"
        />
        <home-swipe class="z-1"></home-swipe>
      </div>
    </div>
    <div class="h-60"></div>
  </div>
</template>

<script lang="ts">
import HomeHeader from './home-header.vue'
import HomeSwipe from './home-swipe.vue'
export default {
  components: {
    HomeHeader,
    HomeSwipe,
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
