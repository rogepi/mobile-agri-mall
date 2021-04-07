<template>
  <router-view />
  <van-tabbar route>
    <van-tabbar-item replace to="/" icon="home-o"></van-tabbar-item>
    <van-tabbar-item replace to="/category" icon="home-o"></van-tabbar-item>
    <van-tabbar-item replace to="/cart" icon="home-o"></van-tabbar-item>
    <van-tabbar-item replace to="/mine" icon="home-o"></van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
})
</script>

<style>
</style>