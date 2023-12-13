<template>
  <div class="container">
    <a-modal v-model:visible="data.modelVisible" title="新增菜单" @ok="handleOk">
      <a-form
          :model="formState"
          name="basic"
          ref="formRef"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
      >
        <a-form-item
            label="标题"
            name="menu_title" has-feedback
            :rules="[{ required: true, message: 'Please input your menu_title!', trigger: 'blur' }]"
        >
          <a-input v-model:value="formState.menu_title" placeholder="menu_title"/>
        </a-form-item>

        <a-form-item
            label="洋文"
            name="menu_title_en" has-feedback
            :rules="[{ required: true, message: 'Please input your menu_title_en!', trigger: 'blur' }]"
        >
          <a-input v-model:value="formState.menu_title_en" placeholder="menu_title_en"/>
        </a-form-item>

        <a-form-item
            label="副标题"
            name="slogan" has-feedback
            :rules="[{ required: true, message: 'Please input your slogan!', trigger: 'blur' }]"
        >
          <a-input v-model:value="formState.slogan" placeholder="slogan"/>
        </a-form-item>

        <a-form-item
            label="序号"
            name="sort" has-feedback
            :rules="[{ required: true, message: 'Please input your sort!', trigger: 'blur' }]"
        >
          <a-input v-model:value="formState.sort" placeholder="sort"/>
        </a-form-item>

        <a-form-item
            label="路径"
            name="path" has-feedback
            :rules="[{ required: true, message: 'Please input your path!', trigger: 'blur' }]"
        >
          <a-input v-model:value="formState.path" placeholder="path"/>
        </a-form-item>

      </a-form>
    </a-modal>


    <a-modal v-model:visible="data.modelUpdateVisible" title="编辑菜单" @ok="update">
      <a-form
          :model="formUpdateState"
          name="basic"
          ref="formRef"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
      >
        <a-form-item
            label="menu_title"
            name="menu_title" has-feedback
            :rules="[{ required: true, message: 'Please input your menu_title!', trigger: 'blur' }]"
        >
          <a-input v-model:value="formUpdateState.menu_title" placeholder="menu_title"/>
        </a-form-item>
        <a-form-item
            label="menu_title_en"
            name="menu_title_en" has-feedback
            :rules="[{ required: true, message: 'Please input your menu_title_en!', trigger: 'blur' }]"
        >
          <a-input v-model:value="formUpdateState.menu_title_en" placeholder="menu_title_en"/>
        </a-form-item>
        <a-form-item
            label="序号"
            name="sort" has-feedback
            :rules="[{ required: true, message: 'Please input your sort!', trigger: 'blur' }]"
        >
          <a-input v-model:value="formUpdateState.sort" placeholder="sort"/>
        </a-form-item>
        <a-form-item
            label="slogan"
            name="slogan" has-feedback
            :rules="[{ required: true, message: 'Please input your slogan!', trigger: 'blur' }]"
        >
          <a-input v-model:value="formUpdateState.slogan" placeholder="slogan"/>
        </a-form-item>
        <a-form-item
            label="path"
            name="path" has-feedback
            :rules="[{ required: true, message: 'Please input your path!', trigger: 'blur' }]"
        >
          <a-input v-model:value="formUpdateState.path" placeholder="path"/>
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
      <a-button type="primary" @click="addModal">New Menu</a-button>
      <a-button type="primary"
                @click="removeBatch"
                danger v-if="data.selectedRowKeys.length">Remove Menu</a-button>
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
          <template v-if="column.key === 'banner_path'">
            <a-image
                :width="90"
                :src="record.banner_path"
                style="border-radius: 10px;"
            />
          </template>
          <template v-if="column.key === 'content'">
            <span> {{ snippet(record.content, 10) }}</span>
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
import { reactive, ref} from "vue";
import { getFormatDate } from "@/utils/date";
import {message} from "ant-design-vue";
import {useStore} from "@/stores/store";
import {snippet} from "@/utils/content";
import {getMenuListApi, menuCreateApi, menuRemoveApi, menuUpdateApi} from "@/api/menu_api";

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
      title: '标题', dataIndex: 'menu_title', key: 'menu_title',
    },
    {
      title: '洋文', dataIndex: 'menu_title_en', key: 'menu_title_en',
    },
    {
      title: '副标题', dataIndex: 'slogan', key: 'slogan',
    },
    {
      title: '路径', dataIndex: 'path', key: 'path',
    },
    {
      title: '序号', dataIndex: 'sort', key: 'sort',
    },
    {
      title: '创建时间', dataIndex: 'CreatedAt', key: 'CreatedAt',
    },
    {
      title: '更改时间', dataIndex: 'UpdatedAt', key: 'UpdatedAt',
    },
    {
      title: '操作', dataIndex: 'action', key: 'action',
    },
  ],
  list: [
    {
      "ID": 1,
      "CreatedAt": "2023-11-09T16:13:54.072Z",
      "UpdatedAt": "2023-12-07T09:47:59.632Z",
      "DeletedAt": null,
      "menu_title": "首页",
      "menu_title_en": "index1",
      "path": "/",
      "slogan": "八嘎雅鹿",
      "abstract": [
        "Roy blog",
        "Gin + Gorm"
      ],
      "abstract_time": 7,
      "banners": null,
      "banner_time": 7,
      "sort": 1
    },
  ],
  selectedRowKeys: [],
  count: 0,
  Visible: false,
  modelUpdateVisible: false,
  fileList: [],
  banners:[
    {
      "id": 0,
      "path": "/uploads/file/bsbr.jpg",
    }
  ],
  ID: 0
})

