# PreciseFlow Project Website

专业的学术论文展示网站，采用黑白极简风格设计。

## 📁 文件结构

```
website/
├── index.html          # 主页面
├── style.css           # 样式表
├── script.js           # 交互脚本
└── README.md          # 说明文档
```

## 🎨 设计特点

- **黑白极简风格**：纯黑背景 + 白色文字，专业学术感
- **紫色强调色**：#8D85E5 用于高亮关键信息
- **响应式设计**：完美适配桌面、平板、手机
- **流畅动画**：平滑滚动、淡入效果、悬停交互
- **视频对比**：并排展示原始视频和编辑结果

## 📝 如何添加内容

### 1. 添加 Teaser 图片/视频

替换 `.teaser-placeholder` 部分：

```html
<!-- 替换这部分 -->
<div class="teaser-placeholder">
    <p>Teaser Video / Image Placeholder</p>
    <span>Your main visual showcase will go here</span>
</div>

<!-- 改为 -->
<video autoplay loop muted playsinline>
    <source src="your-teaser-video.mp4" type="video/mp4">
</video>
<!-- 或者 -->
<img src="your-teaser-image.jpg" alt="PreciseFlow Teaser">
```

### 2. 添加方法图示

替换 `.framework-placeholder` 和 `.method-placeholder`：

```html
<img src="framework-diagram.png" alt="Framework Overview">
```

### 3. 添加视频对比

替换 `.video-placeholder` 部分：

```html
<div class="comparison-slider">
    <div class="video-container">
        <video autoplay loop muted playsinline>
            <source src="source-video.mp4" type="video/mp4">
        </video>
    </div>
    <div class="video-container">
        <video autoplay loop muted playsinline>
            <source src="edited-video.mp4" type="video/mp4">
        </video>
    </div>
</div>
```

### 4. 更新论文链接

当 arXiv 发布后，更新这部分：

```html
<!-- 移除 btn-disabled 类并添加真实链接 -->
<a href="https://arxiv.org/abs/XXXX.XXXXX" class="btn">
    <svg>...</svg>
    Paper
</a>
```

### 5. 更新 BibTeX

```html
<pre><code>@article{chen2025preciseflow,
  title={PreciseFlow: Stabilizing the Editing Signal for Flow-Based Video Editing},
  author={Chen, Ze and Chen, Lan and Li, Yuanhang and Mao, Qi},
  journal={arXiv preprint arXiv:2501.XXXXX},
  year={2025}
}</code></pre>
```

## 🚀 部署到 GitHub Pages

1. 将 `website` 文件夹内容推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 `main` 分支和 `/ (root)` 目录
4. 网站将发布到 `https://cuc-mipg.github.io/PreciseFlow.github.io/`

## 🎥 视频格式建议

- **格式**：MP4 (H.264 编码)
- **分辨率**：480x832 或 480x864（竖屏，宽x高）
- **帧率**：16 fps
- **文件大小**：尽量压缩到 3-5MB 以下
- **时长**：3-10 秒的循环片段效果最佳

### 视频压缩命令（FFmpeg）

针对你的竖屏视频规格，使用以下命令压缩：

```bash
# 保持原始分辨率和帧率
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow -r 16 output.mp4

# 如果文件还是太大，可以调整 crf 值（23-30，数值越大压缩越多）
ffmpeg -i input.mp4 -vcodec libx264 -crf 30 -preset slow -r 16 output.mp4
```

## 🎨 自定义配色

如需修改配色方案，编辑 `style.css` 中的 CSS 变量：

```css
:root {
    --color-accent: #8D85E5;  /* 强调色 */
    --color-black: #000000;   /* 背景色 */
    --color-white: #ffffff;   /* 文字色 */
}
```

## 📱 浏览器兼容性

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 💡 提示

1. **图片优化**：使用 WebP 格式可以减小文件大小
2. **视频自动播放**：需要添加 `muted` 属性才能在大多数浏览器中自动播放
3. **加载速度**：考虑使用懒加载（lazy loading）优化大文件
4. **SEO**：记得更新 `<meta>` 标签中的描述信息

## 📧 联系方式

如有问题，请联系：MIPG, Communication University of China

---

**祝你的论文展示成功！** 🎉
