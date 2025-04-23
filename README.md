# AI ToolMap 思维导图网站

这个项目基于GitHub Pages和Jekyll，自动将Markdown文件（tools.md）渲染成交互式思维导图。

## 项目特点

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

1. 安装Jekyll和依赖：

```bash
# 确保已安装Ruby
gem install bundler
bundle install
```

2. 本地运行网站：

```bash
bundle exec jekyll serve
```

3. 打开浏览器访问 `http://localhost:4000` 查看网站

## 更新思维导图

只需编辑`tools.md`文件并推送到GitHub，网站将自动更新：

```bash
git add tools.md
git commit -m "更新思维导图内容"
git push
```

## 自定义

- 修改`_config.yml`更新网站基本信息
- 编辑`assets/css/styles.css`自定义样式
- 修改`_layouts`目录下的文件自定义布局

## 注意事项

- Markdown文件的标题结构（#、##、###等）决定了思维导图的层级
- 建议使用清晰的层级结构，以获得最佳的思维导图效果
- 第一次部署后，GitHub Pages可能需要几分钟才能完成构建和部署