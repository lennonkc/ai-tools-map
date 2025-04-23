# AI ToolMap 思维导图网站

这是一个简单的纯静态网站，用于展示AI工具生态系统的思维导图。

## 项目特点

- 纯静态实现，无需Jekyll或其他动态框架
- 自动将Markdown文件转换为交互式思维导图
- 简洁美观的界面设计
- 支持缩放、展开/折叠、全屏显示等功能
- 响应式设计，适配各种设备
- GitHub Pages自动部署

## 部署指南

### 在GitHub上设置

1. 将此项目推送到GitHub仓库：

```bash
git init
git add .
git commit -m "初始化项目"
git branch -M main
git remote add origin 你的GitHub仓库地址
git push -u origin main
```

2. 在GitHub仓库设置中启用GitHub Pages：
   - 进入仓库的Settings标签页
   - 在左侧导航栏找到Pages选项
   - 在Source部分，选择main分支作为源
   - 保存设置，GitHub将自动构建并部署网站

### 本地开发调试

1. 使用任意HTTP服务器运行网站：

```bash
# 使用Python的内置HTTP服务器
python -m http.server
# 或者使用Python3
python3 -m http.server
```

2. 打开浏览器访问 `http://localhost:8000` 查看网站

## 更新思维导图

只需编辑`tools.md`文件并推送到GitHub，网站将自动更新：

```bash
git add tools.md
git commit -m "更新思维导图内容"
git push
```

## 项目结构

- `index.html`: 主页面，包含思维导图渲染
- `about.html`: 关于页面
- `tools.md`: 思维导图的Markdown内容源文件
- `assets/`: 样式表和JavaScript文件
  - `css/styles.css`: 网站样式
  - `js/mindmap.js`: 思维导图渲染脚本

## 注意事项

- Markdown文件的标题结构（#、##、###等）决定了思维导图的层级
- 建议使用清晰的层级结构，以获得最佳的思维导图效果
- 如果修改了JavaScript或CSS文件，确保刷新浏览器缓存以查看更改