<template>
  <div class="h-10 p-2 px-4 flex justify-between bg-green-400">
    <div class="flex space-x-2">
      <img class="h-6 w-6" src="@ASS/svg/logo-white.svg" alt="Logo" />
      <strong class="font-sans text-white">农商平台</strong>
    </div>

    <div class="flex space-x-2">
      <img class="h-6 w-6" src="@ASS/svg/scanf.svg" alt="scanf" />
      <img class="h-6 w-6" src="@ASS/svg/message.svg" alt="message" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {},
})
</script>

<style lang="less" scoped>
strong {
  font-family: 'Noto Sans SC';
}
</style>
