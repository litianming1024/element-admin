<template>
  <div>
    <base-data-table :api-url="apiUrl" :fields="fields" :check-box-def="getCheckBoxDef()" @selection-change="test"
                     :actions-def="getActionsDef()">

    </base-data-table>
    <div>
      <el-dialog title="添加用户" v-model="dialogFormVisible" :modal-append-to-body="false">
        <el-form :model="form">
          <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addUser(form)">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  import BaseDataTable from 'components/table/basedatatable/BaseDataTable.vue'
  export default {
    components: {
      BaseDataTable
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
        multipleSelection: [],
        dialogFormVisible: false,
        form: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      getCheckBoxDef () {
        return {
          show: true
        }
      },
      test (val) {
        this.multipleSelection = val
        console.debug(this.multipleSelection)
      },
      addUser (val) {
        console.debug(val)
        this.$http.post(this.apiUrl, val).then(response => {
          this.dialogFormVisible = false
        })
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
              console.debug(self.multipleSelection)
              self.dialogFormVisible = true
//              self.$emit('refresh')
            },
            icon: 'plus'
          }, {
            name: '修改',
            type: 'info',
            handler () {
//              self.$message('import clicked')

            },
            icon: 'upload'
          }, {
            name: '删除',
            type: 'danger',
            handler () {
              self.$message('import clicked')
            },
            icon: 'delete'
          }]
        }
      }
    }
  }
</script>
