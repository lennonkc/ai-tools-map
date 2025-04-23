// 思维导图渲染和控制脚本

document.addEventListener('DOMContentLoaded', function() {
  const { Markmap, loadCSS, loadJS } = window.markmap;
  
  // 加载CSS
  loadCSS();
  
  // 获取思维导图容器
  const svgEl = document.getElementById('mindmap');
  
  // 加载markdown文件
  fetch('tools.md')
    .then(response => response.text())
    .then(markdown => {
      // 创建思维导图实例
      const mm = Markmap.create(svgEl, {
        autoFit: true,         // 自动适应大小
        color: (node) => {     // 根据层级设置不同颜色
          const colors = ['#4285f4', '#ea4335', '#fbbc04', '#34a853', '#8e44ad', '#3498db', '#e67e22', '#1abc9c'];
          return colors[node.depth % colors.length];
        },
        duration: 500,         // 动画持续时间
        maxWidth: 300,         // 最大节点宽度
        initialExpandLevel: 2, // 初始展开层级
      }, markdown);
      
      // 添加缩放控制
      const zoomIn = document.createElement('button');
      zoomIn.innerText = '+';
      zoomIn.className = 'zoom-control zoom-in';
      zoomIn.addEventListener('click', () => {
        const { transform } = mm.state;
        mm.setData({
          ...mm.state,
          transform: {
            ...transform,
            k: transform.k * 1.2,
          },
        });
      });
      
      const zoomOut = document.createElement('button');
      zoomOut.innerText = '-';
      zoomOut.className = 'zoom-control zoom-out';
      zoomOut.addEventListener('click', () => {
        const { transform } = mm.state;
        mm.setData({
          ...mm.state,
          transform: {
            ...transform,
            k: transform.k / 1.2,
          },
        });
      });
      
      const resetZoom = document.createElement('button');
      resetZoom.innerText = '⟲';
      resetZoom.className = 'zoom-control zoom-reset';
      resetZoom.addEventListener('click', () => {
        mm.fit();
      });
      
      const zoomControls = document.createElement('div');
      zoomControls.className = 'zoom-controls';
      zoomControls.appendChild(zoomIn);
      zoomControls.appendChild(resetZoom);
      zoomControls.appendChild(zoomOut);
      
      const container = document.querySelector('.mindmap-container');
      container.appendChild(zoomControls);
      
      // 添加全屏控制
      const fullscreenBtn = document.createElement('button');
      fullscreenBtn.innerText = '⛶';
      fullscreenBtn.className = 'fullscreen-control';
      fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          container.requestFullscreen().catch(err => {
            alert(`全屏模式错误: ${err.message}`);
          });
        } else {
          document.exitFullscreen();
        }
      });
      
      container.appendChild(fullscreenBtn);
      
      // 添加交互提示
      const tooltipEl = document.createElement('div');
      tooltipEl.className = 'mindmap-tooltip';
      tooltipEl.innerHTML = '提示: 点击节点展开/折叠, 拖动移动视图, 滚轮缩放';
      tooltipEl.style.opacity = '1';
      container.appendChild(tooltipEl);
      
      // 3秒后隐藏提示
      setTimeout(() => {
        tooltipEl.style.opacity = '0';
        setTimeout(() => {
          tooltipEl.style.display = 'none';
        }, 1000);
      }, 5000);
    })
    .catch(error => {
      console.error('加载markdown文件失败:', error);
      svgEl.innerHTML = '<p class="error-message">加载思维导图失败，请检查文件路径</p>';
    });
});