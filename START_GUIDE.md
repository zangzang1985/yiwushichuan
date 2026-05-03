# 项目启动指南

## 问题诊断

如果你看到"服务不可用"的错误，这是因为项目依赖还没有安装。

---

## 前置要求

### 1. 检查 Node.js 是否安装
在终端运行：
```bash
node --version
```
如果没有安装，请从 https://nodejs.org/ 下载安装 Node.js 20 或更高版本。

### 2. 安装包管理器

#### 方案 A：使用 npm（推荐，最稳定）
npm 随 Node.js 一起安装，无需额外安装。

#### 方案 B：使用 pnpm
如果你想用 pnpm，先安装它：
```bash
npm install -g pnpm
```

---

## 启动步骤

### 方式 1：使用 npm（最简单）

```bash
# 1. 进入项目目录
cd d:\ai学习\ai编程\衣物试穿

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev
```

### 方式 2：使用 pnpm

```bash
# 1. 进入项目目录
cd d:\ai学习\ai编程\衣物试穿

# 2. 安装依赖
pnpm install

# 3. 启动开发服务器
pnpm dev
```

---

## 启动成功后

打开浏览器访问：http://localhost:3000

---

## 常见问题

### Q: 安装依赖很慢怎么办？
A: 使用国内镜像源：
```bash
# npm
npm install --registry=https://registry.npmmirror.com

# pnpm
pnpm install --registry=https://registry.npmmirror.com
```

### Q: 端口 3000 被占用怎么办？
A: Next.js 会自动使用其他端口（通常是 3001），或者你可以指定端口：
```bash
npm run dev -- -p 3001
```

### Q: API 调用失败怎么办？
A: 检查 `.env.local` 文件是否存在，并且 API Key 配置正确。

---

## 项目结构说明

```
衣物试穿/
├── src/
│   ├── app/
│   │   ├── page.tsx           # 首页
│   │   ├── login/             # 登录页
│   │   ├── try-on/            # 试衣页（核心功能）
│   │   ├── history/           # 历史记录
│   │   ├── pricing/           # 定价页
│   │   └── api/try-on/        # API 路由（调用火山引擎）
│   ├── services/
│   │   └── arkApi.ts          # 火山引擎 API 封装
│   └── ...
├── .env.local                  # 环境变量（API Key）
└── package.json
```
