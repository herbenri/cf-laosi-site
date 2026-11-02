把照片放进这个文件夹，然后在 assets/data.js 的 GALLERY 里给对应项填上 file 路径，例如：

  { file: "images/team-1.jpg", caption: "夺冠夜 · 四门合照", tag: "" }

支持 jpg / png / webp。建议宽度 1600px 以内、单张 300KB 以下（Cloudflare Pages 单文件上限 25MB，但太大影响加载）。

注意：上传真人照片涉及肖像权，请确认你有使用权。
