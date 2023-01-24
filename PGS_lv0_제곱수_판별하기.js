function solution(n) {
  //수도코드
  //n의 제곱근을 1로 나눴을때 나머지가 0이라면 정수
  
  var answer = 2;
  if(Math.sqrt(n) % 1 === 0){
      answer = 1; 
  } 
  
  return answer;
}