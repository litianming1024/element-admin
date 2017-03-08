<template>
  <section class="hero is-bold app-navbar" :class="{ slideInDown: show, slideOutDown: !show }">
    <div class="hero-head">
      <nav class="nav">
        <div class="nav-left">
          <a class="nav-item is-hidden-tablet" @click="toggleSidebar(!sidebar.opened)">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </a>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {

    components: {
    },

    props: {
      show: Boolean
    },

    computed: mapGetters({
      pkginfo: 'pkg',
      sidebar: 'sidebar'
    }),

    methods: mapActions([
      'toggleSidebar'
    ])
  }
</script>

<style lang="scss">
  .app-navbar {
    position: fixed;
    min-width: 100%;
    z-index: 1024;

  .container {
    margin: auto 10px;
  }

  .nav-right {
    align-items: stretch;
    align-items: stretch;
    flex: 1;
    justify-content: flex-end;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
  }
}

</style>
