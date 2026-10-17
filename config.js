// 生命同行营 / Life Together 网站设置（Site settings）
window.CONFIG = {
  // 1 = 日历上显示所有已经生成的内容（包括未来的日期）
  // 0 = 只显示截至今天为止的内容；今天的内容到 publishTime 才发布
  isAllContentDisplayed: 0,

  // isAllContentDisplayed = 0 时，当天内容的发布时间（24 小时制，"22:00" = 晚上 10:00）
  publishTime: "22:00",

  // 用哪个时区判断“今天”和发布时间。
  // "America/Toronto" = 所有读者都按多伦多时间同时看到；"" = 按每位读者自己设备的本地时间
  timeZone: "America/Toronto",

  // 每一期的开始和结束日期（"年-月-日"，含首尾两天），按时间先后排列。
  // 名称自动按顺序生成：第一期 / Session 1、第二期 / Session 2……；以后有新的一期，在最后加一行。
  // 日历上的日期在哪一期之内，标题就显示哪一期；一期结束后（今天晚于结束日期），会自动出现这一期的「回顾」按钮。
  sessions: [
    { start: "2026-02-02", end: "2026-04-26" },   // 第一期，12 周
    { start: "2026-09-14", end: "2027-02-14" }    // 第二期，22 周
  ]
};
