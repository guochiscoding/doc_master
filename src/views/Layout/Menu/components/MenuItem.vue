<template>
  <template v-for="routes in menuRouteList as any" :key="routes.path">
    <!-- 所有一级路由 -->
    <el-menu-item
      :index="routes.path"
      v-show="routes.meta.isShow && !routes.children"
    >
      <el-icon>
        <component :is="routes.meta.icon"></component>
      </el-icon>
      <template #title>
        <span>{{ routes.meta.title }}</span>
      </template>
    </el-menu-item>
    <!-- 判断是否有二级路由 ,且二级路由长度为1-->
    <template v-for="routeItem in routes?.children" :key="routeItem.path">
      <el-menu-item v-show="routeItem.meta.isShow" :index="routeItem.path">
        <el-icon>
          <component :is="routeItem?.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ routeItem?.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>

    <!-- 判断是否有其他子路由 -->
    <el-sub-menu
      :index="routes.path"
      v-if="routes.meta.isShow && routes.children"
    >
      <template #title>
        <el-icon>
          <component :is="routes.meta.icon"></component>
        </el-icon>
        <span>{{ routes.meta.title }}</span>
      </template>
      <!-- 递归循环 -->
      <MenuItem :menuRouteList="routes.children" />
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
const props = defineProps<{
  menuRouteList: any
}>()
</script>
