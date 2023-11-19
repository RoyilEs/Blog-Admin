<template>
  <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      :inline-collapsed="false"
  >
    <template v-for="menu in data.menuList" :key="menu.id">
      <a-menu-item :key="menu.id" v-if="menu.children.length === 0">
        <template #icon>
          <i :class="menu.icon"></i>
        </template>
        <span>{{ menu.title }}</span>
      </a-menu-item>
      <a-sub-menu :key="menu.id" v-else>
        <template #icon>
          <i :class="menu.icon"></i>
        </template>
        <template #title>{{ menu.title }}</template>
        <a-menu-item v-for="sub_menu in menu.children" :key="sub_menu.id">
          <template #icon>
            <i :class="sub_menu.icon"></i></template>
          <span>{{ sub_menu.title }}</span>
        </a-menu-item>
      </a-sub-menu>
    </template>

  </a-menu>
</template>

<script setup>
import {reactive, ref} from "vue";

  const data = reactive({
    menuList: [
      {
        id : 1,
        icon: "fa fa-home", //icon图标 统一用 fa
        title: "首页", // 菜单名称 一级路由
        name: "home", // 路由名称
        children: []
      },
      {
        id : 2,
        icon: "fa fa-user-o", //icon图标 统一用 fa
        title: "用户管理", // 菜单名称 一级路由
        name: "", // 路由名称
        children: [
          {
            id : 3,
            icon: "fa fa-user", //icon图标 统一用 fa
            title: "用户列表", // 菜单名称 二级路由
            name: "user_list", // 路由名称
          },
          {
            id : 4,
            icon: "fa fa-user-plus", //icon图标 统一用 fa
            title: "添加用户", // 菜单名称 二级路由
            name: "user_create", // 路由名称
          }
        ]
      },
      {
        id: 5,
        icon: "fa fa-cog", //icon图标 统一用 fa
        title: "系统管理", // 菜单名称 一级路由
        name: "", // 路由名称
        children: [
          {
            id: 6,
            icon: "fa fa-cog", //icon图标 统一用 fa
            title: "系统配置", // 菜单名称 二级路由
            name: "system_list", // 路由名称
          }
        ]
      },
      {
        id : 7,
        icon: "fa fa-user-plus", //icon图标 统一用 fa
        title: "菜单管理", // 菜单名称 二级路由
        name: "user_create", // 路由名称
        children: [
          {
            id: 8,
            icon: "fa fa-user", //icon图标 统一用 fa
            title: "菜单列表", // 菜单名称 二级路由
            name: "menu_list", // 路由名称
          }
        ]
      }
    ]
  })

  const selectedKeys = ref(['1'])
</script>

<style>

</style>