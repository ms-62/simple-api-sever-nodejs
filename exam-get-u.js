
/*npm axios 라이브러리 설치 , 파이썬의 requests 와 유사하며 가장 널리 쓰임 외부 라이브러리 불러오기*/
const axios = require('axios');

//로그용 함수, 중첩구조분해, 출력은 해당 함수만 , 목적이 오직 출력뿐! 최대한 간단하게
const logRes = ({status,data:{ userId, id, title }}) => {
    console.log(`[${status}] User: ${userId}, ID:${id}, Title:${title}`);
};
//목적이 Id값의 검증을 위함 전체 response를 해두면 이후 data외에 다른 인자도 활용 가능하도록 
const validateData = (response) => {
    const {id, title} = response.data;
    const isValid = id === 1;
    console.log(isValid ? `일치함 Tilte:${title}`: `불일치`);
    return isValid; //결과 반환, 호출한 곳 사용위함
}
//GET 요청 보냄, config 사용하는 형태로 수정, 통신에만
const getPost = async () =>{
    try{
        const config = {
            method: 'get',
            url : 'https://jsonplaceholder.typicode.com/posts/1',
            timeout: 5000,
        };

        const response = await axios(config); 
        logRes(response);
        const valid_id = validateData(response);
        
        if (!valid_id) {
            console.warn("데이터 검증 실패 로직 확인 필요");
        }
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