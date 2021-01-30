module.exports = {
  output: "api",
  template: "./",
  host: "http://119.23.188.113:7300",
  projects: [
    {
      id: "5ee6306142dc400020ce5d2e",
      name: "user", // 生成到 api/user 目录下。
      black: [
        "/query" // 排除 query 接口
      ]
    }
  ]
};