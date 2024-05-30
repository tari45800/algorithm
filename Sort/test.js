const solution = (m) => {
  return m < 5500 ? [0, m] : [~~(m / 5500), m % 5500];
};
console.log(solution(150000));

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
