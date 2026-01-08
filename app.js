// Express 모듈 불러오기 (Python의 'from flask import Flask'와 유사)
const express = require('express');
const app = express();

// 라우팅 설정 (Python의 @app.get("/")과 동일), get 요청을 받을 때
app.get('/', (req, res) => {
  // 응답 반환 (Python의 return "Hello, World!"와 동일)
  res.send('Hello, World!');
});

// 서버 실행 설정
const PORT = 5151;
const HOST = '127.0.0.1'; 
//같은 네트워크인 다른 사람 접속용 : 0.0.0.0


app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});

/* 
파이썬의 debug=true와 같은 설정
nodemon 설치 : npm install -g nodemon
서버 오픈 시 nodemon app.js로 시작
*/