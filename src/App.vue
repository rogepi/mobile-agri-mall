<template>
  <router-view />
  <van-tabbar route active-color="#34D399" placeholder safe-area-inset-bottom>
    <van-tabbar-item replace to="/">
      <span>首页</span>
      <template #icon>
        <img src="@ASS/svg/home.svg" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/category" icon="apps-o"
      >分类
      <template #icon>
        <img src="@ASS/svg/category.svg" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/cart" icon="cart-o"
      >购物车 <template #icon> <img src="@ASS/svg/wallet.svg" /> </template
    ></van-tabbar-item>
    <van-tabbar-item replace to="/mine" icon="contact"
      >我的
      <template #icon>
        <img src="@ASS/svg/profile.svg" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { defineComponent} from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
})
</script>

<style lang="less" scoped>
</style>
