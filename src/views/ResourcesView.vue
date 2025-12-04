<template>
  <div class="resources-page">
    <header class="page-header">
      <div class="container">
        <h1>资源库</h1>
        <p>发现 {{ filteredResources.length }} 个优质资源</p>
      </div>
    </header>

    <main class="container main-content">
      <!-- 侧边栏筛选器 -->
      <aside class="sidebar">
        <div class="filter-section">
          <h3>搜索资源</h3>
          <input 
            type="text" 
            v-model="store.searchQuery"
            placeholder="输入关键词..."
            class="search-input"
          >
        </div>

        <div class="filter-section">
          <h3>分类</h3>
          <div class="filter-options">
            <button 
              v-for="category in store.categories" 
              :key="category"
              :class="{ active: store.selectedCategory === category }"
              @click="store.selectedCategory = category"
              class="filter-btn"
            >
              {{ category }}
            </button>
          </div>
        </div>

        <div class="filter-section">
          <h3>难度级别</h3>
          <div class="filter-options">
            <button 
              v-for="level in ['全部', '初级', '中级', '高级']"
              :key="level"
              :class="{ active: store.selectedLevel === level }"
              @click="store.selectedLevel = level"
              class="filter-btn"
            >
              {{ level }}
            </button>
          </div>
        </div>

        <div class="filter-section">
          <h3>其他筛选</h3>
          <label class="checkbox-label">
            <input 
              type="checkbox" 
              v-model="store.showFreeOnly"
              class="checkbox"
            >
            仅显示免费资源
          </label>
        </div>

        <div class="filter-section" v-if="store.getFavorites.length > 0">
          <h3>我的收藏 ({{ store.getFavorites.length }})</h3>
          <button @click="goToFavorites" class="btn-secondary">
            查看收藏
          </button>
        </div>
      </aside>

      <!-- 主要内容区 -->
      <div class="content">
        <!-- 排序和统计 -->
        <div class="content-header">
          <div class="sort-options">
            <span>排序：</span>
            <select class="sort-select">
              <option>评分最高</option>
              <option>最新添加</option>
              <option>名称 A-Z</option>
            </select>
          </div>
          <div class="stats">
            找到 {{ filteredResources.length }} 个资源
          </div>
        </div>

        <!-- 资源网格 -->
        <div class="resources-grid">
          <ResourceCard 
            v-for="resource in filteredResources"
            :key="resource.id"
            :resource="resource"
            @toggle-favorite="store.toggleFavorite"
          />
        </div>

        <!-- 空状态 -->
        <div v-if="filteredResources.length === 0" class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3>未找到匹配的资源</h3>
          <p>尝试调整筛选条件或搜索其他关键词</p>
          <button @click="resetFilters" class="btn-primary">
            重置筛选
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useResourceStore } from '@/stores/resourceStore'
import ResourceCard from '@/components/ResourceCard.vue'

const store = useResourceStore()
const router = useRouter()

// 计算属性
const filteredResources = computed(() => store.filteredResources)

// 方法
const resetFilters = () => {
  store.searchQuery = ''
  store.selectedCategory = '全部'
  store.selectedLevel = '全部'
  store.showFreeOnly = false
}

const goToFavorites = () => {
  // 在实际项目中，这里可以跳转到收藏页面
  alert(`你有 ${store.getFavorites.length} 个收藏的资源！`)
}
</script>

<style scoped>
.resources-page {
  padding-top: 30px;
}

.page-header {
  text-align: center;
  margin-bottom: 50px;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.page-header p {
  color: #666;
  font-size: 1.1rem;
}

.main-content {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 40px;
}

/* 侧边栏样式 */
.sidebar {
  position: sticky;
  top: 30px;
  height: fit-content;
}

.filter-section {
  margin-bottom: 35px;
}

.filter-section h3 {
  margin-bottom: 15px;
  font-size: 1.1rem;
  color: #2c3e50;
}

.search-input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border 0.3s;
}

.search-input:focus {
  outline: none;
  border-color: #4a6cf7;
}

.filter-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.filter-btn {
  text-align: left;
  padding: 10px 15px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-btn:hover {
  background: #e8f4fc;
  border-color: #3498db;
}

.filter-btn.active {
  background: #4a6cf7;
  color: white;
  border-color: #4a6cf7;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.checkbox {
  width: 18px;
  height: 18px;
}

.btn-secondary {
  width: 100%;
  padding: 12px;
  background: #f1f5f9;
  border: none;
  border-radius: 8px;
  color: #4a6cf7;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-secondary:hover {
  background: #e2e8f0;
}

/* 主要内容区样式 */
.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.sort-options {
  display: flex;
  align-items: center;
  gap: 10px;
}

.sort-select {
  padding: 8px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
}

.stats {
  color: #666;
  font-weight: 500;
}

/* 资源网格 */
.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

/* 空状态 */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  background: #f8fafc;
  border-radius: 15px;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.empty-state h3 {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.empty-state p {
  color: #666;
  margin-bottom: 25px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-content {
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    position: static;
  }
  
  .resources-grid {
    grid-template-columns: 1fr;
  }
}
</style>