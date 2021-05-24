<template>
  <div>
      <top-nav />
      <main-layout />
  </div>
</template>

<script>
import { TopNav, MainLayout } from "./index"
export default {
  components: { TopNav, MainLayout },
  name: 'Screen',
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>
