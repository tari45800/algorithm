//============================================================================================================

// 원소들의 곱과 합
// 11:42
// 11:43

const solution = (n) => {
  let total = 0;

  if(n%2 === 1){
    for(let i = 1; i <= n; i+=2){
      total += i
    } 
  } else {
    for(let i = 2; i <= n; i+=2){
      total += i ** 2
    } 
  }

  return total
};

console.log(solution(7));
//============================================================================================================

// 원소들의 곱과 합
// 11:42
// 11:43
/*
const solution = (n) => {


  return flag ? a + b : a - b;
};

console.log(solution(7));

//============================================================================================================

// 원소들의 곱과 합
// 9:03
// 9:08
/*
const solution = (num_list) => {
  let a = 1;
  let b = 0;
  num_list.forEach((e) => {
    a *= e;
    b += e;
  });

  return a < b ** 2 ? 1 : 0;
};

console.log(solution([3, 4, 5, 2, 1]));
*/
//============================================================================================================

// 이어 붙인 수
// 11:26
// 11: 31
/*
const solution = (num_list) => {
  let odd = "";
  let even = "";
  num_list.forEach((e) => {
    if (e % 2 === 0) {
      even += e;
    } else {
      odd += e;
    }
  });

  return Number(odd) + Number(even);
};

console.log(solution([3, 4, 5, 2, 1]));
//============================================================================================================

// 마지막 두 원소
// 11:26
// 11:31
/*
const solution = (num_list) => {
  return [
    ...num_list,
    num_list[num_list.length - 2] < num_list[num_list.length - 1]
      ? num_list[num_list.length - 1] - num_list[num_list.length - 2]
      : num_list[num_list.length - 1] * 2,
  ];
};

console.log(solution([2, 1, 6]));

// 기가맥히는 풀이
function solution(num_list) {
    const [a, b] = [...num_list].reverse();
    return [...num_list, a > b ? (a-b):a*2];
}
//============================================================================================================

// 수 조작하기 1
// 10:49
// 11:12
/*
const solution = (n, control) => {
  const w = control.match(/w/g).length;
  const s = -control.match(/s/g).length;
  const d = control.match(/d/g).length * 10;
  const a = -control.match(/a/g).length * 10;

  return n + w + s + d + a;
};

console.log(solution(0, "wsdawsdassw"));
//============================================================================================================

// 글자 이어 붙여 문자열 만들기
// 10:28
// 10:33
/*
const solution = (my_string, index_list) => {
  const arr = index_list.map((e) => my_string[e]);
  return arr.join("");
};

console.log(
  solution("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7])
);
*/
//============================================================================================================

// 문자열 뒤의 n글자
// 9:39
// 9:42

/*
const solution = (my_string, n) => {
return my_string.slice(my_string.length-n,my_string.length)
};

console.log(solution('ProgrammerS123', '-11'));

// 기가맥히는 풀이
// 슬라이스 메서드의 매개변수가 음수인 경우에는 끝에서부터 셉니다.
function solution(my_string, n) {
    return my_string.substring(my_string.length - n);
}
*/
//============================================================================================================
/*
// 접미사인지 확인하기
// 9:28
// 9:35

const solution = (my_string, is_suffix) => {
  return Number(my_string.includes(is_suffix, my_string.length - is_suffix.length));
};

console.log(solution('banana', 'nan'));
// 기가맥히는 풀이
// 기본 기능을 활용하자;;
const solution = (str, suff) => str.endsWith(suff) ? 1 : 0
*/

//============================================================================================================
/*
// 문자열의 앞의 n글자
// 9:19
// 9:26

const solution = (my_string, n) => {
  const arr = [...my_string].filter((e, i) => i < n);
  return arr.join('');
};

console.log(solution('ProgrammerS123', 11));

// 기가맥히는 풀이
// 조금 더 기본 기능을 활용하자.
function solution(my_string, n) {
   return my_string.slice(0, n)
}
*/
//

// ============================================================================================================
// 배열 만들기 1
// 8:22
// 8:
/*
const solution = (n, k) => {
  const arr = [];
  for(let i = 1; i <= n; i++){
    if(i % k === 0){
      arr.push(i)
    }

  }
  return arr;
};

console.log(solution(10, 3));
*/
// ========================================================================================================================
// 카운트 다운
// 8:50
// 8:58
/*
const solution = (s, e) => {
  const arr = [];
  for(let i = s; i >= e; i--){
    arr.push(i)
  }
  return arr;
};

console.log(solution(10, 3));
*/
// ========================================================================================================================
// 첫 번째로 나오는 음수
// 8:34
// 8:46
/*
const solution = (arr) => {

  let i = 0

  while(arr[i] > 0){
    i++
  }

  return i === arr.length ? -1 : i
};

console.log(solution([12, 4, 15, 46, 38, -2, 15]));
*/
// ========================================================================================================================
// n의 배수 찾기
// 8:30
// 8:20
/*
const solution = (n, arr) => {
  return arr.filter(e => e % n === 0)

};

console.log(solution(3,	[4, 5, 6, 7, 8, 9, 10, 11, 12]));

*/
// ========================================================================================================================
//
//
// 가장 큰 수 찾기
/*
const solution = (n) => {
  let t = n[0];
  let i = 0
  n.forEach((e, idx)=> {
  if(e > t){
    t = e;
    i = idx;
  }
 });
 return [t, i]
};

console.log(solution([1, 8, 3, 2, 4]));

// 기똥 찬 풀이
function solution(array) {
    let max = Math.max(...array);
    return [max, array.indexOf(max)];
}

*/

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
