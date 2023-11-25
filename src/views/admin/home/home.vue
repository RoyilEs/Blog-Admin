<template>
  <div>
    <div class="data_preview">
      <div class="preview_item" v-for="(item, index) in data.sum_data_list" :key="index">
        <div class="icon flex">
          <i :class="'iconfont ' + iconList[index]"></i>

        </div>
        <div class="text">
          <div class="data_title">{{ item.label }}</div>
          <div class="data_sum">{{ item.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {reactive} from "vue";

  const iconList = [
        "icon-yonghutongji",
        "icon-a-bianzu3",
        "icon-tongjibaobiao6"
  ]

  const data = reactive({
    sum_data_list: [
      {
        label: "用户总数",
        value: 21,
      },
      {
        label: "文章总数",
        value: 2,
      },
      {
        label: "图片总数",
        value: 22,
      }
    ]
  })
</script>

<style lang="scss">

  .data_preview {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
  }
  .preview_item {
    display: flex;
    background-color: var(--active);
    border-radius: 10px;
    border: 1px solid var(--active);
    padding: 20px;

    .icon {
      width: 60%;
      i {
        font-size: 40px;
        color: bisque;
      }
    }

    .text {
      width: 40%;
      font-size: 18px;

      .data_title {
        color: bisque;
      }
      .data_sum {
        font-size: 20px;
      }
    }
  }
</style>