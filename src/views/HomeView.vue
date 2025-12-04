<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <header class="header">
      <div class="container">
        <h1 class="logo">📚 资源宝库</h1>
        <nav class="nav">
          <router-link to="/">首页</router-link>
          <router-link to="/resources">资源库</router-link>
          <router-link to="/categories">分类</router-link>
          <router-link to="/about">关于</router-link>
        </nav>
      </div>
    </header>

    <!-- 主要内容区 -->
    <main class="main-content">
      <section class="hero">
        <h2>发现优质学习资源</h2>
        <p>收集整理全网最好的编程教程、工具和文章</p>
        <button class="btn-primary" @click="goToResources">
          开始探索 →
        </button>
      </section>

      <!-- 特性展示 -->
      <section class="features">
        <div class="feature-card">
          <div class="icon">🔥</div>
          <h3>精选资源</h3>
          <p>每个资源都经过人工筛选，确保质量</p>
        </div>
        <div class="feature-card">
          <div class="icon">🏷️</div>
          <h3>智能分类</h3>
          <p>按技术栈、难度、类型分类，快速找到所需</p>
        </div>
        <div class="feature-card">
          <div class="icon">❤️</div>
          <h3>收藏功能</h3>
          <p>保存你喜欢的资源，随时查看</p>
        </div>
      </section>
    </main>

    <!-- 底部 -->
    <footer class="footer">
      <p>© 2024 资源宝库 | 为开发者服务</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    goToResources() {
      this.$router.push('/resources');
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 顶部导航样式 */
.header {
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  padding: 20px 0;
}

.logo {
  margin: 0;
  font-size: 1.8rem;
  color: #2c3e50;
  display: inline-block;
}

.nav {
  float: right;
}

.nav a {
  margin-left: 30px;
  text-decoration: none;
  color: #4a5568;
  font-weight: 500;
}

.nav a:hover {
  color: #3498db;
}

/* 英雄区域 */
.hero {
  text-align: center;
  padding: 100px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.hero h2 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  opacity: 0.9;
}

.btn-primary {
  background: white;
  color: #764ba2;
  border: none;
  padding: 15px 40px;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.3s;
}

.btn-primary:hover {
  transform: translateY(-3px);
}

/* 特性卡片 */
.features {
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 80px 20px;
  flex-wrap: wrap;
}

.feature-card {
  text-align: center;
  padding: 40px 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  flex: 1;
  min-width: 250px;
  max-width: 350px;
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

/* 底部 */
.footer {
  margin-top: auto;
  text-align: center;
  padding: 30px;
  background: #f8f9fa;
  color: #6c757d;
}
</style>
