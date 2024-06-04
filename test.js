// ========================================================================================================================

// 가장 큰 수 찾기

const solution = (n) => {

};
console.log(solution("cccCCC"));
/*
*/

// ========================================================================================================================
/*
// 대문자와 소문자

const solution = (n) => {
  let total = ''
  for(const e of n ){
    total += e === e.toUpperCase() ? e.toLowerCase() :e.toUpperCase()
  }

  return total
};
console.log(solution("cccCCC"));
*/
/*

// 암호 해독
// 
const solution = (n, c) => {
  
  const total = [...n].reduce((acc, cur, idx) => { 
    if((idx +1) % c === 0){
      return acc + cur 
    }
    return acc;
  },"")

  return total
};
console.log(solution("dfjardstddetckdaccccdegk", 4));
*/

// ========================================================================================================================

/*
const solution = (n) => {
  let total = 0;

  for(const e of n){
    if(!isNaN(e)){
      total += Number(e);
    }
  }

  return total;

};
console.log(solution("aAb1B2cC34oOp"));

// 기가 맥히는 풀이
// 스트링도 스프레드가 가능하구나...
function solution(my_string) {
    return [...my_string].reduce((acc,cur)=>Number(cur) ? +acc + +cur : acc, 0)
}


*/
// ========================================================================================================================
/*

// 가위 바위 보
// 가위 2, 바위 0, 보 5
// 2 0
// 0 5
// 5 2
const solution = (n) => {

    let total = ''
    for(const e of n){
    
      if(e == 2){
        total += 2
      }

      if(e == 0){
        total += 5
      }

      if(e == 5){
        total += 2
      }
    }

    return total

};
console.log(solution(24));


// 기가막힌 풀이
function solution(rsp) {
  let arr = {
      2: 0,
      0: 5,
      5: 2
  };
  var answer = [...rsp].map(v => arr[v]).join("");
  return answer;
}
*/
// ========================================================================================================================

/*
// 개미 군단
// 최소한의 더하기로 n을 만들어라
// 장 5 병 3 일 1
// 총 병력 변수

// n을 5로 나눈다. 
// 나눈 값의 소숫점을 버림해서 병력 수에 더 한다.

// 나머지가 5보다 이하라면 3으로 나눈다.
// 나눈 값의 소숫점을 버림해서 병력 수에 더 한다.

// 나머지가 3보다 이하라면 1로 나눈다.
// 나눈 값을 병력 수에 더 한다.

const solution = (n) => {

  let total = 0;

  arr = [5, 3, 1]
  arr.forEach(e => {
    if(n >= e){
      total += ~~(n / e);
      n = n % e;
    }
  });

  return total;
};
console.log(solution(24));

// 기가막힌 풀이
return Math.floor(hp/5)+Math.floor((hp%5)/3)+(hp%5)%3;
*/

// ========================================================================================================================

// 이차원 배열 공부하세요
/*
const solution = (n) => {
  //const arr = Array.from({ length: n }, () => Array(n).fill(0));
  // 종류
  const arr1 = Array.from(Array(5), () => new Array(2));
  const arr = new Array(5).fill(0).map(() => new Array(4));
  const arr5 = Array.from(new Array(ROW), (_) => new Array(COLUMN).fill(null));

  return arr;
};
console.log(solution(5));
*/

// ========================================================================================================================


// 2 3
// 3 5
// 4 7
// 5 9
/*
// 옷가게 할인 받기
const solution = (n) => {
  let discount = 0;

  if (n >= 500000) {
    discount = n * 0.2;
  } else if (n >= 300000) {
    discount = n * 0.1;
  } else if (n >= 100000) {
    discount = n * 0.05;
  }

  return n - discount;
};
console.log(solution(150000));
console.log(150000 * 0.05);
*/

// ========================================================================================================================


/*
// 피자 나눠 먹기
const solution = (n) => {
  return n % 7 === 0 ? n / 7 : ~~(n / 7 + 1);
};
console.log(solution(15));
// 올림으로 간단하게 해결 할 수 있다.
function solution(n) {
    return Math.ceil(n / 7)
}
*/

/*
const solution = (n) => {
  const a = [];
  for (let i = 1; i <= n; i += 2) {
    a.push(i);
  }

  return a;
};
console.log(solution(10));
*/
/*
const solution = (arr, left = 0, right = arr.length - 1) => {
  const pivot = arr[left];
  let startPointer = left;
  let endPointer = right;

  while (startPointer <= endPointer) {
    while (arr[startPointer] < pivot) {
      startPointer++;
    }

    while (pivot < arr[endPointer]) {
      endPointer--;
    }

    if (startPointer <= endPointer) {
      [arr[startPointer], arr[endPointer]] = [
        arr[endPointer],
        arr[startPointer],
      ];
      startPointer++;
      endPointer--;
    }
  }

  if (left < endPointer) {
    solution(arr, left, endPointer);
  }

  if (startPointer < right) {
    solution(arr, startPointer, right);
  }

  return arr[~~(arr.length / 2)];
};
const arr = [7, 3, 1, 10, 11, 2];
console.log(solution(arr));
*/
