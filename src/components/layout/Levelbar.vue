<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in list" :to="item.path">{{ showName(item) }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  export default {

    data () {
      return {
        list: null
      }
    },

    created () {
      this.getList()
    },

    computed: {
      name () {
        return this.$route.name
      }
    },

    methods: {
      getList () {
        let matched = this.$route.matched.filter(item => item.name)
        let first = matched[0]
        if (first && (first.name !== 'Home' || first.path !== '')) {
          matched = [{ name: 'Home', path: '/' }].concat(matched)
        }
        this.list = matched
      },
      showName (item) {
        return item.meta && item.meta.label || item.name
      }
    },

    watch: {
      $route () {
        this.getList()
      }
    }
  }
</script>
