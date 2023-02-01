function solution(ingredient) {
  //수도코드
    //i번째 부터 i+3번까지의 문자가 1231이라면
    //문자열을 ''으로 치환하고
    //i의 값을 -3한다.
var answer = 0;

  for(let i = 0; i < ingredient.length; i++){

    if(ingredient.slice(i, i+4).join('') === '1231'){
      i -= 3;
      ingredient.splice(i, 4)
      answer++
    }
  }
  
  return answer;
}

var r = [2, 1, 1, 2, 3, 1, 2, 3, 1];
console.log(solution(r));


function solution(ingredient) {
    let count = 0;

    for (let i = 0; i < ingredient.length; i++) {
        if (ingredient.slice(i, i + 4).join('') === '1231') {
            count++;
            ingredient.splice(i, 4);
            i -= 3;
        }
    }

    return count;
}