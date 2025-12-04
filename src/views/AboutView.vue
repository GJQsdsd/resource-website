<template>
  <div class="about-page">
    <div class="container">
      <header class="page-header">
        <h1>关于资源宝库</h1>
        <p>我们的使命是帮助开发者找到最好的学习资源</p>
      </header>
      
      <div class="about-content">
        <section class="about-section">
          <h2>📖 我们的故事</h2>
          <p>资源宝库始于2024年，创始团队是一群热爱编程的开发者。我们发现，寻找高质量的学习资源往往需要花费大量时间在不同网站间跳转。</p>
          <p>于是，我们决定创建一个集中式的平台，筛选和整理全网最优质的开发资源，让学习变得更高效。</p>
        </section>
        
        <section class="about-section">
          <h2>🎯 我们的目标</h2>
          <ul class="goals-list">
            <li>收集1000+高质量开发资源</li>
            <li>建立完整的资源评价体系</li>
            <li>为不同水平的开发者提供个性化推荐</li>
            <li>建立活跃的开发者社区</li>
          </ul>
        </section>
        
        <section class="about-section">
          <h2>👥 加入我们</h2>
          <p>我们欢迎所有开发者贡献资源或提出建议！</p>
          <p>如果你有好的资源推荐，或者想加入我们的团队，请通过以下方式联系我们：</p>
          
          <div class="contact-info">
            <a href="mailto:contact@resourcehub.com" class="contact-link">
              📧 contact@resourcehub.com
            </a>
            <a href="https://github.com/resource-hub" target="_blank" class="contact-link">
              💻 GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  padding: 60px 0;
}

.page-header {
  text-align: center;
  margin-bottom: 60px;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.page-header p {
  color: #666;
  font-size: 1.2rem;
}

.about-section {
  margin-bottom: 50px;
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.about-section h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #2c3e50;
}

.about-section p {
  margin-bottom: 15px;
  line-height: 1.8;
  color: #555;
}

.goals-list {
  list-style: none;
  padding-left: 0;
}

.goals-list li {
  padding: 12px 0;
  padding-left: 40px;
  position: relative;
  border-bottom: 1px solid #eee;
}

.goals-list li:before {
  content: "✓";
  position: absolute;
  left: 15px;
  color: #2ecc71;
  font-weight: bold;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 25px;
}

.contact-link {
  display: inline-block;
  padding: 12px 25px;
  background: #f1f5f9;
  border-radius: 8px;
  color: #4a6cf7;
  text-decoration: none;
  transition: background 0.3s;
}

.contact-link:hover {
  background: #e2e8f0;
}
</style>
