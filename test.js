function solution(n) {
  var answer = [];

  n = n.toString();
  
  for(let i of n){
      i = Number(i);
      answer.unshift(i);
  }


  return answer;
}

function solution(num) {
  var answer = '';
  
  num % 2 === 1 ? answer = "Odd" : answer = "Even"
  
  
  return answer;
}