<template>
  <mytest api-url="/api/user" :actions-def="getActionsDef()">

  </mytest>
</template>
<script>
import mytest from './mytest.vue'
export default {
  components: {
    mytest
  },
  methods: {
    getCheckBoxDef () {
      return {
        show: true
      }
    },
    test (val) {
      console.debug(val)
      this.multipleSelection = val
      console.debug(this.multipleSelection)
    },
    getActionsDef () {
      let self = this
      return {
        width: 5,
        def: [{
          handler () {
            console.debug('sadfsad')
            self.$emit('re-fresh')
          },
          icon: 'plus'
        }, {
          name: 'lala',
          handler () {
            console.debug('sadfsad')
          },
          icon: 'upload'
        }]
      }
    }
  }
}
</script>
