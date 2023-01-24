function solution(quiz) {
  //수도코드
  //배열 만큼 반복한다.
  //배열의 반복횟수번째 요소를 공백을 기준으로 나눈다. 
  //두번째 요소를 판별해서 -면 빼기 +면 더하기 해준다.
  //값이 5번과 동일하다면 O 아니면 X를 리턴한다.
  var answer = [];
  let arr = [];

  
  for(let i in quiz){
      arr = quiz[i].split(' ');
      let a = Number(arr[0]);
      let b = Number(arr[2])
      
      if(arr[1] === "+"){
          a + b == arr[4] ? answer.push('O') :  answer.push('X')
      } else {
          a - b == arr[4] ? answer.push('O') :  answer.push('X')
      }
      
  }
  
  
  return answer;
}