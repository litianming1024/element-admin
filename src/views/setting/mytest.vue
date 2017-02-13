<template>
  <base-data-table ref="base" :api-url="apiUrl" :fields="fields" :check-box-def="getCheckBoxDef()" @selection-change="test" :actions-def="getActionsDef()">
  </base-data-table>
</template>
<script>
  import BaseDataTable from 'components/table/basedatatable/BaseDataTable.vue'
  export default {
    components: {
      BaseDataTable
    },
    created: function () {
      this.$emit('refresh')
    },
    props: {
      apiUrl: {
        type: String
      }
    },
    data () {
      return {
        fields: [
          {
            label: 'id',
            prop: 'id',
            width: 100,
            sortable: 'custom'
          },
          {
            label: 'name',
            prop: 'name',
            width: 100
          }
        ],
        multipleSelection: []
      }
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
            name: '增加',
            type: 'primary',
            handler () {
              self.$message('new clicked')
              self.$emit('refresh')
            },
            icon: 'plus'
          }, {
            name: '修改',
            handler () {
              self.$message('import clicked')
            },
            icon: 'upload'
          }]
        }
      }
    }
  }
</script>
