// 定义资源数据
export const resources = [
  {
    id: 1,
    title: "Vue.js 官方文档",
    description: "渐进式JavaScript框架的官方文档，学习Vue的最佳起点",
    url: "https://vuejs.org",
    category: "前端框架",
    tags: ["Vue", "JavaScript", "框架"],
    level: "初级",
    rating: 4.9,
    isFree: true,
    isFavorite: false,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400"
  },
  {
    id: 2,
    title: "MDN Web Docs",
    description: "Mozilla开发者网络，Web技术最全面的文档资源",
    url: "https://developer.mozilla.org",
    category: "文档",
    tags: ["HTML", "CSS", "JavaScript", "Web"],
    level: "所有级别",
    rating: 4.8,
    isFree: true,
    isFavorite: false,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w-400"
  },
  {
    id: 3,
    title: "React官方教程",
    description: "Facebook开发的UI库，适合构建大型应用",
    url: "https://reactjs.org",
    category: "前端框架",
    tags: ["React", "JavaScript", "UI库"],
    level: "中级",
    rating: 4.7,
    isFree: true,
    isFavorite: false,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400"
  },
  {
    id: 4,
    title: "Node.js实战",
    description: "使用Node.js构建后端服务的实战教程",
    url: "https://nodejs.org",
    category: "后端",
    tags: ["Node.js", "JavaScript", "后端"],
    level: "中级",
    rating: 4.5,
    isFree: true,
    isFavorite: false,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400"
  },
  {
    id: 5,
    title: "Python数据分析",
    description: "使用Python进行数据分析和可视化的完整指南",
    url: "https://python.org",
    category: "数据科学",
    tags: ["Python", "数据分析", "Pandas"],
    level: "高级",
    rating: 4.6,
    isFree: false,
    isFavorite: false,
    image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec1?w=400"
  }
]

// 获取所有分类
export const getCategories = () => {
  const categories = new Set(resources.map(r => r.category))
  return ['全部', ...categories]
}

// 获取所有标签
export const getTags = () => {
  const tags = new Set(resources.flatMap(r => r.tags))
  return [...tags]
}