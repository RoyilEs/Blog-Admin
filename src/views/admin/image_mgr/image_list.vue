<template>
  <div class="container">
    <a-modal v-model:visible="data.visible" title="新增图片" @ok="uploadOK">
        <a-upload
            v-model:file-list="data.fileList"
            action="/api/images"
            list-type="picture-card"
            name="images"
            multiple
            :headers="{token: store.userInfo.token}"
        >
          <i class="fa fa-cloud-upload"></i>
          <div style="margin-left: 5px">Upload</div>
        </a-upload>
      <!--注意一定跟后端list名字对应   multiple多选 -->
    </a-modal>

    <a-modal v-model:visible="data.modelUpdateVisible" title="编辑图片" @ok="update">
      <a-form
          :model="formUpdateState"
          name="basic"
          ref="formRef"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
      >
        <span>图片ID: {{ formUpdateState.id }}</span>
        <a-form-item
            label="name"
            name="name" has-feedback
            :rules="[{ required: true, message: 'Please input your name!', trigger: 'blur' }]"
        >
          <a-input v-model:value="formUpdateState.name" placeholder="name"/>
        </a-form-item>
        <a-form-item
            label="图片"
            name="path" has-feedback
        >
          <img :src="formUpdateState.path" width="150" style="border-radius: 5px" alt="图片地址">
        </a-form-item>
      </a-form>
    </a-modal>

    <div class="search">
      <a-space direction="vertical">
        <a-input-search
            placeholder="搜索图片"
            style="width: 200px"
        />
      </a-space>
    </div>
    <div class="actions">
      <a-button type="primary" @click="data.visible = true">New Image</a-button>
      <a-button type="primary"
                @click="removeBatch"
                danger v-if="data.selectedRowKeys.length">Remove Image</a-button>
    </div>
    <div class="tables">
      <a-table :columns="data.columns"
               :data-source="data.list"
               :pagination="false"
               :row-selection="{
                 selectedRowKeys: data.selectedRowKeys, onChange: onSelectChange }"
               :row-key="'ID'"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'path'">
            <a-image
                :width="90"
                :src="record.path"
                style="border-radius: 10px;"
            />
          </template>
          <!-- 时间渲染-->
          <template v-if="column.key === 'CreatedAt'">
            <span>{{ getFormatDate(record.CreatedAt) }}</span>
          </template>
          <template v-if="column.key === 'action'">
            <a-button type="primary" @click="updateModal(record)">编辑</a-button>
            <a-popconfirm
                title="Are you sure delete this task?"
                ok-text="Yes"
                cancel-text="No"
                @confirm="userRemove(record.ID)"
            >
              <a-button type="primary" danger>删除</a-button>
            </a-popconfirm>
          </template>
        </template>
      </a-table>
    </div>
    <div class="pages">
      <a-pagination
          show-less-items
          :show-size-changer="false"
          v-model:current="page.page"
          v-model:page-size="page.limit"
          @change="pageChange"
          :total="data.count"
          :show-total="total => `Total ${total} items`"
      />
    </div>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import { getFormatDate } from "@/utils/date";
import {message} from "ant-design-vue";
import {imageListApi, imageRemoveApi, imageUpdateApi} from "@/api/image_api";
import {useStore} from "@/stores/store";

const store = useStore()

//分页数据
const page = reactive({
  page: 1,
  limit: 10
})
const formRef = ref(null)


//表格的数据
const data = reactive({
  columns: [
    {
      title: 'ID',dataIndex: 'ID', key: 'ID',
    },
    {
      title: '名字', dataIndex: 'name', key: 'name',
    },
    {
      title: '图片地址', dataIndex: 'path', key: 'path',
    },
    {
      title: '位置', dataIndex: 'image_type', key: 'image_type',
    },
    {
      title: '创建时间', dataIndex: 'CreatedAt', key: 'CreatedAt',
    },
    {
      title: '操作', dataIndex: 'action', key: 'action',
    }
  ],
  list: [
    {
      "ID": 16,
      "CreatedAt": "2023-11-23T13:42:00.424Z",
      "UpdatedAt": "2023-11-23T13:42:00.424Z",
      "DeletedAt": null,
      "path": "uploads/file/QQ图片20231106213355.jpg",
      "hash": "22d98474796791e41d0cdda32dea046a",
      "name": "QQ图片20231106213355.jpg",
      "image_type": "本地"
    },
  ],
  selectedRowKeys: [],
  count: 0,
  Visible: false,
  modelUpdateVisible: false,
  fileList: [],
})

const formUpdateState = reactive({
  "id": 0,
  "name":"",
  "path":"",
})

//选择复选框
function onSelectChange(selectedKeys) {
  data.selectedRowKeys = selectedKeys

}
//批量删除
async function removeBatch() {
  let res = await imageRemoveApi(data.selectedRowKeys)
  if (res.code) {
    message.error(res.msg)
    return
  }
  message.success(res.msg)
  getData()
}

//获取用户信息
async function getData() {
  //请求出的数据是 userList
  let res = await imageListApi(page)
  data.list = res.data.list
  data.count = res.data.count
}
//分页
function pageChange(page, limit) {
  getData()
}
//用户单独删除
async function userRemove(id) {
  let res = await imageRemoveApi([id])
  if (res.code) {
    message.error(res.msg)
    return
  }
  message.success(res.msg)
  getData()
}
//编辑修改 赋值
function updateModal(record) {
  data.modelUpdateVisible = true
  formUpdateState.id = record.ID
  formUpdateState.name = record.name
  formUpdateState.path = record.path
}
//编辑修改 事件
async function update() {
  data.modelUpdateVisible = false
  let res = await imageUpdateApi(formUpdateState)
  if (res.code) {
    message.error(res.msg)
    return
  }
  message.success(res.msg)
  getData()
}

function uploadOK() {
  data.visible = false
  getData()
}

//释放数据
getData()
</script>

<style lang="scss">
.container {
  background-color: white;
  .search {
    padding: 5px;
    border-bottom: 1px solid var(--bg);
  }
  .actions {
    padding: 4px;
  }
  .ant-btn {
    margin-right: 10px;
  }
  .tables {
    padding: 10px;
    border-bottom: 1px solid var(--bg);
  }
  .pages {
    display: flex;
    justify-content: center;
    padding: 10px;
  }
}
</style>