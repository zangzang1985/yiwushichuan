# 衣物试穿应用 - Vercel 部署指南

本指南将帮助你将衣物试穿应用部署到Vercel平台。

## 前置条件

1. 确保你已经有一个Vercel账号（可以使用GitHub、GitLab或邮箱注册）
2. 确保项目已经初始化为Git仓库（本项目已经完成）

## 部署方法一：使用Vercel Dashboard（推荐）

### 1. 上传代码到GitHub

首先，将你的代码推送到GitHub仓库：

```bash
# 创建GitHub仓库（在GitHub网站上创建）
# 然后执行以下命令：

git remote add origin <你的GitHub仓库URL>
git branch -M main
git push -u origin main
```

### 2. 在Vercel上导入项目

1. 访问 [Vercel官网](https://vercel.com)
2. 点击 "Add New Project"
3. 选择你的GitHub仓库
4. 配置项目设置：
   - 项目名称：可以设置为 `virtual-try-on`
   - 框架预设：自动检测为 Next.js
   - 根目录：保持默认
   - 构建命令：`npm run build`（自动填充）
   - 输出目录：`.next`（自动填充）

### 3. 配置环境变量

在Vercel项目设置中添加环境变量：

- 环境变量名称：`ARK_API_KEY`
- 环境变量值：你的火山引擎API密钥

### 4. 部署

点击 "Deploy" 按钮开始部署。部署完成后，你将获得一个访问URL。

## 部署方法二：使用Vercel CLI

### 1. 登录Vercel

在项目目录下执行：

```bash
vercel login
```

按照提示登录你的Vercel账号。

### 2. 部署项目

```bash
vercel
```

按照提示回答问题：
- `Set up and deploy ~?` → `Yes`
- `Which scope do you want to deploy to?` → 选择你的账号
- `Link to existing project?` → `No`
- `What's your project's name?` → 输入项目名称，如 `virtual-try-on`
- `In which directory is your code located?` → `./`
- `Want to modify these settings?` → `No`

### 3. 部署到生产环境

```bash
vercel --prod
```

### 4. 配置环境变量

在Vercel Dashboard中添加环境变量 `ARK_API_KEY`，或者使用CLI：

```bash
vercel env add ARK_API_KEY
```

按照提示输入你的API密钥。

## 部署后验证

部署完成后，访问Vercel提供的URL，检查：

1. 首页是否正常加载
2. 尝试上传图片功能是否正常
3. API调用是否成功

## 常见问题

### 构建失败

- 确保所有依赖都在 `package.json` 中
- 检查 `next.config.js` 配置是否正确

### API密钥问题

- 确保在Vercel中正确设置了 `ARK_API_KEY` 环境变量
- 重新部署项目以应用环境变量更改

### 图片上传问题

- 确保Next.js的API路由正确配置
- 检查文件大小限制

## 自定义域名

如果你想使用自定义域名：

1. 在Vercel项目设置中添加域名
2. 按照提示配置DNS记录
3. 等待DNS生效

## 更新部署

每次你向GitHub仓库推送代码，Vercel会自动重新部署。

## 回滚部署

如果新部署出现问题，可以在Vercel Dashboard中回滚到之前的部署版本。
