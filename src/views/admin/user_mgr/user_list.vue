<template>
  <div class="container">

    <a-modal v-model:visible="data.modelVisible" title="添加用户" @ok="handleOk">
      <a-form
          :model="formState"
          name="basic"
          ref="formRef"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
      >
        <a-form-item
            label="Username"
            name="username" has-feedback
            :rules="[{ required: true, message: 'Please input your username!', trigger: 'blur' }]"
        >
          <a-input v-model:value="formState.username" placeholder="username"/>
        </a-form-item>

        <a-form-item
            label="Nickname"
            name="nickname" has-feedback
            :rules="[{ required: true, message: 'Please input your nickname!', trigger: 'blur' }]"
        >
          <a-input v-model:value="formState.nickname" placeholder="nickname"/>
        </a-form-item>

        <a-form-item
            label="Password"
            name="password" has-feedback
            :rules="[{ required: true, message: 'Please input your password!', trigger: 'blur' }]"
        >
          <a-input-password v-model:value="formState.password" placeholder="password"/>
        </a-form-item>

        <a-form-item
            label="Email"
            name="email" has-feedback
        >
          <a-input v-model:value="formState.email" placeholder="email"/>
        </a-form-item>

        <a-form-item
            label="Phone"
            name="phone" has-feedback
        >
          <a-input v-model:value="formState.phone" placeholder="phone"/>
        </a-form-item>

        <a-form-item
            label="Permission"
            name="permission" has-feedback
            :rules="[{ required: true, message: 'Please select your permission!', trigger: 'blur'}]"
        >
          <a-select
              v-model:value="formState.permission"
              :size="size"
              style="width: 200px"
              :options="permissionOptions"
              placeholder="Please select your permission"
          ></a-select>
        </a-form-item>
      </a-form>
    </a-modal>

    <div class="search">
      <a-space direction="vertical">
        <a-input-search
            placeholder="搜索用户昵称"
            style="width: 200px"
        />
      </a-space>
    </div>
    <div class="actions">
      <a-button type="primary" @click="data.modelVisible = true">New User</a-button>
      <a-button type="primary"
                @click="removeBatch"
                danger v-if="data.selectedRowKeys.length">Remove User</a-button>
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
          <template v-if="column.key === 'avatar'">
            <img class="table_avatar" :src="record.avatar" alt="头像地址">
          </template>
          <!-- 时间渲染-->
          <template v-if="column.key === 'CreatedAt'">
            <span>{{ getFormatDate(record.CreatedAt) }}</span>
          </template>
          <template v-if="column.key === 'action'">
            <a-button type="primary">编辑</a-button>
            <a-button type="primary" danger>删除</a-button>
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
          :total="data.count"
          :show-total="total => `Total ${total} items`"
      />
    </div>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
  import { getFormatDate } from "@/utils/date";
  import { userListApi, userCreateApi } from "@/api/user_api";
import {message} from "ant-design-vue";

  console.log(import.meta.env)

  //分页数据
  const page = reactive({
    page: 1,
    limit: 10
  })
  const formRef = ref(null)
  //权限的数据
  const permissionOptions = [
    {
      value: 1,
      label: '管理员',
    },
    {
      value: 2,
      label: '普通用户',
    },
    {
      value: 3,
      label: '游客',
    }
  ]

  //表格的数据
  const data = reactive({
    columns: [
      {
        title: 'ID',dataIndex: 'ID', key: 'ID',
      },
      {
        title: '昵称', dataIndex: 'nickname', key: 'nickname',
      },
      {
        title: '头像', dataIndex: 'avatar', key: 'avatar',
      },
      {
        title: '用户名', dataIndex: 'username', key: 'username',
      },
      {
        title: '角色', dataIndex: 'permission', key: 'permission',
      },
      {
        title: '邮箱', dataIndex: 'email', key: 'email',
      },
      {
        title: '电话', dataIndex: 'phone', key: 'phone',
      },
      {
        title: '注册时间', dataIndex: 'CreatedAt', key: 'CreatedAt',
      },
      {
        title: '操作', dataIndex: 'action', key: 'action',
      }
    ],
    list: [
      {
        "ID": 2,
        "CreatedAt": "2023-11-12T13:19:52.236Z",
        "UpdatedAt": "2023-11-13T12:23:28.262Z",
        "DeletedAt": null,
        "nickname": "Rooyill",
        "username": "Roy",
        "email": "qq******163.com",
        "phone": "173****8918",
        "password": "$2a$04$yLJWgbCk8MSRE7kRx0ePYOzGuENtyKaODrTCKU7IGu2c4KTQ9ncJm",
        "permission": "管理员",
        "avatar": "/uploads/avatar/头像.png",
        "token": ""
      },
    ],
    selectedRowKeys: [],
    count: 0,
    modelVisible: false
  })

  const _formState = {
    "nickname":"",
    "username":"",
    "email":"",
    "phone":"",
    "password":"",
    "permission": null
  }

  const formState = reactive({
        "nickname":"",
        "username":"",
        "email":"",
        "phone":"",
        "password":"",
        "permission": null
      }
  )

  function onSelectChange(selectedKeys) {
    data.selectedRowKeys = selectedKeys

  }

  function removeBatch() {
    console.log(data.selectedRowKeys)
  }

  //获取用户信息
  async function getData() {
    //请求出的数据是 userList
    let res = await userListApi({})
    data.list = res.data.list
    data.count = res.data.count
  }

  async function handleOk() {
    //捕获错误
    try {
      await formRef.value.validate()
      //发送登录请求
      let res = await userCreateApi(formState)
      if (res.code) {
        message.error(res.msg)
        return
      }
      message.success(res.msg)
      data.modelVisible = false
      Object.assign(formState, _formState)
      formRef.value.clearValidate()

    } catch (e) {

    }
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
    .table_avatar {
      width: 45px;
      height: 45px;
      border-radius: 40%;
    }
  }
</style>