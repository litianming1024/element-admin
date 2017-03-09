<template>
  <div>
    <base-data-table :api-url="apiUrl" :fields="fields" :check-box-def="getCheckBoxDef()" @selection-change="test"
                     :actions-def="getActionsDef()">

    </base-data-table>
    <div>
    <el-dialog title="收货地址" v-model="dialogFormVisible" >
      <el-form>
        <el-form-item label="活动名称">
          <el-input auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
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
        dialogFormVisible: false
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
