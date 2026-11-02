/* =========================================================
   四门成员数据 —— 改这个文件就能改全站
   id       : 个人页地址 member.html?id=这个 id
   theme    : 卡片配色 orange / gold / cyan / violet / teal / pink
   pending  : true 表示资料还没查到，页面会显示"待补充"样式
   photo    : 有真图就填路径（放 images/members/ 下），没有就留空，自动用生成的插画
   ========================================================= */

const CREW = [
  {
    id: "laosi",
    name: "CF老四",
    account: "CF老四（盼之没毛病）",
    douyinId: "主页未公开",
    douyinUrl: "https://m.douyin.com/share/user/MS4wLjABAAAAMG7MVWcsu3-zwvMli4R6zsggRJQR31pLd5PQdUU9K5k",
    char: "四",
    theme: "orange",
    role: "队长 / 直播间主控",
    flag: "老大",
    quote: "枪法不行，控场一流。",
    tags: ["团队老大", "节奏全在他手里"],
    facts: [
      { k: "粉丝", v: "约 360.7 万" },
      { k: "获赞", v: "约 1423 万" },
      { k: "开播", v: "午间 12:00–14:00" },
      { k: "定位", v: "团队老大 / 控场" }
    ],
    intro: [
      "先把话说清楚：三角洲他打得确实菜。枪法、意识、反应都不算顶尖，粉丝自己也天天在弹幕里刷「啥也不是」。但这支队伍的老大只有他一个。",
      "真正撑住直播间的是节奏——什么时候开团、什么时候整活、谁该说话谁该闭嘴、什么时候该让小弟上去表演，全由他把着。路西法、小艺这些人能被更多人看见，是因为大家先留在了老四的直播间，才顺着喜欢上这帮哥们。",
      "所以别拿 KD 衡量他。他是这个团的中控台：枪可以不响，场子不能冷。"
    ],
    operators: [],
    opNote: "这块就不比了。他自己也认——枪法不是他的活。",
    clips: [
      {
        title: "小兵：你瞎吗",
        source: "抖音",
        url: "https://m.douyin.com/share/video/7702137964683463951",
        desc: "跑贼慢剪的，弹幕最爱刷的那一句。"
      },
      {
        title: "老四讲四门人物之·跑贼快",
        source: "抖音",
        url: "https://m.douyin.com/share/video/7695981137125969202",
        desc: "挨个点评成员，控场能力的正面展示。"
      },
      {
        title: "老四五千自给自足单，差点一把结单",
        source: "抖音",
        url: "https://m.douyin.com/share/video/7659032417046367503",
        desc: "和路西法、小艺、安易游一起的局。"
      },
      {
        title: "接晚了一人三十个蹲起",
        source: "抖音",
        url: "https://m.douyin.com/share/video/7695724319502592357",
        desc: "白昼（老四切片）出品，节目效果拉满。"
      }
    ],
    memes: ["小兵：你瞎吗", "这波不亏", "啥也不是", "上车"],
    links: [
      { label: "抖音主页", url: "https://m.douyin.com/share/user/MS4wLjABAAAAMG7MVWcsu3-zwvMli4R6zsggRJQR31pLd5PQdUU9K5k" }
    ]
  },

  {
    id: "luxifa",
    name: "元帅路西法",
    account: "元帅路西法（三角洲行动）",
    douyinId: "未公开",
    douyinUrl: "https://www.douyin.com/search/%E5%85%83%E5%B8%85%E8%B7%AF%E8%A5%BF%E6%B3%95",
    char: "路",
    theme: "gold",
    role: "突击手 / 四门 001",
    flag: "武将杯 S2 冠军",
    tags: ["16 杀夺冠", "残局收割"],
    facts: [
      { k: "编号", v: "四门 001" },
      { k: "高光", v: "苏州超级武将杯 S2 总冠军" },
      { k: "决赛", v: "16 杀清图" },
      { k: "奖金", v: "百万级（赛事口径）" },
      { k: "名场面", v: "总裁 1V9" }
    ],
    intro: [
      "职业级出身转主播，打法极凶，残血还敢正面压。2026 年 11 月 1 日的苏州超级武将杯 S2，他从复活赛一路杀进决赛，最终 16 杀清图拿下总冠军——这是四门的第一个大冠军。",
      "夺冠那晚老四在直播间当场哽咽，弹幕刷了一整夜。他的名场面基本都跟残局有关：1V9、清图、最后一颗子弹反杀，弹幕直接管他叫「总裁」。"
    ],
    operators: [
      { name: "红狼", type: "突击", note: "正面压枪，跟他的打法最搭" },
      { name: "威龙", type: "突击", note: "推进 + 磁吸炸弹，残局好用" }
    ],
    clips: [
      {
        title: "恭喜路西法 16 杀拿下苏州超级武将杯 S2 冠军",
        source: "B站",
        url: "https://www.bilibili.com/video/BV1hRxE6BEko",
        desc: "决赛 16 杀夺冠的赛后合集。"
      },
      {
        title: "路西法夺冠老四哽咽！复活归来 16 杀夺冠",
        source: "B站",
        url: "https://www.bilibili.com/video/BV1a9xE6uE4E/",
        desc: "直播间那一晚最真实的反应。"
      },
      {
        title: "路西法十六杀成功清图夺得武将杯冠军",
        source: "B站",
        url: "https://www.bilibili.com/video/BV1p3xH6vECo",
        desc: "复盘向，讲这一路压力怎么扛过来的。"
      },
      {
        title: "路西法对象怎么来的",
        source: "抖音",
        url: "https://m.douyin.com/share/video/7692850256429468970",
        desc: "团建向切片，跟比赛完全两个画风。"
      }
    ],
    memes: ["总裁 1V9", "16 杀", "复活归来", "我做到了"],
    links: [
      { label: "抖音主页（搜索）", url: "https://www.douyin.com/search/%E5%85%83%E5%B8%85%E8%B7%AF%E8%A5%BF%E6%B3%95" }
    ]
  },

  {
    id: "xiaoyi",
    name: "小艺",
    account: "小艺（三角洲行动）",
    douyinId: "未公开",
    douyinUrl: "https://m.douyin.com/share/user/MS4wLjABAAAAe8Maa8ywdWsWseE_najmflB-_DzMJaM8kVHkY8LnBJGnhDkwrarCXaF_6EdBauI3",
    char: "艺",
    theme: "cyan",
    role: "机动位 / 跑图",
    flag: "最能跑的男人",
    tags: ["12 点档", "四门保镖"],
    facts: [
      { k: "开播", v: "每天 12:00–14:00" },
      { k: "角色", v: "跑图 / 机动 / 保镖位" },
      { k: "自述", v: "四门梦泪，三角洲最能跑的男人" },
      { k: "商务", v: "BBJU 电竞俱乐部" }
    ],
    intro: [
      "主页简介写得很直白：每天 12:00–14:00 直播，@CF老四 保镖，商务走 BBJU 电竞俱乐部。和老四几乎同一时段开播，粉丝常年在两个直播间来回切。",
      "机动、转点、拉扯是他的活。老四一喊「你去那边」，出去的基本就是他——跑得远、跑得快，还经常一个人跑进对面堆里，所以被叫「三角洲最能跑的男人」。"
    ],
    operators: [
      { name: "露娜", type: "侦查", note: "跑图位首选，信息全靠她" },
      { name: "威龙", type: "突击", note: "动力推进，转点速度最快" }
    ],
    clips: [
      {
        title: "CF小四你是干不过老艺的",
        source: "抖音",
        url: "https://m.douyin.com/share/video/7695416948671114155",
        desc: "四门切片出品，跑图位的高光时刻。"
      }
    ],
    memes: ["你去那边", "最能跑的男人", "12 点见", "我到了"],
    links: [
      { label: "抖音主页", url: "https://m.douyin.com/share/user/MS4wLjABAAAAe8Maa8ywdWsWseE_najmflB-_DzMJaM8kVHkY8LnBJGnhDkwrarCXaF_6EdBauI3" }
    ]
  },

  {
    id: "xiaopu",
    name: "小扑",
    account: "小扑（三角洲行动）",
    douyinId: "XpsttkX",
    douyinUrl: "https://m.douyin.com/share/user/MS4wLjABAAAAYEcIYw79Sh3KA4uyHDJbOOmNot-7EsIOFoYdAsXTKj9NfnINJYoxQ_ldDtkKuLzb",
    char: "扑",
    theme: "violet",
    role: "常驻队友 / 二创素材大户",
    flag: "扑神",
    tags: ["上镜担当", "表情管理失败"],
    facts: [
      { k: "抖音号", v: "XpsttkX" },
      { k: "粉丝", v: "约 28.9 万" },
      { k: "获赞", v: "约 109.7 万" },
      { k: "出圈梗", v: "我想她了" }
    ],
    intro: [
      "四门里比较「上镜」的一位，抖音号 XpsttkX，粉丝约 28.9 万。切片传播度很高——「扑神我走不出去，我想她了」那条二创单条拿到 2.6 万赞，弹幕现在看到他这一幕就自动接梗。",
      "平时跟着老四一起开黑，属于画面角落里永远有戏的人。话不算最多，但表情和反应很吃镜头，剪辑师最爱的那种素材体质。"
    ],
    operators: [
      { name: "蜂医", type: "支援", note: "跟着队伍走，负责把人捞起来" },
      { name: "露娜", type: "侦查", note: "补信息位，出镜时多半在打头阵" }
    ],
    clips: [
      {
        title: "扑神我走不出去，我想她了",
        source: "抖音",
        url: "https://m.douyin.com/share/video/7694466799572763240",
        desc: "2.6 万赞，小扑最出圈的一条二创。"
      }
    ],
    memes: ["我想她了", "扑神", "我走不出去", "别开麦"],
    links: [
      { label: "抖音主页", url: "https://m.douyin.com/share/user/MS4wLjABAAAAYEcIYw79Sh3KA4uyHDJbOOmNot-7EsIOFoYdAsXTKj9NfnINJYoxQ_ldDtkKuLzb" }
    ]
  },

  {
    id: "guanshang",
    name: "观赏",
    account: "观赏（三角洲行动）",
    douyinId: "未核实",
    douyinUrl: "https://www.douyin.com/search/%E8%A7%82%E8%B5%8F%20%E4%B8%89%E8%A7%92%E6%B4%B2",
    char: "赏",
    theme: "teal",
    role: "常驻队友",
    flag: "弹幕梗制造机",
    tags: ["连麦反应", "被禁团播一年"],
    facts: [
      { k: "标签", v: "弹幕梗 / 连麦反应" },
      { k: "出镜", v: "团队开黑、连麦" },
      { k: "定型梗", v: "观赏被禁团播一年" }
    ],
    intro: [
      "四门的常驻面孔之一，出圈方式比较特别：切片里流传着「观赏被禁团播一年」的说法，后来直接变成弹幕梗，他本人跟着这条梗一起被记住了。",
      "和老四连麦时的反应比操作更有戏——一句话能被剪成十种版本，四门二创里大量素材都出自他的表情和语气。"
    ],
    operators: [
      { name: "牧羊人", type: "工程", note: "布防型，适合稳着打" },
      { name: "蜂医", type: "支援", note: "团战里负责兜底" }
    ],
    clips: [
      {
        title: "观赏被禁团播一年",
        source: "抖音",
        url: "https://m.douyin.com/share/video/7688048633324817679",
        desc: "这条梗的源头，弹幕的起点。"
      }
    ],
    memes: ["被禁团播一年", "观赏已禁言", "我没说话", "真的假"],
    links: [
      { label: "抖音主页（搜索）", url: "https://www.douyin.com/search/%E8%A7%82%E8%B5%8F%20%E4%B8%89%E8%A7%92%E6%B4%B2" }
    ]
  },

  {
    id: "shuizun",
    name: "水尊",
    account: "水尊（三角洲行动）",
    douyinId: "未核实",
    douyinUrl: "https://www.douyin.com/search/%E6%B0%B4%E5%B0%8A%20%E4%B8%89%E8%A7%92%E6%B4%B2",
    char: "尊",
    theme: "pink",
    role: "语言尖刀 / 教学局常客",
    flag: "二创之王",
    tags: ["语言输出", "27.6 万赞"],
    facts: [
      { k: "高光", v: "二创「未闻花名-水尊」27.6 万赞" },
      { k: "标签", v: "语言输出 / 教学局" },
      { k: "自我介绍", v: "《你好！我叫水尊！》" }
    ],
    intro: [
      "自我介绍视频就叫《你好！我叫水尊！》。二创「未闻花名-水尊」重置版单条拿到 27.6 万赞，是四门里素材最多的人之一。",
      "微博上有人用「语言尖刀领域」形容他在教学局里的输出——嘴上的活比枪法更出名，跟老四连麦时经常负责当那个把话接到底的人。"
    ],
    operators: [
      { name: "威龙", type: "突击", note: "教学局里最常演示的干员" },
      { name: "红狼", type: "突击", note: "正面刚，适合讲思路" }
    ],
    clips: [
      {
        title: "未闻花名-水尊（重置版）",
        source: "抖音",
        url: "https://m.douyin.com/share/video/7683885916082965770",
        desc: "27.6 万赞，四门二创的天花板之一。"
      },
      {
        title: "你好！我叫水尊！",
        source: "抖音",
        url: "https://m.douyin.com/share/video/7664987585551526321",
        desc: "自我介绍向，一次把人设立住。"
      }
    ],
    memes: ["语言尖刀", "你好，我叫水尊", "听我说", "教学局"],
    links: [
      { label: "抖音主页（搜索）", url: "https://www.douyin.com/search/%E6%B0%B4%E5%B0%8A%20%E4%B8%89%E8%A7%92%E6%B4%B2" }
    ]
  },

  {
    id: "zhenzhenbao",
    name: "臻臻宝",
    account: "待补充",
    douyinId: "待补充",
    char: "臻",
    theme: "pink",
    role: "四门成员 / 主播",
    pending: true,
    tags: ["自己有直播", "资料待补充"],
    facts: [
      { k: "账号", v: "待补充" },
      { k: "直播", v: "B 站有整场回放" }
    ],
    intro: [
      "B 站能查到 2026 年 10 月的整场直播回放（录播号整理），说明她自己也开播，不只是出现在老四直播间里。",
      "抖音账号和具体定位还没核实到，先占位。"
    ],
    operators: [],
    clips: [
      {
        title: "直播回放 · 2026.10.23",
        source: "B站",
        url: "https://www.bilibili.com/video/BV1L1nh6vEbf/",
        desc: "录播号整理的整场回放。"
      }
    ],
    memes: []
  },

  {
    id: "xiaohanbao",
    name: "小涵宝",
    account: "小涵宝（东东电竞）",
    douyinId: "待补充",
    char: "涵",
    theme: "cyan",
    role: "四门成员",
    pending: true,
    tags: ["东东电竞", "资料待补充"],
    facts: [
      { k: "账号", v: "小涵宝（东东电竞）" },
      { k: "关联", v: "东东电竞" }
    ],
    intro: [
      "账号名从二创视频的 @ 里能确认到是「小涵宝（东东电竞）」——不是三角洲行动后缀，这个我之前写错了，已改正。",
      "和老四、纯真一起出现在「心动三角洲」舞蹈合集里，也在《游场漫游记》那条二创里被点名。具体的定位（跑图还是整活）还没查到可靠说法。"
    ],
    operators: [],
    clips: [
      {
        title: "心动三角洲 · 舞蹈合集",
        source: "抖音",
        url: "https://www.douyin.com/video/7695508202092426723",
        desc: "和老四、纯真同框的一条二创。"
      }
    ],
    memes: []
  },

  {
    id: "chunzhen",
    name: "纯真",
    account: "纯真（九月天的狗）",
    douyinId: "待补充",
    char: "真",
    theme: "violet",
    role: "四门成员",
    pending: true,
    tags: ["九月天的狗", "资料待补充"],
    facts: [
      { k: "账号", v: "纯真（九月天的狗）" },
      { k: "名场面", v: "「纯真你偷走了哥的人生」" }
    ],
    intro: [
      "账号名是「纯真（九月天的狗）」。老四在《游场漫游记》那条片子里那句「纯真你偷走了哥的人生」，把这条梗钉在了弹幕里——属于一句话被反复剪的典型。",
      "和老四、小涵宝一起出现在「心动三角洲」舞蹈合集。更细的定位还没查到。"
    ],
    operators: [],
    clips: [
      {
        title: "游场漫游记：纯真你偷走了哥的人生",
        source: "头条",
        url: "https://m.toutiao.com/w/1874991273966601/",
        desc: "老四原话出处，@ 了 CF老四、纯真、小涵宝。"
      }
    ],
    memes: []
  },

  {
    id: "shanguang",
    name: "闪光大王",
    account: "闪光大王（Flash King）",
    douyinId: "待补充",
    char: "闪",
    theme: "gold",
    role: "四门成员 / 主播",
    pending: true,
    tags: ["Flash King", "自己有直播"],
    facts: [
      { k: "账号", v: "闪光大王（Flash King）" },
      { k: "直播", v: "B 站有整场回放" }
    ],
    intro: [
      "B 站录播号用「Flash King」标注了他 2026 年 11 月 1 日的直播回放，说明他同样是自己开播的人。",
      "抖音账号和具体定位还没核实到，先占位。"
    ],
    operators: [],
    clips: [
      {
        title: "直播回放 · 2026.10.27",
        source: "B站",
        url: "https://www.bilibili.com/video/BV1vaxg6HEMk/",
        desc: "标题写作 Flash King。"
      }
    ],
    memes: []
  },

  {
    id: "yaoyao",
    name: "瑶瑶",
    account: "待补充",
    douyinId: "待补充",
    char: "瑶",
    theme: "teal",
    role: "四门成员",
    pending: true,
    tags: ["资料待补充"],
    facts: [{ k: "账号", v: "待补充" }],
    intro: ["名字来自你给的名单。公开渠道没搜到可核实的账号和名场面，先占位。"],
    operators: [],
    clips: [],
    memes: []
  },

  {
    id: "king08",
    name: "08king",
    account: "待补充",
    douyinId: "待补充",
    char: "08",
    theme: "orange",
    role: "四门成员",
    pending: true,
    tags: ["资料待补充"],
    facts: [{ k: "账号", v: "待补充" }],
    intro: ["名字来自你给的名单。公开渠道没搜到可核实的账号和名场面，先占位。"],
    operators: [],
    clips: [],
    memes: []
  }
];

