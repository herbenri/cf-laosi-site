/* 全站渲染逻辑：首页群像墙 / 个人页 / 图库页，共用 data.js 里的数据 */
(function () {
  const byId = (id) => document.getElementById(id);

  /* 先试真图（xxx.jpg），没有就退回生成的插画（xxx.svg） */
  const photo = (p, cls) => `
    <img class="${cls}" src="images/members/${p.id}.jpg" alt="${p.name}" loading="lazy"
         onerror="this.onerror=null;this.src='images/members/${p.id}.svg'" />`;

  /* ---------- 首页：群像墙 ---------- */
  function renderWall() {
    const wall = byId("wall-grid");
    if (!wall) return;
    wall.innerHTML = CREW.map(
      (p, i) => `
      <a class="person${p.pending ? " is-pending" : ""}" href="member.html?id=${p.id}" data-theme="${p.theme}" style="--i:${i}">
        <span class="person-frame">
          ${photo(p, "person-photo")}
          ${p.flag ? `<em class="person-flag">${p.flag}</em>` : ""}
        </span>
        <span class="person-info">
          <strong>${p.name}</strong>
          <em>${p.role}</em>
          <span class="person-tags">${p.tags.map((t) => `<i>${t}</i>`).join("")}</span>
        </span>
      </a>`
    ).join("");
  }

  /* ---------- 首页：时间线 ---------- */
  function renderTimeline() {
    const list = byId("timeline");
    if (!list || typeof TIMELINE === "undefined") return;
    list.innerHTML = TIMELINE.map(
      (t) => `
      <li>
        <span class="when">${t.when}</span>
        <h3>${t.title}</h3>
        <p>${t.text}</p>
      </li>`
    ).join("");
  }

  /* ---------- 首页：切片组 ---------- */
  function renderEditors() {
    const box = byId("editors");
    if (!box || typeof EDITORS === "undefined") return;
    box.innerHTML = EDITORS.map((e) => `<li>${e}</li>`).join("");
  }

  /* ---------- 个人页 ---------- */
  function renderMember() {
    const root = byId("member-root");
    if (!root) return;

    const id = new URLSearchParams(location.search).get("id") || CREW[0].id;
    const idx = CREW.findIndex((c) => c.id === id);
    if (idx < 0) {
      root.innerHTML = `
        <div class="empty-page">
          <h1>没找到这个人</h1>
          <p>链接里的 id 对不上，回群像重新点一次吧。</p>
          <a class="btn btn-primary" href="index.html">回首页</a>
        </div>`;
      return;
    }

    const p = CREW[idx];
    const prev = CREW[(idx - 1 + CREW.length) % CREW.length];
    const next = CREW[(idx + 1) % CREW.length];
    root.dataset.theme = p.theme;
    document.title = `${p.name} · 四门 · CF老四粉丝站`;

    const opsBlock = p.operators && p.operators.length
      ? `<ul class="ops">
           ${p.operators
             .map(
               (o) => `<li><strong>${o.name}</strong><span class="op-type">${o.type}</span><p>${o.note}</p></li>`
             )
             .join("")}
         </ul>`
      : `<p class="empty-note">还没填。把你看到的常用干员发我，一个字段就能加上。</p>`;

    const clipsBlock = p.clips && p.clips.length
      ? `<div class="clips">
           ${p.clips
             .map(
               (c) => `<a class="clip" href="${c.url}" target="_blank" rel="noopener">
                 <span class="clip-src">${c.source}</span>
                 <h3>${c.title}</h3>
                 <p>${c.desc}</p>
                 <span class="clip-go">去看看 ↗</span>
               </a>`
             )
             .join("")}
         </div>`
      : `<p class="empty-note">还没有可靠的切片链接。你发我一条，我加进去。</p>`;

    const memesBlock = p.memes && p.memes.length
      ? `<div class="memes">${p.memes.map((m) => `<div class="meme"><span>${m}</span></div>`).join("")}</div>`
      : `<p class="empty-note">表情包还没做。真图丢进 <code>images/memes/</code> 就能显示。</p>`;

    root.innerHTML = `
      <nav class="crumbs">
        <a href="index.html">← 群像</a><span>/</span><span>${p.name}</span>
      </nav>

      ${p.pending ? `<p class="pending-bar">这位的资料还没查全 —— 公开渠道找不到可核实的信息，先占位，欢迎补充。</p>` : ""}

      <header class="m-hero">
        <div class="m-portrait">${photo(p, "person-photo")}</div>
        <div class="m-head">
          <p class="eyebrow">四门 · ${String(idx + 1).padStart(2, "0")}</p>
          <h1>${p.name}</h1>
          <p class="m-account">抖音号 ${p.douyinId || "待补充"} · 账号「${p.account}」</p>
          <ul class="tags">${p.tags.map((t) => `<li>${t}</li>`).join("")}</ul>
          ${p.quote ? `<blockquote class="m-quote">「${p.quote}」</blockquote>` : ""}
          <div class="m-cta">
            ${(p.links || [])
              .map((l) => `<a class="btn btn-primary" href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`)
              .join("")}
          </div>
        </div>
      </header>

      <dl class="m-facts">
        ${p.facts.map((f) => `<div><dt>${f.k}</dt><dd>${f.v}</dd></div>`).join("")}
      </dl>

      <section class="m-block">
        <h2>简介</h2>
        ${p.intro.map((t) => `<p>${t}</p>`).join("")}
      </section>

      <section class="m-block">
        <h2>擅长干员 <span class="hint">按打法定位推测，待本人确认</span></h2>
        ${p.opNote ? `<p class="op-note">${p.opNote}</p>` : ""}
        ${opsBlock}
      </section>

      <section class="m-block">
        <h2>有意思的切片 ${p.clips && p.clips.length ? `<span class="hint">${p.clips.length} 条 · 点开跳转</span>` : ""}</h2>
        ${clipsBlock}
      </section>

      <section class="m-block">
        <h2>表情包 <span class="hint">文字版 · 真图放 images/memes/</span></h2>
        ${memesBlock}
      </section>

      <nav class="pager">
        <a href="member.html?id=${prev.id}"><span>上一位</span><strong>${prev.name}</strong></a>
        <a class="next" href="member.html?id=${next.id}"><span>下一位</span><strong>${next.name}</strong></a>
      </nav>`;
  }

  /* ---------- 图库页 ---------- */
  function renderGallery() {
    const grid = byId("gallery-grid");
    if (grid && typeof GALLERY !== "undefined") {
      grid.innerHTML = GALLERY.map((g, i) => {
        const media = g.file
          ? `<img src="${g.file}" alt="${g.caption}" loading="lazy" />`
          : `<span class="shot-num">${String(i + 1).padStart(2, "0")}</span>`;
        return `
          <figure class="shot${g.file ? " has-img" : ""}">
            <div class="shot-ph">${media}</div>
            <figcaption>${g.caption}${g.tag ? `<em>${g.tag}</em>` : ""}</figcaption>
          </figure>`;
      }).join("");
    }

    const frame = byId("champ-video");
    if (frame && typeof CHAMP_VIDEOS !== "undefined" && CHAMP_VIDEOS.length) {
      const v = CHAMP_VIDEOS[0];
      frame.innerHTML = `
        <iframe
          src="https://player.bilibili.com/player.html?bvid=${v.bvid}&autoplay=0&high_quality=1&danmaku=1"
          title="${v.title}"
          scrolling="no"
          frameborder="0"
          allowfullscreen
          allow="autoplay; fullscreen; picture-in-picture"></iframe>`;
    }

    const links = byId("champ-links");
    if (links && typeof CHAMP_LINKS !== "undefined") {
      links.innerHTML = CHAMP_LINKS.map(
        (l) => `<li><a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a></li>`
      ).join("");
    }
  }

  /* ---------- 滚动淡入 ---------- */
  function initReveal() {
    const els = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((e) => io.observe(e));
  }

  /* ---------- 随机金句 ---------- */
  const QUOTES = [
    "「路西法，你去那边。」",
    "「这波我不亏。」——其实亏了。",
    "「我不是菜，我这是给对面机会。」",
    "「都听我指挥。」然后全员冲反方向。",
    "「别急，等我复活。」——直播间已笑成一片。"
  ];

  function initQuote() {
    const text = byId("quote-text");
    const btn = byId("quote-btn");
    if (!text || !btn) return;
    let last = -1;
    btn.addEventListener("click", () => {
      let i = Math.floor(Math.random() * QUOTES.length);
      if (QUOTES.length > 1 && i === last) i = (i + 1) % QUOTES.length;
      last = i;
      text.textContent = QUOTES[i];
    });
  }

  /* ---------- 启动 ---------- */
  renderWall();
  renderTimeline();
  renderEditors();
  renderMember();
  renderGallery();
  initReveal();
  initQuote();

  const year = byId("year");
  if (year) year.textContent = new Date().getFullYear();
})();
