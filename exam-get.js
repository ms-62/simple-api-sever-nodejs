
/*npm axios 라이브러리 설치 , 파이썬의 requests 와 유사하며 가장 널리 쓰임 외부 라이브러리 불러오기*/
const axios = require('axios');

//요청 url
const url = "https://jsonplaceholder.typicode.com/posts/1";

//GET 요청 보냄, 비동기 작업을 수행하는 함수 선언
async function fetchPostDetail() {
    try{
        const { status, data, headers } = await axios.get(url); //우측의 객체 보따리에서 더 세분화된 값을 해당하는 변수에 담아라
        //await 응답이 올 때 까지 기다려

        console.log(`[Status] ${status}`); //문자열 중간에 변수로 선언하는 방식 ${x} 파이썬의 f-string
        console.log(`[Content-Type] ${headers['content-type']}`);

        console.log(status);
        console.log(data.title);
         // 데이터 출력 (첨부파일의 id, title 등 접근)
        const { userId, id, title } = data; // 데이터 내부 항목도 분해 가능 2번 쪼개기?
        console.log(`User: ${userId}, ID: ${id}, Title: ${title}`);

         return data; // 다른 함수에서 사용할 수 있도록 반환
    }catch(error){ //?바로 이후는 True, :이후는 False
        const status = error.response ? error.response.status : 'Network Error';
        console.error(`Failed to fetch data: ${status}`);
        throw error; // 에러를 상위로 전파
    }
    
}

fetchPostDetail();
/*
터미널 환경 실행
node test.js
*/