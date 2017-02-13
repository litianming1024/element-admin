<template>
  <aside class="app-sidebar" :class="{ slideInLeft: show, slideOutLeft: !show }">
    <el-menu :router="true" theme="dark">
      <template v-for="(item, index) in menu">
        <el-submenu :index="item.path" v-if="item.children && item.children.length">
          <template slot="title"><i :class="['fa', item.meta.icon]"></i>{{ item.meta.label || item.name }}
          </template>
          <el-menu-item :index="generatePath(item, subItem)" v-for="subItem in item.children">
            {{ subItem.meta && subItem.meta.label || subItem.name }}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item.path">{{ item.meta.label || item.name }}</el-menu-item>
      </template>
    </el-menu>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
  },

  props: {
    show: Boolean
  },

  data () {
    return {
      isReady: false
    }
  },

  mounted () {
    let route = this.$route
    if (route.name) {
      this.isReady = true
    }
  },

  computed: mapGetters({
    menu: 'menuitems'
  }),

  methods: {
    ...mapActions([
      'expandMenu'
    ]),

    generatePath (item, subItem) {
      return `${item.component ? item.path + '/' : ''}${subItem.path}`
    }

  },

  watch: {
    $route (route) {
      this.isReady = true
    }
  }

}
</script>

<style lang="scss">
.app-sidebar {
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
  padding: 20px 0 50px;
  width: 180px;
  min-width: 45px;
  max-height: 100vh;
  height: calc(100% - 50px);
  z-index: 1024 -1;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
