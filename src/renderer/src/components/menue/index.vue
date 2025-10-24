<template>
  <div class="top-menu" @mousedown="startDrag">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <el-icon><Menu /></el-icon>
        菜单
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleAbout">关于我们</el-dropdown-item>
          <el-dropdown-item @click="handleFeedback">意见反馈</el-dropdown-item>
          <el-dropdown-item @click="handleDebug">调试工具</el-dropdown-item>
          <el-dropdown-item @click="handleMini">最小化</el-dropdown-item>
          <el-dropdown-item @click="handleExit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <div class="drag-area"></div>
  </div>
</template>

<script setup>
import { ElDropdown, ElDropdownMenu, ElDropdownItem, ElIcon } from "element-plus";
import { Menu } from "@element-plus/icons-vue";

const handleAbout = () => {
  window.alert("关于我们：Electron + Vite + Vue3 应用");
};

const handleFeedback = () => {
  window.alert("意见反馈：请发送至 feedback@example.com");
};

const handleDebug = () => {
  window.electron.toggleDevTools();
};

const handleExit = () => {
  window.electron.closeWindow();
};
const handleMini = () => {
  window.electron.minimizeWindow();
};
const startDrag = () => {
  // 拖拽功能通过 CSS -webkit-app-region: drag 实现
};
</script>

<style scoped>
.top-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 0 16px;
}

.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #409eff;
}

.el-dropdown-link:hover {
  color: #66b1ff;
}

.drag-area {
  flex-grow: 1;
  height: 100%;
  -webkit-app-region: drag; /* 启用拖动区域 */
}
</style>
