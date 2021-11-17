const mysql = require('mysql');
const dotenv = require('dotenv');

// 비밀번호가 그대로 노출된다.
// dotenv 모듈을 이용해 환경변수를 사용한다.
// dotenv 모듈을 설치한다.
// npm install dotenv
// .env 파일을 읽는 config() 함수를 실행한다.

// const con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password'
// });

dotenv.config();

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DATABASE_PASSWORD
});

// MySQL 서버가 돌아가고 있어야 한다.
con.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected!');
});