<template>
  <div class="add-resource">
    <button @click="showForm = true" class="add-btn">
      + 添加新资源
    </button>
    
    <div v-if="showForm" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h2>添加新资源</h2>
          <button @click="closeForm" class="close-btn">&times;</button>
        </div>
        
        <form @submit.prevent="submitForm" class="resource-form">
          <div class="form-group">
            <label>标题 *</label>
            <input 
              v-model="newResource.title" 
              type="text" 
              required
              placeholder="请输入资源标题"
            >
          </div>
          
          <div class="form-group">
            <label>描述 *</label>
            <textarea 
              v-model="newResource.description" 
              required
              placeholder="请输入资源描述"
              rows="3"
            ></textarea>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label>分类 *</label>
              <input 
                v-model="newResource.category" 
                type="text" 
                required
                placeholder="如：前端框架、后端"
              >
            </div>
            
            <div class="form-group">
              <label>难度级别 *</label>
              <select v-model="newResource.level" required>
                <option value="初级">初级</option>
                <option value="中级">中级</option>
                <option value="高级">高级</option>
              </select>
            </div>
          </div>
          
          <div class="form-group">
            <label>标签（用逗号分隔）</label>
            <input 
              v-model="newResource.tagsInput" 
              type="text"
              placeholder="如：Vue,JavaScript,教程"
            >
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label>URL *</label>
              <input 
                v-model="newResource.url" 
                type="url" 
                required
                placeholder="https://..."
              >
            </div>
            
            <div class="form-group">
              <label>是否免费</label>
              <label class="checkbox-label">
                <input v-model="newResource.isFree" type="checkbox">
                免费资源
              </label>
            </div>
          </div>
          
          <div class="form-actions">
            <button type="button" @click="closeForm" class="btn-cancel">
              取消
            </button>
            <button type="submit" class="btn-submit">
              添加资源
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useResourceStore } from '@/stores/resourceStore'

const store = useResourceStore()
const showForm = ref(false)

const newResource = ref({
  title: '',
  description: '',
  category: '',
  level: '初级',
  tagsInput: '',
  url: '',
  isFree: true,
  rating: 4.0,
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400'
})

const submitForm = () => {
  // 处理标签
  const tags = newResource.value.tagsInput
    .split(',')
    .map(tag => tag.trim())
    .filter(tag => tag)
  
  // 构建资源对象
  const resourceToAdd = {
    ...newResource.value,
    tags: tags.length > 0 ? tags : ['其他'],
    tagsInput: undefined // 移除临时字段
  }
  
  // 添加到store
  store.addResource(resourceToAdd)
  
  // 重置表单
  resetForm()
  showForm.value = false
  
  alert('资源添加成功！')
}

const resetForm = () => {
  newResource.value = {
    title: '',
    description: '',
    category: '',
    level: '初级',
    tagsInput: '',
    url: '',
    isFree: true,
    rating: 4.0,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400'
  }
}

const closeForm = () => {
  showForm.value = false
  resetForm()
}
</script>

<style scoped>
.add-btn {
  background: #4a6cf7;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.add-btn:hover {
  background: #2b50d1;
}

/* 模态框样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 15px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 30px;
  border-bottom: 1px solid #eee;
}

.modal-header h2 {
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #666;
}

/* 表单样式 */
.resource-form {
  padding: 30px;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border 0.3s;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: #4a6cf7;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-top: 10px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 30px;
  padding-top: 25px;
  border-top: 1px solid #eee;
}

.btn-cancel {
  padding: 12px 25px;
  background: #f1f5f9;
  border: none;
  border-radius: 8px;
  color: #666;
  font-weight: 600;
  cursor: pointer;
}

.btn-submit {
  padding: 12px 30px;
  background: #4a6cf7;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  cursor: pointer;
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>