/* 首页时间线 */
const TIMELINE = [
  { when: "2023", title: "CF 起号", text: "ID 前面挂着 CF，早期内容以《穿越火线》为主，先把镜头感和嘴上的节奏练了出来。" },
  { when: "2023–2024", title: "整活期", text: "据老观众回忆，中间试过狼人杀这类整活路线：直播间从两千来人慢慢爬到上万，最后才落到三角洲。" },
  { when: "2024.09", title: "换主战场：三角洲", text: "《三角洲行动》上线后重心整体搬过去，切片开始大量出圈，「CF老四」这个 ID 反而成了标签。" },
  { when: "2025", title: "四门成型", text: "路西法、小艺、小扑、观赏、水尊陆续成为固定班底，单人直播变成一群人整活；二创大赛开始成型。" },
  { when: "2026.11.01", title: "武将杯 S2 冠军", text: "路西法在苏州超级武将杯 S2 决赛 16 杀清图夺冠，老四在直播间当场哽咽——四门的第一个大冠军。" },
  { when: "现在", title: "午间开播，切片日更", text: "中午两点前基本能在直播间找到人，晚上是切片和二创的战场。人一直在，梗也一直在更新。" }
];

/* 切片组（不在出镜阵容里，但四门一半的名气是他们剪出来的） */
const EDITORS = [
  "CF老四（四门切片）",
  "老四门",
  "四门人物志（时光机）",
  "白昼（老四切片）",
  "711（方方电竞录屏组）",
  "小方砖",
  "Cc（老四的切片）",
  "跑贼慢",
  "威小龙切片",
  "SGA4（切片）"
];

