
/*npm axios 라이브러리 설치 , 파이썬의 requests 와 유사하며 가장 널리 쓰임 외부 라이브러리 불러오기*/
const axios = require('axios');

//요청 url
const url = "https://jsonplaceholder.typicode.com/posts";

//Post 요청 보냄, 비동기 작업을 수행하는 함수 선언
async function createPost() {
    try{
        const payload = {
            "title": "foo",
            "body": "bar",
            "userId": 1
        }
        const { status, data } = await axios.post(url, payload); //post로 data 보내기
        
        if(status === 201){
            
            console.log(`데이터 생성 성공! 결과코드:${status}`);
        }
        const {id, title, userId} = data;
        console.log(`[결과] 생성된 ID: ${id}, 제목: ${title}`);
        if(title === payload.title){
            console.log("데이터 일치 확인 완료");
        }
         return data; // 다른 함수에서 사용할 수 있도록 반환
    }catch(error){ //?바로 이후는 True, :이후는 False
        const status = error.response ? error.response.status : 'Network Error';
        console.error(`Failed to fetch data: ${status}`);
        throw error; // 에러를 상위로 전파
    }
    
}

createPost();
/*
터미널 환경 실행
node test.js
*/