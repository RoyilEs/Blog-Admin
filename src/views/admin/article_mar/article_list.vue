<template>
  <div class="container">
    <a-modal v-model:visible="data.modelUpdateVisible" title="编辑文章" @ok="update">
      <a-form
          :model="formUpdateState"
          name="basic"
          ref="formRef"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
      >
        <span>文章ID: {{ formUpdateState.id }}</span>
        <a-form-item
            label="title"
            name="title" has-feedback
            :rules="[{ required: true, message: 'Please input your title!', trigger: 'blur' }]"
        >
          <a-input v-model:value="formUpdateState.title" placeholder="title"/>
        </a-form-item>
        <a-form-item
            label="abstract"
            name="abstract" has-feedback
            :rules="[{ required: true, message: 'Please input your abstract!', trigger: 'blur' }]"
        >
          <a-input v-model:value="formUpdateState.abstract" placeholder="abstract"/>
        </a-form-item>
        <a-form-item
            label="content"
            name="content" has-feedback
            :rules="[{ required: true, message: 'Please input your content!', trigger: 'blur' }]"
        >
          <a-textarea  v-model:value="formUpdateState.content" placeholder="content"/>
        </a-form-item>
        <a-form-item
            label="category"
            name="category" has-feedback
            :rules="[{ required: true, message: 'Please input your category!', trigger: 'blur' }]"
        >
          <a-input v-model:value="formUpdateState.category" placeholder="category"/>
        </a-form-item>
        <a-form-item
            label="banner_id"
            name="banner_id" has-feedback
            :rules="[{ required: true, message: 'Please input your banner_id!', trigger: 'blur' }]"
        >
          <a-input v-model:value="formUpdateState.banner_id" placeholder="banner_id"/>
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
import {imageNameListApi, imageUpdateApi} from "@/api/image_api";
import {useStore} from "@/stores/store";
import {articleListApi, articleRemoveApi, articleUpdateApi} from "@/api/article_api";
import {snippet} from "@/utils/content";

const store = useStore()

//分页数据
const page = reactive({
  page: 1,
  limit: 10
})
const formRef = ref(null)


async function getImage() {
  let res = await imageNameListApi()
  banners.data = res.data
}

//表格的数据
const data = reactive({
  columns: [
    {
      title: 'ID',dataIndex: 'ID', key: 'ID',
    },
    {
      title: '标题', dataIndex: 'title', key: 'title',
    },
    {
      title: '图片', dataIndex: 'banner_path', key: 'banner_path',
    },
    {
      title: '图片ID', dataIndex: 'banner_id', key: 'banner_id',
    },
    {
      title: '创建时间', dataIndex: 'CreatedAt', key: 'CreatedAt',
    },
    {
      title: '介绍', dataIndex: 'abstract', key: 'abstract',
    },
    {
      title: '内容', dataIndex: 'content', key: 'content',
    },
    {
      title: '分类', dataIndex: 'category', key: 'category',
    },
    {
      title: '作者', dataIndex: 'source', key: 'source',
    },
    {
      title: '字数', dataIndex: 'word', key: 'word',
    },
    {
      title: '操作', dataIndex: 'action', key: 'action',
    },

  ],
  list: [
    {
      "ID": 17,
      "CreatedAt": "2023-11-29T07:01:06.03Z",
      "UpdatedAt": "2023-11-29T07:01:06.03Z",
      "title": "第五次",
      "abstract": "(❤ ω ❤)",
      "content": "测试添加图片",
      "tag": null,
      "category": "测试114514",
      "user_id": 2,
      "source": "Roy",
      "word": "18",
      "banner_id": 15,
      "nickname": "Rooyill",
      "banner_path": "/uploads/file/QQ图片20231029203613.jpg",
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

const formUpdateState = reactive({
  "title": "",
  "abstract": "",
  "content":"",
  "category":"",
  "banner_id": 0
})

//选择复选框
function onSelectChange(selectedKeys) {
  data.selectedRowKeys = selectedKeys

}
//批量删除
async function removeBatch() {
  let res = await articleRemoveApi(data.selectedRowKeys)
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
  let res = await articleListApi(page)
  data.list = res.data.list
  data.count = res.data.count
}
//分页
function pageChange(page, limit) {
  getData()
}
//用户单独删除
async function userRemove(id) {
  let res = await articleRemoveApi([id])
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
  formUpdateState.title = record.title
  formUpdateState.abstract = record.abstract
  formUpdateState.content = record.content
  formUpdateState.category = record.category
  formUpdateState.banner_id = record.banner_id
  data.ID = record.ID
}
//编辑修改 事件
async function update() {
  data.modelUpdateVisible = false
  formUpdateState.banner_id = Number(formUpdateState.banner_id)
  let res = await articleUpdateApi(formUpdateState, data.ID)
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