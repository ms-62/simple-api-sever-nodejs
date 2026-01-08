
/*npm axios 라이브러리 설치 , 파이썬의 requests 와 유사하며 가장 널리 쓰임 외부 라이브러리 불러오기*/
const axios = require('axios');

//Post 요청 보냄, 비동기 작업을 수행하는 함수 선언
async function createPost() {
        //config로 정보 모아서 보내기
        const config = {
            method : 'post',
            url : 'https://jsonplaceholder.typicode.com/posts',
            data: {
                "title": "foo",
                "body": "bar",
                "userId": 1
            },
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 5000,
        };
        try {
            const response = await axios(config); // config만 전달
            console.log(response.status);
        } catch (error) {
            console.error(error.message);
        }
    
}

createPost();
/*
터미널 환경 실행
node test.js
*/