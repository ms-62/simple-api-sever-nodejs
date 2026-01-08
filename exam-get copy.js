
/*npm axios 라이브러리 설치 , 파이썬의 requests 와 유사하며 가장 널리 쓰임 */
const axios = require('axios');

//요청 url
const url = "https://jsonplaceholder.typicode.com/posts/1";

//GET 요청 보냄
async function fetchPostDetail() {
    try{
        //const response = await axios.get(url); 객체를 반복해서 호출하지않고, 필요한 속성만 변수로 뽑아 쓰기
        const { status, data, headers } = await axios.get(url);
        //응답 data출력
       /* console.log(response.data);
        //상태코드 출력
        console.log(response.status);
        //세부항목 출력
        console.log(response.data.userId);
        console.log(response.data.id);
        console.log(response.data.title);
        //헤더 정보
        console.log(response.headers['content-type']);*/
        console.log(status);
        console.log(data.title);
    }catch(error){ // 단순 에러만 확인하는 게 아니라 구체화 하기
        if(error.response)
            console.error(error);
    }
    
}

getData();
/*
터미널 환경 실행
node test.js
*/