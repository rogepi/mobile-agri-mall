<template>
  <div
    class="m-2 mx-4 overflow-hidden rounded-xl"
    style="transform: translateY(0)"
  >
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <img
          class="h-40 w-full"
          style="transform: translateY(0)"
          :src="image"
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const images = [
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-2.jpg',
      'https://img.yzcdn.cn/vant/apple-2.jpg',
    ]
    return { images }
  },
})
</script>

<style lang="less" scoped>
</style>