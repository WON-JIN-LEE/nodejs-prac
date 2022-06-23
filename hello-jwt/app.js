const jwt = require("jsonwebtoken");

const token = jwt.sign({ test: "wonjin" }, "my-scrt-key", { expiresIn: "10s" });

console.log(token);

// verify는 토큰이 유효한지 검사를 한다.
const verify = jwt.verify(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXN0Ijoid29uamluIiwiaWF0IjoxNjQ1OTQ0MTQ4LCJleHAiOjE2NDU5NDQxNTh9.gDxpkzLK89EHP7nGfQGTYOBLEaobfX0kgG30EldqEeQ",
  "my-scrt-key"
);
// console.log(verify);

// decode는 시크릿 키가 없어도 페이로드 데이터를 볼 수 있다.
const decoded = jwt.decode(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXN0Ijoid29uamluIiwiaWF0IjoxNjQ1NTQ0MzI3fQ.QX8LgyZHc9IcVniqhGA3I35AeXeNXGvEstkIsyZ63hE"
);
console.log(decoded);
