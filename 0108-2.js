function solution(M, N) {
  //수도코드 
  //M * N - 1

  var answer = M * N - 1;
  
  return answer;
}

alert(solution(2, 5));


// --------------------------------------------------

function solution(A, B) {
  var answer = -1;
  let arr = [];
  
  for(let j in A){
    arr.push(A[j]);
  }

  for(let i = 0; i < A.length; i++){
    arr.unshift(A.length-1)
    arr.pop()

    A = '';
    for(let x in arr){
      A = A + arr[x];
    }

    if(A === B){
      answer = 1
    } 
  }

  alert(A)
  alert(B)

  return answer;
}

solution("hello","ohell")