/* 图库 —— 把真实图片放进 images/ 之后，改这里的 file 就能显示 */
const GALLERY = [
  { file: "images/shots/01.svg", caption: "夺冠夜 · 四门合照", tag: "待替换" },
  { file: "images/shots/02.svg", caption: "武将杯 S2 决赛现场", tag: "待替换" },
  { file: "images/shots/03.svg", caption: "直播间十万加", tag: "待替换" },
  { file: "images/shots/04.svg", caption: "四门第一次全员连麦", tag: "待替换" },
  { file: "images/shots/05.svg", caption: "老四的午间场", tag: "待替换" },
  { file: "images/shots/06.svg", caption: "路西法夺冠瞬间", tag: "待替换" },
  { file: "images/shots/07.svg", caption: "小艺的跑图日常", tag: "待替换" },
  { file: "images/shots/08.svg", caption: "小扑的表情包现场", tag: "待替换" },
  { file: "images/shots/09.svg", caption: "观赏与弹幕", tag: "待替换" }
];

/* 图库页的夺冠视频（B 站官方播放器嵌入） */
const CHAMP_VIDEOS = [
  {
    bvid: "BV1hRxE6BEko",
    title: "恭喜路西法 16 杀拿下苏州超级武将杯 S2 冠军",
    desc: "2026.11.01 决赛，16 杀清图，百万奖金。"
  }
];

const CHAMP_LINKS = [
  { label: "路西法夺冠老四哽咽 · 复活归来 16 杀", url: "https://www.bilibili.com/video/BV1a9xE6uE4E/" },
  { label: "路西法十六杀成功清图夺得武将杯冠军", url: "https://www.bilibili.com/video/BV1p3xH6vECo" },
  { label: "苏州超级武将杯 s2 路西法斩获总冠军", url: "https://www.bilibili.com/video/BV1xuxW6yEnZ" },
  { label: "四门第一箭！全局回放（29:27）", url: "https://search.bilibili.com/all?keyword=%E5%9B%9B%E9%97%A8%E7%AC%AC%E4%B8%80%E7%AE%AD" }
];
