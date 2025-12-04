<template>
  <div id="app">
    <!-- 添加资源按钮（全局） -->
    <div class="floating-add-btn">
      <AddResource />
    </div>
    
    <!-- 路由内容 -->
    <router-view />
  </div>
</template>

<script setup>
import AddResource from './components/AddResource.vue'
</script>

<style>
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #f8fafc;
}

/* 浮动添加按钮 */
.floating-add-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 100;
}

/* 响应式图片 */
img {
  max-width: 100%;
  height: auto;
}

/* 通用容器 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 工具类 */
.text-center {
  text-align: center;
}

.mt-20 {
  margin-top: 20px;
}

.mb-20 {
  margin-bottom: 20px;
}
</style>