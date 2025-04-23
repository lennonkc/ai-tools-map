// 思维导图渲染和控制脚本

// 定义渲染函数
function renderMindmap(markdown) {
  // 获取思维导图容器
  const svgEl = document.getElementById('mindmap');
  
  try {
    // 获取思维导图容器
    const container = document.getElementById('mindmap');
    
    // 创建 markmap 实例 - 修改为新版本的API
    const { Markmap, loadPlugins } = window.markmap;
    
    // 创建思维导图实例（不再需要loadCSS，直接使用Markmap）
    const mm = Markmap.create(container);
    
    // 解析 Markdown 内容
    const { Transformer } = window.markmapLib;
    const transformer = new Transformer();
    
    // 转换 markdown 内容为思维导图数据
    const { root } = transformer.transform(window.markdownContent);
    
    // 渲染思维导图
    mm.setData(root);
    mm.fit();
    
    // 可选：添加一些事件处理或其他设置
    window.addEventListener('resize', () => {
      mm.fit();
    });
    
    console.log('思维导图渲染成功');
  } catch (error) {
    console.error('渲染思维导图失败:', error);
    document.getElementById('mindmap').innerHTML = '<p class="error-message">渲染思维导图时出错</p>';
  }
}

// 等待markdown加载或DOM加载完成，两者中较晚的那个
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (window.markdownContent) {
      renderMindmap(window.markdownContent);
    } else {
      document.addEventListener('markdownLoaded', () => {
        renderMindmap(window.markdownContent);
      });
    }
  });
} else {
  if (window.markdownContent) {
    renderMindmap(window.markdownContent);
  } else {
    document.addEventListener('markdownLoaded', () => {
      renderMindmap(window.markdownContent);
    });
  }
}