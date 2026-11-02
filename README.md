# CF老四 &amp; 四门 · 粉丝小站

一个用来练手的**纯静态网站**：三个 HTML 页面 + 一个 CSS + 两个 JS，没有框架、没有构建步骤。
正好适合用 **GitHub 存代码 + Cloudflare Pages 自动发布**。

站点结构：**首页群像墙**（悬停放大、点击进入个人页）→ **成员个人页**（简介 / 擅长干员 / 切片 / 表情包）→ **图库页**（夺冠视频 + 照片墙）。

内容方向：抖音主播 **CF老四**（账号「CF老四（盼之没毛病）」，粉丝 360 万+）——ID 前面挂着 CF，靠《三角洲行动》站稳头部。
围绕他的圈子叫 **四门**：常驻有元帅路西法（苏州超级武将杯 S2 冠军）、小艺、小扑、观赏、水尊，另外还有一批切片作者。

> ⚠️ 数据取自抖音主页公开显示（2026 年 11 月），会随时间变动；成员介绍里标了"未核实"的地方请自己再确认一遍。本站为粉丝向示例项目，不代表任何官方账号。

---

## 一、项目结构

```
cf-laosi-site/
├── index.html          ← 首页：hero + 群像墙 + 数据条 + 时间线 + 切片组 + 金句
├── member.html         ← 个人页模板（?id=laosi / luxifa / xiaoyi / xiaopu / guanshang / shuizun）
├── gallery.html        ← 图库：夺冠视频（B 站嵌入）+ 照片墙
├── assets/
│   ├── data.js         ← ★ 所有人的资料都在这里：简介、干员、切片、表情包、图库清单
│   ├── app.js          ← 渲染三张页面 + 滚动淡入 + 随机金句
│   └── style.css       ← 全部样式（配色、布局、悬停放大、响应式）
├── images/             ← 放你自己的照片（图库页从那读取）
├── .gitignore
└── README.md
```

**改内容基本只需要动 `assets/data.js`** —— 加一个成员就是往 `CREW` 数组里加一个对象，首页、个人页、上下页导航会自动跟着变。

**为什么用纯静态？** 因为 Cloudflare Pages 最喜欢这种项目：不需要 `npm install`、不需要 `npm run build`，构建命令留空，直接把文件传上去就能访问。等以后想上 Vue/React 再加构建步骤也不迟。

---

## 二、第 0 步：本地先跑起来看看

三种方式，任选一种：

1. **最简单**：在资源管理器里双击 `index.html`，浏览器直接打开。
2. **VS Code**：装 `Live Server` 插件 → 右键 `index.html` → Open with Live Server（改代码自动刷新）。
3. **命令行**（你已经装了 Node）：
   ```powershell
   cd E:\working\slef\cf-laosi-site
   npx serve .
   ```
   然后打开它给的地址（一般是 `http://localhost:3000`）。

---

## 三、第 1 步：把内容改成你自己的

| 想改什么 | 改哪里 |
| --- | --- |
| 首页标题、简介、按钮 | `index.html` 里 `<h1>`、`.lede`、`.hero-actions` |
| **某个人的简介 / 干员 / 切片 / 表情包** | `assets/data.js` 里 `CREW` 数组对应那个人：`intro`（简介段落）、`operators`（干员）、`clips`（切片，含链接）、`memes`（表情包文字）、`facts`（数据格） |
| 加一个新成员 | 在 `CREW` 里复制一个对象改 `id` / `name` / `char` / `theme`，首页和上下页自动出现 |
| 成员卡片配色 | 对象的 `theme` 字段：`orange` `gold` `cyan` `violet` `teal` `pink` |
| 时间线 | `assets/data.js` 里的 `TIMELINE` |
| 切片组名单 | `assets/data.js` 里的 `EDITORS` |
| 图库照片 | 图片放进 `images/`，再把 `GALLERY` 对应项的 `file` 写成 `"images/xxx.jpg"` |
| 图库的夺冠视频 | `assets/data.js` 里的 `CHAMP_VIDEOS`（填 B 站 `bvid`）和 `CHAMP_LINKS` |
| 金句 | `assets/app.js` 里的 `QUOTES` |
| 配色（橙 → 换别的色） | `assets/style.css` 顶部 `:root` 里的 `--brand` / `--brand-2` |
| 顶部“示例站点”提示条 | 删掉 `index.html` 里 `<div class="ribbon">…</div>` 那一行 |

