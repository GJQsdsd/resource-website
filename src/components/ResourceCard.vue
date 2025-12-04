<template>
  <div class="resource-card" :class="{ 'is-favorite': resource.isFavorite }">
    <div class="card-image">
      <img :src="resource.image" :alt="resource.title">
      <div class="card-badges">
        <span class="badge level" :class="resource.level.toLowerCase()">
          {{ resource.level }}
        </span>
        <span class="badge free" v-if="resource.isFree">免费</span>
      </div>
      <button class="favorite-btn" @click="toggleFavorite">
        {{ resource.isFavorite ? '❤️' : '🤍' }}
      </button>
    </div>
    
    <div class="card-content">
      <h3 class="card-title">{{ resource.title }}</h3>
      <p class="card-description">{{ resource.description }}</p>
      
      <div class="card-meta">
        <span class="category">{{ resource.category }}</span>
        <span class="rating">⭐ {{ resource.rating }}</span>
      </div>
      
      <div class="card-tags">
        <span class="tag" v-for="tag in resource.tags" :key="tag">
          {{ tag }}
        </span>
      </div>
      
      <a :href="resource.url" target="_blank" class="card-link">
        访问资源 →
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  resource: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['toggle-favorite'])

const toggleFavorite = () => {
  emit('toggle-favorite', props.resource.id)
}
</script>

<style scoped>
.resource-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
}

.resource-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.resource-card.is-favorite {
  border: 2px solid #ff4757;
}

.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-badges {
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  gap: 8px;
}

.badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
}

.badge.level {
  background: rgba(0, 0, 0, 0.7);
}

.badge.level.初级 {
  background: #2ecc71;
}

.badge.level.中级 {
  background: #f39c12;
}

.badge.level.高级 {
  background: #e74c3c;
}

.badge.free {
  background: #3498db;
}

.favorite-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.card-content {
  padding: 25px;
}

.card-title {
  margin: 0 0 10px 0;
  font-size: 1.3rem;
  color: #2c3e50;
}

.card-description {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
  font-size: 0.95rem;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 0.9rem;
}

.category {
  background: #f1f5f9;
  padding: 5px 12px;
  border-radius: 15px;
  color: #64748b;
}

.rating {
  color: #f39c12;
  font-weight: 600;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tag {
  background: #e8f4fc;
  color: #3498db;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
}

.card-link {
  display: inline-block;
  background: #4a6cf7;
  color: white;
  text-decoration: none;
  padding: 10px 25px;
  border-radius: 25px;
  font-weight: 600;
  transition: background 0.3s;
}

.card-link:hover {
  background: #2b50d1;
}
</style>