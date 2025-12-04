import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { resources, getCategories, getTags } from '@/data/resources.js'

export const useResourceStore = defineStore('resource', () => {
  // 状态（数据）
  const resourceList = ref(resources)
  const searchQuery = ref('')
  const selectedCategory = ref('全部')
  const selectedLevel = ref('全部')
  const showFreeOnly = ref(false)
  
  // 计算属性（派生数据）
  const filteredResources = computed(() => {
    return resourceList.value.filter(resource => {
      // 搜索过滤
      const matchesSearch = !searchQuery.value || 
        resource.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.value.toLowerCase()))
      
      // 分类过滤
      const matchesCategory = selectedCategory.value === '全部' || 
        resource.category === selectedCategory.value
      
      // 难度过滤
      const matchesLevel = selectedLevel.value === '全部' || 
        resource.level === selectedLevel.value
      
      // 免费过滤
      const matchesFree = !showFreeOnly.value || resource.isFree
      
      return matchesSearch && matchesCategory && matchesLevel && matchesFree
    })
  })
  
  const categories = computed(() => getCategories())
  const tags = computed(() => getTags())
  
  // 动作（方法）
  const toggleFavorite = (id) => {
    const resource = resourceList.value.find(r => r.id === id)
    if (resource) {
      resource.isFavorite = !resource.isFavorite
    }
  }
  
  const addResource = (newResource) => {
    const maxId = Math.max(...resourceList.value.map(r => r.id))
    resourceList.value.push({
      ...newResource,
      id: maxId + 1,
      isFavorite: false
    })
  }
  
  const getFavorites = computed(() => {
    return resourceList.value.filter(r => r.isFavorite)
  })
  
  return {
    // 状态
    resourceList,
    searchQuery,
    selectedCategory,
    selectedLevel,
    showFreeOnly,
    
    // 计算属性
    filteredResources,
    categories,
    tags,
    getFavorites,
    
    // 方法
    toggleFavorite,
    addResource
  }
})