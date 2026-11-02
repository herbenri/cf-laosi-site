// 1) 滚动到视口时淡入
const revealEls = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// 2) 随机金句
const quotes = [
  "「路西法，你去那边。」",
  "「这波我不亏。」——其实亏了。",
  "「我这不是菜，我这是在吸引火力。」",
  "「小弟们，听指挥。」然后全员冲反方向。",
  "「别急，等我复活。」——直播间已笑成一片。"
];

const quoteText = document.getElementById("quote-text");
const quoteBtn = document.getElementById("quote-btn");
let lastIndex = -1;

if (quoteText && quoteBtn) {
  quoteBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * quotes.length);
    if (quotes.length > 1 && i === lastIndex) i = (i + 1) % quotes.length;
    lastIndex = i;
    quoteText.textContent = quotes[i];
  });
}

// 3) 页脚年份自动更新
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
