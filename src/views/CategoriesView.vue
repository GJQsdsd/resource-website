<template>
  <div class="categories-page">
    <div class="container">
      <header class="page-header">
        <h1>资源分类</h1>
        <p>按技术领域和类型浏览资源</p>
      </header>
      
      <div class="categories-grid">
        <div 
          v-for="category in categories" 
          :key="category"
          class="category-card"
          @click="filterByCategory(category)"
        >
          <div class="category-icon">{{ getCategoryIcon(category) }}</div>
          <h3>{{ category === '全部' ? '所有资源' : category }}</h3>
          <p>{{ getResourceCount(category) }} 个资源</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useResourceStore } from '@/stores/resourceStore'

const store = useResourceStore()
const router = useRouter()

const categories = computed(() => store.categories)

const getResourceCount = (category) => {
  if (category === '全部') return store.resourceList.length
  return store.resourceList.filter(r => r.category === category).length
}

const getCategoryIcon = (category) => {
  const icons = {
    '全部': '📚',
    '前端框架': '⚛️',
    '后端': '🔧',
    '数据科学': '📊',
    '文档': '📖',
    '教程': '🎓'
  }
  return icons[category] || '📁'
}

const filterByCategory = (category) => {
  if (category === '全部') {
    router.push('/resources')
  } else {
    store.selectedCategory = category
    router.push('/resources')
  }
}
</script>

<style scoped>
.categories-page {
  padding: 60px 0;
}

.page-header {
  text-align: center;
  margin-bottom: 50px;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
}

.category-card {
  background: white;
  border-radius: 15px;
  padding: 40px 30px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.category-icon {
  font-size: 3.5rem;
  margin-bottom: 20px;
}

.category-card h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #2c3e50;
}

.category-card p {
  color: #666;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .categories-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}
</style>