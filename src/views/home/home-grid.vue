<template>
  <van-grid column-num="5" :border="false">
    <van-grid-item v-for="(item, index) in data" :key="index">
      <img class="h-10" :src="item.imgSrc" alt="grid.svg" />
      <span class="text-xs">{{ item.title }}</span>
    </van-grid-item>
  </van-grid>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    interface DataProps {
      imgSrc: string
      title: string
    }
    const data: DataProps[] = reactive([
      {
        imgSrc: '/src/assets/grid-svgs/白菜.svg',
        title: '白菜',
      },
      {
        imgSrc: '/src/assets/grid-svgs/白萝卜.svg',
        title: '白萝卜',
      },
      {
        imgSrc: '/src/assets/grid-svgs/草莓.svg',
        title: '草莓',
      },
      {
        imgSrc: '/src/assets/grid-svgs/红辣椒.svg',
        title: '红辣椒',
      },
      {
        imgSrc: '/src/assets/grid-svgs/西瓜.svg',
        title: '西瓜',
      },
      {
        imgSrc: '/src/assets/grid-svgs/香蕉.svg',
        title: '香蕉',
      },
      {
        imgSrc: '/src/assets/grid-svgs/玉米.svg',
        title: '玉米',
      },
      {
        imgSrc: '/src/assets/grid-svgs/樱桃.svg',
        title: '樱桃',
      },
      {
        imgSrc: '/src/assets/grid-svgs/黄瓜.svg',
        title: '黄瓜',
      },
      {
        imgSrc: '/src/assets/grid-svgs/橘子.svg',
        title: '橘子',
      },
    ])
    return {
      data,
    }
  },
})
</script>
