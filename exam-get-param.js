
/*npm axios 라이브러리 설치 , 파이썬의 requests 와 유사하며 가장 널리 쓰임 외부 라이브러리 불러오기*/
const axios = require('axios');

//로그용 함수, 중첩구조분해, 출력은 해당 함수만 , 목적이 오직 출력뿐! 최대한 간단하게
const logRes = ({status,request,config}) => {
    console.log(`[${status}]`);
    console.log(`[config 설정 경로]:${config.url}`);
    console.log(`[실제 요청 경로]: ${request.path}`);
};

//GET 요청 보냄 parameter도 동일하게 config로 전달, 경로 보기, headers도 넣어보기
const getPost = async () =>{
    try{
        const config = {
            method: 'get',
            url : 'https://jsonplaceholder.typicode.com/comments',
            timeout: 5000,
            params : {
                "postId": 1
            },
            headers : {
                "Content-Type": "application/json",
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