改完在浏览器里刷新一下，看得顺眼再往下走。

---

## 四、第 2 步：在 GitHub 建一个空仓库

1. 登录 [github.com](https://github.com)，右上角 **+** → **New repository**。
2. 填写：
   - **Repository name**：`cf-laosi-site`（和本地文件夹同名，好记）
   - **Description**：随便写，比如 `CF老四粉丝小站`
   - 可见性：**Public**（公开，展示用）或 **Private**（私有，Pages 一样能部署）
   - **不要**勾选 "Add a README file"、".gitignore"、license —— 全都留空。
3. 点 **Create repository**，会看到一个空仓库页面，记住那条 HTTPS 地址：
   `https://github.com/你的用户名/cf-laosi-site.git`

> 为什么让仓库保持空的？因为本地已经有代码了，仓库里再初始化一次会冲突，多一步合并很麻烦。

---

## 五、第 3 步：把本地代码推上去

在项目文件夹里执行（PowerShell）：

```powershell
cd E:\working\slef\cf-laosi-site

git init -b main
git add .
git commit -m "feat: 初始化 CF老四粉丝小站"

# 把 <你的用户名> 换成真实的
git remote add origin https://github.com/<你的用户名>/cf-laosi-site.git
git push -u origin main
```

### 关于推送时要求登录

Windows 版 Git 自带 **Git Credential Manager**，第一次 `git push` 会弹出浏览器让你登录 GitHub，登录完就自动记住，**以后不用再输**。

如果环境里没弹窗、只在命令行里问你要 `Username` / `Password`：

- 用户名：你的 GitHub 用户名
- 密码：**不能用账号密码**（GitHub 早就废了），要用 **Personal Access Token**：

  1. GitHub 右上角头像 → **Settings** → 左侧最下面 **Developer settings**
  2. **Personal access tokens** → **Tokens (classic)** → **Generate new token (classic)**
  3. Note 随便写，Expiration 选 90 天，勾上 **`repo`** 那一整个大项
  4. 生成后**立刻复制**（页面关了再也看不到），粘贴到命令行的 `Password:` 位置

推送成功后刷新 GitHub 页面，应该能看到 `index.html`、`assets/` 这些文件了。

---

## 六、第 4 步：Cloudflare Pages 连接仓库（核心步骤）

1. 打开 <https://dash.cloudflare.com/?to=/:account/workers-and-pages>（没账号先注册，免费）。
2. 点 **Create application** → 选 **Pages** 标签 → **Connect to Git**。
3. 选 **GitHub** → 点 **Install & Authorize**，授权时只勾这一个仓库就行（更安全）。
4. 选中 `cf-laosi-site` → **Begin setup**。
5. **Set up builds and deployments** 这一页是重点，按下面填：

   | 字段 | 填什么 |
   | --- | --- |
   | Project name | `cf-laosi-site`（决定域名：`cf-laosi-site.pages.dev`） |
   | Production branch | `main` |
   | Framework preset | **None** |
   | Build command | **留空** |
   | Build output directory | `/` |
   | Root directory (advanced) | **留空** |

   > 本项目 `index.html` 就在仓库根目录，所以输出目录填 `/`（表示仓库根）。
   > 如果你的页面放在 `public/` 子目录里，这里就填 `public`，同时把 `Root directory` 也设成对应目录。

6. 点 **Save and Deploy**，等 20～40 秒。
7. 构建日志走完，就能看到 **Production URL**：`https://cf-laosi-site.pages.dev` —— 手机也能直接开。

**第一版上线了。** 这一步不用买服务器、不用配 Nginx、不用管 HTTPS，证书是 Cloudflare 自动签的。

---

## 七、第 5 步：以后怎么更新

改完文件，三行命令：

```powershell
git add -A
git commit -m "更新：改文案"
git push
```

推上去 Cloudflare 就自动重新构建、自动切流量，**不用去后台点任何东西**。整个流程大约 30 秒。

另外两个好用的小功能：

- **分支预览**：新建分支 `git checkout -b dev` 推上去，Pages 会生成一个独立的预览地址（形如 `dev.cf-laosi-site.pages.dev`），改满意了再合并到 `main`。
- **回滚**：Cloudflare 项目页 → **Deployments** → 找到以前的某次部署 → **Rollback**，一键退回旧版本。

---

## 八、第 6 步（可选）：绑自己的域名

项目页 → **Custom domains** → **Set up a domain** → 输入你的域名，然后分两种情况：

- **域名的 DNS 已经托管在 Cloudflare**（推荐）：它会自动加一条 CNAME，等几分钟就生效，HTTPS 自动开。
- **域名在阿里云/腾讯云/GoDaddy 等别处**：按它给的提示，去域名商后台加一条 CNAME 记录，指向 `cf-laosi-site.pages.dev`。注意 CNAME 一般不能加在根域名（`example.com`）上，要么用 `www` 子域，要么把 DNS 整体迁到 Cloudflare。

---

## 九、常见坑（大概率你会碰到两三个）

| 现象 | 原因 / 解决 |
| --- | --- |
| 打开是 **404** | 构建输出目录填错了，或者 `index.html` 不在那个目录里。回项目 **Settings → Builds & deployments** 改。 |
| 本地正常，线上图片/样式丢了 | **大小写**问题。构建环境是 Linux，`Images/a.png` 和 `images/a.png` 是两个东西；本地 Windows 不区分所以看不出来。统一改成全小写。 |
| 推送被拒 `rejected` | 建仓库时勾了 README，远端有提交而本地没有。先 `git pull --rebase origin main` 再 `git push`。 |
| 推了但页面没变 | 去 **Deployments** 看这次构建是不是 **Failed**；成功了就 `Ctrl + F5` 强刷（Cloudflare 有缓存）。 |
| 中文乱码 | 文件存成 UTF-8（VS Code 右下角看一眼），并且 `<meta charset="utf-8">` 在 `<head>` 里。 |
| 命令找不到 `git` | 装 [Git for Windows](https://git-scm.com/download/win)，装完重开终端。 |

免费额度（2026 年现状）：Pages **每月 500 次构建、无限请求与带宽**，个人小站完全够；超过就是等额度刷新，不会扣钱。

---

## 十、想继续玩下去的方向

- 加一个 `404.html`，Cloudflare Pages 会自动认。
- 加个 `_headers` 文件，控制缓存和跨域头。
- 用 Cloudflare Analytics（免费）看访问量。
- 把 `assets/` 换成 Vite + Tailwind，体验一次“有构建步骤”的部署方式（构建命令 `npm run build`，输出目录 `dist`）。
- 加一个留言功能：接 Cloudflare Workers + D1，或者最省事地挂个第三方评论组件。

---

## 附录 A：零命令行部署（全程网页操作）

不想装 Git、不想碰终端的话，GitHub 这边可以完全在浏览器里做完。

### A1. 建空仓库

1. 登录 [github.com](https://github.com)，右上角 **+** → **New repository**。
2. Repository name 填 `cf-laosi-site`；Public / Private 都行（Pages 两种都能部署）。
3. **不要**勾 "Add a README file" / ".gitignore" / license。
4. **Create repository**。

### A2. 上传文件

1. 在空的仓库页面，点文件列表上方的 **Add file** → **Upload files**。
2. **先把本地项目复制一份到桌面**（这样能避开隐藏的 `.git` 文件夹），然后**双击进入** `cf-laosi-site` 文件夹，`Ctrl + A` 全选，把 `index.html`、`assets`、`README.md` 一起拖进浏览器上传区。
   > 关键：拖的是文件夹**里面的东西**。如果直接拖 `cf-laosi-site` 这个文件夹，GitHub 会多套一层目录（变成 `cf-laosi-site/index.html`），Cloudflare 的输出目录就得跟着改。
3. 等文件列表显示完，在下面的 **Commit message** 里写 `初始化站点`，点 **Commit changes**（如果按钮是 **Propose changes**，说明你选了新分支，改选直接提交到 `main`）。
4. 回到仓库首页确认结构：`index.html` 在根目录，`assets/` 里能看到 `style.css`、`data.js`、`app.js`。

网页上传的限制：单文件 25 MiB、一次最多 100 个文件——这个项目 30 个文件，够用。

### A3. 之后改内容

点开 `index.html` → 右上角**铅笔图标** → 直接在网页编辑器里改 → 底部 **Commit changes** → Cloudflare 自动重新部署，半分钟后刷新页面就能看到。

### ⚠️ 别和本地 Git 混用

本地这份项目已经有 Git 历史（3 个提交）。如果你先用了网页上传，又从本地 `git push`，两边历史对不上会被拒绝。二选一：

- **只用网页**：本地文件夹当作备份，别再 push。
- **想回到本地 Git**：把本地这份删掉，`git clone` 仓库到新目录，以后只在克隆出来的那个目录里改。

---

## 附录 B：照片与表情包上传说明

### B1. 成员照片 —— 放进去就自动生效，不用改代码

卡片和头像的图片地址是 `images/members/<id>.jpg`，加载失败才回落到同名的 `.svg` 插画。
所以**你只要把真照片命名成 `<id>.jpg` 丢进 `images/members/`，刷新页面就换好了。**

> **更省事的做法**：把照片丢进项目**同级**的 `photos-inbox\` 文件夹（文件名就是 id，随便什么尺寸、jpg/png 都行），
> 然后双击 `tools\import-photos.cmd`。
> 脚本会自动中心裁切 → 压缩成 600×800 的 jpg → 改名丢到 `images/members\`，你什么都不用算。
> 处理完的源图会移到 `photos-inbox\_done\`，确认没问题再删。
>
> 图库图同理：文件名用 `01`~`09`，会被裁成 1200×900 放进 `images/shots\`。
>
> `tools\` 和 `photos-inbox\` 在站点仓库**外面**（和 `cf-laosi-site` 同级），不会传到 GitHub。

命名对照表（`id` 就是个人页链接里的那个 `?id=`）：

| id | 人名 | 照片放这里 |
| --- | --- | --- |
| `laosi` | CF老四 | `images/members/laosi.jpg` |
| `luxifa` | 元帅路西法 | `images/members/luxifa.jpg` |
| `xiaoyi` | 小艺 | `images/members/xiaoyi.jpg` |
| `xiaopu` | 小扑 | `images/members/xiaopu.jpg` |
| `guanshang` | 观赏 | `images/members/guanshang.jpg` |
| `shuizun` | 水尊 | `images/members/shuizun.jpg` |
| `zhenzhenbao` | 臻臻宝 | `images/members/zhenzhenbao.jpg` |
| `xiaohanbao` | 小涵宝 | `images/members/xiaohanbao.jpg` |
| `chunzhen` | 纯真 | `images/members/chunzhen.jpg` |
| `shanguang` | 闪光大王 | `images/members/shanguang.jpg` |
| `yaoyao` | 瑶瑶 | `images/members/yaoyao.jpg` |
| `king08` | 08king | `images/members/king08.jpg` |

**规格建议**：竖版 3:4（比如 600×800），单张 300KB 以内。图片会被裁成竖版铺满卡片，所以人尽量放中间。
`.jpg` / `.png` / `.webp` 都能用，但代码里写死的是 `.jpg` —— 想用 png 就把 `assets/data.js` 里对应人的路径改掉，或者直接用在线工具转成 jpg 最省事。

### B2. 图库照片

`images/shots/01.jpg` ~ `09.jpg` 对应图库页的九格，标题在 `assets/data.js` 的 `GALLERY` 里改：

```js
{ file: "images/shots/01.jpg", caption: "夺冠夜 · 四门合照", tag: "" }
```

`tag` 留空就不显示角标（现在是「待替换」）。想加第 10 张就复制一行，编号接着往下排。
图库建议横版 4:3，宽度 1600px 以内。

### B3. 表情包

现在个人页的「表情包」是**文字卡**（`assets/data.js` 里每个人的 `memes` 数组）。
想换成真实图片，需要把那段渲染改成图片网格 —— 跟我说一声，或者自己改 `assets/app.js` 里 `memesBlock` 那段，把 `<div class="meme"><span>文字</span></div>` 换成 `<img>` 即可。

### B4. 上传后没生效？按顺序查

1. **文件名大小写**：`Laosi.jpg` ≠ `laosi.jpg`，构建环境是 Linux，区分大小写。
2. **放错层级**：必须是 `images/members/laosi.jpg`，不是 `images/laosi.jpg`。
3. **扩展名**：代码写的是 `.jpg`，`.jpeg` 不认。
4. **缓存**：Cloudflare 有缓存，`Ctrl + F5` 强刷，或者等一分钟。
5. **真没上传成功**：去 GitHub 仓库点进 `images/members/` 看文件在不在。

### B5. 版权提醒

真人照片请确认你有使用/传播的权利（本人授权、或你自己的直播截图）。
这个站是粉丝向的公开页面，别放来源不明的图片，也别挂商业广告 —— 那性质就变了。

---

## 许可

页面代码可自由使用；人物相关内容属于原作者，本站仅为粉丝向示例，请勿冒充官方。
