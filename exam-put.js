
/*npm axios 라이브러리 설치 , 파이썬의 requests 와 유사하며 가장 널리 쓰임 외부 라이브러리 불러오기*/
const axios = require('axios');

//로그용 함수, 중첩구조분해, 출력은 해당 함수만 , 목적이 오직 출력뿐! 최대한 간단하게
const logRes = ({status,data:{ title, body }}) => {
    console.log(`[${status}]`);
    console.log(`Update Title:${title}`);
    console.log(`Update Body:${body}`);
};

//PUT 요청 보냄 
const getPost = async () =>{
    try{
        const config = {
            method: 'put',
            url : 'https://jsonplaceholder.typicode.com/posts/1',
            timeout: 5000,
            headers : {
                "Content-Type": "application/json",
            },
            data : {
                "id": 1,
                "userId": 1,
                "title": "간단하게 수정된 제목",
                "body": "간단하게 수정된 내용"
            }
        };

        const response = await axios(config); 
        logRes(response);
        return response.data; 
    }catch(error){
        console.error(`Error:${error.response ? error.response.status : 'Network Error'}`);
        throw error; // 에러를 상위로 전파
    }
}



getPost();
/*
터미널 환경 실행
node test.js
*/