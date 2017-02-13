<template>
  <section class="app-main">
    <div class="app-content">
      <levelbar></levelbar>
        <router-view></router-view>
    </div>
  </section>
</template>

<script>
import Levelbar from './Levelbar'

export default {
  components: {
    Levelbar
  }
}
</script>

<style lang="scss">

  .app-main {
    padding-top: 50px;
    margin-left: 180px;
    transform: translate3d(0, 0, 0);

  }

  .app-content {
    padding: 20px;
  }
</style>
