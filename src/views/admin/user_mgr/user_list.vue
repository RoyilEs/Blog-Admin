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
      <a-button type="primary">Primary Button</a-button>
      <a-button>Default Button</a-button>
    </div>
    <div class="tables">
      <a-table :columns="data.columns" :data-source="data.list" :pagination="false">

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
        title: 'name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'date',
        dataIndex: 'date',
        key: 'date',
      }
    ],
    list: [
      {
        name: "Roy",
        age: 19,
        date: "2004-01-01 12:12:12"
      }
    ]

  })
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