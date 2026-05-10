# Agent从零到全栈学习路线站

一个纯前端的Vue3 + Tailwind CSS学习导航网站，包含13周91天的系统化学习计划、进度追踪、笔记记录等功能。

## 功能特性

- 📅 13周91天精细化学习计划
- ✅ 每日学习进度打卡
- 📝 学习笔记记录
- 📚 学习资源库
- 🚀 项目展示
- 📱 响应式设计，支持移动端
- 💾 数据本地存储(localStorage)

## 技术栈

- Vue 3 (Composition API)
- Vite
- Tailwind CSS
- Vue Router
- Pinia

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 部署

### GitHub Pages

1. 构建项目: `npm run build`
2. 将 `dist` 目录部署到 GitHub Pages

### Vercel

直接连接 GitHub 仓库，Vercel 会自动构建和部署。

## 项目结构

```
agent-learning-website/
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── main.css
│   ├── components/
│   │   └── layout/
│   │       ├── Navbar.vue
│   │       └── Footer.vue
│   ├── data/
│   │   ├── weeks/
│   │   │   ├── week-1.json ~ week-13.json
│   │   ├── resources.json
│   │   └── projects.json
│   ├── stores/
│   │   ├── progress.js
│   │   └── notes.js
│   ├── utils/
│   │   └── storage.js
│   ├── views/
│   │   ├── Home.vue
│   │   ├── StudyPlan.vue
│   │   ├── Progress.vue
│   │   ├── Notes.vue
│   │   ├── Resources.vue
│   │   ├── Projects.vue
│   │   └── About.vue
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 许可证

MIT
