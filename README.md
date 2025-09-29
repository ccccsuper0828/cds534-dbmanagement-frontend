# 🎨 CDS534 前端界面

基于 React 19 构建的现代化前端应用，提供与后端API的交互功能。

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm start
```

应用将在 http://localhost:3000 启动

## 📱 应用特性

### 🎯 主界面
- ✅ **React默认界面** - 标准的Create React App启动页面
- ✅ **现代化设计** - 简洁美观的用户界面
- ✅ **响应式布局** - 适配各种设备尺寸

### 🔌 API集成
- ✅ **HTTP客户端** - 基于Axios的API服务
- ✅ **用户管理** - 完整的CRUD操作接口
- ✅ **错误处理** - 统一的错误处理机制
- ✅ **类型安全** - TypeScript类型定义

## 🛠️ 技术栈

- **React** 19.1.0 - 前端框架
- **TypeScript** - 类型安全
- **Axios** - HTTP请求库
- **CSS3** - 样式设计

## 📁 项目结构

```
src/
├── App.tsx              # 主应用组件
├── App.css              # 应用样式
├── index.tsx            # 应用入口
├── index.css            # 全局样式
├── services/
│   └── api.ts           # API服务封装
├── reportWebVitals.ts   # 性能监控
└── react-app-env.d.ts   # TypeScript声明
```

## 🔗 API 服务

### 可用的API方法

```typescript
import { apiService } from './services/api';

// 数据库连接测试
const dbStatus = await apiService.testDatabase();

// 获取用户列表
const users = await apiService.getUsers(limit?, offset?);

// 创建用户
const newUser = await apiService.createUser({
  name: "用户名",
  email: "email@example.com"
});

// 获取单个用户
const user = await apiService.getUser(userId);

// 更新用户
const updatedUser = await apiService.updateUser(userId, {
  name?: "新名字",
  email?: "新邮箱"
});

// 删除用户
const result = await apiService.deleteUser(userId);

// 数据库查询
const queryResult = await apiService.databaseQuery({
  databaseName: "group_project",
  query: "SELECT * FROM users"
});
```

## 🌐 后端连接

### API基础URL
- **开发环境**: http://localhost:3001
- **生产环境**: 根据部署配置

### 后端功能
- 🔧 **用户管理** - 完整的CRUD操作
- 🗄️ **数据库操作** - MySQL数据库集成
- 📚 **API文档** - Swagger UI文档界面

## 🧪 开发测试

### 启动开发环境
```bash
# 启动前端
npm start

# 确保后端也在运行
cd ../cds534-group-project-backend
npm run dev
```

### 测试API连接
在浏览器控制台中测试：
```javascript
// 测试数据库连接
fetch('http://localhost:3001/api/database/test')
  .then(r => r.json())
  .then(console.log);

// 获取用户列表
fetch('http://localhost:3001/api/users')
  .then(r => r.json())
  .then(console.log);
```

## 📦 构建和部署

### 开发构建
```bash
npm run build
```

### 启动生产服务器
```bash
npm run start
```

### 生产部署
- 构建优化的生产版本
- 配置环境变量
- 部署到静态托管服务

## 🔧 可用脚本

- `npm start` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm test` - 运行测试
- `npm run eject` - 弹出Create React App配置

## 📊 性能监控

应用集成了Web Vitals性能监控：
- 首次内容绘制 (FCP)
- 最大内容绘制 (LCP)  
- 首次输入延迟 (FID)
- 累积布局偏移 (CLS)

## 🤝 开发指南

1. **修改界面** - 编辑 `src/App.tsx`
2. **添加API** - 在 `src/services/api.ts` 中添加新方法
3. **样式调整** - 修改 `src/App.css`
4. **添加组件** - 在 `src/` 目录下创建新组件

## 🌐 相关链接

- 📚 [React 文档](https://reactjs.org/)
- 🔧 [后端API文档](http://localhost:3001/api/docs)
- 📖 [项目API测试指南](../API_TESTING_GUIDE.md)

---

**开发团队**: CDS534 Group  
**最后更新**: 2025年9月29日