<template>
  <div class="container">
    <div class="search">
      <a-space direction="vertical">
        <a-input-search
            placeholder="input search text"
            style="width: 200px"
        />
      </a-space>
    </div>
    <div class="actions">
      <a-button type="primary">New User</a-button>
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

      </a-table>
    </div>
    <div class="pages">
      <a-pagination
          show-less-items
          :show-size-changer="false"
          v-model:current="page.page"
          v-model:page-size="page.limit"
          :total="85"
          :show-total="total => `Total ${total} items`"
      />
    </div>
  </div>
</template>

<script setup>
  import {reactive} from "vue";

  //分页数据
  const page = reactive({
    page: 1,
    limit: 10
  })
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
        title: '邮箱', dataIndex: 'email', key: 'email',
      },
      {
        title: '电话', dataIndex: 'phone', key: 'phone',
      },
      {
        title: '注册时间', dataIndex: 'CreatedAt', key: 'CreatedAt',
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
    selectedRowKeys: []

  })

  function onSelectChange(selectedKeys) {
    data.selectedRowKeys = selectedKeys

  }

  function removeBatch() {
    console.log(data.selectedRowKeys)
  }
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