const _formState = {
  "menu_title":"",
  "menu_title_en":"",
  "slogan":"",
  "sort":0,
  "path":"",
}

const formState = reactive({
  "menu_title":"",
  "menu_title_en":"",
  "slogan":"",
  "sort":0,
  "path":"",
    })

const formUpdateState = reactive({
  "ID": 0,
  "menu_title": "",
  "menu_title_en":"",
  "sort":0,
  "slogan": "",
  "path":""
})

function addModal() {
  data.modelVisible = true
}

//选择复选框
function onSelectChange(selectedKeys) {
  data.selectedRowKeys = selectedKeys
}

//添加菜单
async function handleOk() {
  //捕获错误
  try {
    await formRef.value.validate()
    formState.sort = Number(formState.sort)
    let res = await menuCreateApi(formState)
    if (res.code) {
      message.error(res.msg)
      return
    }
    message.success(res.msg)
    data.modelVisible = false
    Object.assign(formState, _formState)
    formRef.value.clearValidate()
    getData()
  } catch (e) {

  }
}
//批量删除
async function removeBatch() {
  let res = await (data.selectedRowKeys)
  if (res.code) {
    message.error(res.msg)
    return
  }
  message.success(res.msg)
  getData()
}

//获取菜单信息
async function getData() {
  //请求出的数据是 userList
  let res = await getMenuListApi(page)
  data.list = res.data.list
  data.count = res.data.count
}
//分页
function pageChange(page, limit) {
  getData()
}
//菜单单独删除
async function userRemove(id) {
  let res = await menuRemoveApi([id])
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
  formUpdateState.menu_title = record.menu_title
  formUpdateState.menu_title_en = record.menu_title_en
  formUpdateState.sort = record.sort
  formUpdateState.slogan = record.slogan
  formUpdateState.path = record.path
}
//编辑修改 事件
async function update() {
  data.modelUpdateVisible = false
  formUpdateState.sort = Number(formUpdateState.sort)
  let res = await menuUpdateApi(formUpdateState, formUpdateState.id)
  if (res.code) {
    message.error(res.msg)
    return
  }
  message.success(res.msg)
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
  .table_path {
    height: 90px;
    border-radius: 10%;
  }
}
</style>