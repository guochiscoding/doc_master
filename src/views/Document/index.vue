<template>
  <div class="document">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="文件名" width="220" />
      <el-table-column prop="state" label="状态" width="120" />
      <el-table-column prop="city" label="所属系统" width="120" />
      <el-table-column prop="address" label="操作时间" width="200" />
      <el-table-column prop="zip" label="文件大小" width="120" />
      <el-table-column prop="zip" label="标签" width="400">
        <template #default="scope">
          <el-tag
            v-for="item in scope.row.tips"
            :key="item"
            style="margin-left: 2px"
          >
            {{ item }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" min-width="120">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="handleClick(scope.row)"
          >
            查看
          </el-button>
          <el-button
            link
            type="primary"
            size="small"
            @click="handleClickEdit(scope.row)"
          >
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router"
const router = useRouter()
const handleClick = (e) => {
  console.log("click", e)
  const { id } = e
  router.push("/detail")
}
const handleClickEdit = (e) => {
  console.log("click", e)
  const { id } = e
  router.push("/edit")
}

const tableData = [
  {
    name: "Aop操作系统",
    state: "已完成",
    city: "Aop",
    address: "2024/11/20",
    zip: "200k",
    tag: "Home",
    tips: ["临时存储", "无插图", "运营维护"],
  },
  {
    name: "Pim操作系统",
    state: "已完成",
    city: "Pim",
    address: "2024/11/20",
    zip: "200k",
    tag: "Home",
    tips: ["临时存储", "开发维护"],
  },
  {
    name: "Hub操作系统",
    state: "已完成",
    city: "Hub",
    address: "2024/11/20",
    zip: "200k",
    tag: "Home",
    tips: ["开发维护"],
  },
  {
    name: "Oms操作系统",
    state: "已完成",
    city: "Oms",
    address: "2024/11/20",
    zip: "200k",
    tag: "Home",
    tips: ["待更新"],
  },
  {
    name: "Cms操作系统",
    state: "已完成",
    city: "Cms",
    address: "2024/11/20",
    zip: "200k",
    tag: "Home",
    tips: ["停止维护"],
  },
]
</script>

<style scoped lang="scss">
.document {
  width: 100%;
  height: 100%;
  overflow: hidden;
  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
