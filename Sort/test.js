// const quickSort = (arr) => {
// }

// const arr = [5, 3, 8, 4, 9, 1, 6, 2, 7, 10];
// const sortedArr = quickSort(arr);

// 수도코드
// 임의의 피봇을 정하고
// 피봇을 start와 end를 비교해서
// start가 피봇보다 작다면 다음 요소를 확인한다.
// end가 피봇보다 크다면 이전 요소를 확인한다.
// 만약 부합하지 않는다면 start와 end가 부합하지 않는다면
// 두 요소를 스왑한다.
// start와 end가 만날 때 까지 반복한다.
// 이때 pivot이 가리키는 데이터가 크면 만난 지점의 오른쪽에,
// 작으면 만난 지점의 왼쪽에 pivot이 가리키는 데이터를 삽입한다.
// 분리집합이 나누어 지면 반복한다.

// ===== 시작 =====
function quickSort(arr, left = 0, right = arr.length - 1) {
  // 만약 배열의 크기가 1보다 작거나 같으면 재귀를 멈춤
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[left];

  // i는 start 포인터
  let i = left;

  // j는 end 포인터
  let j = right;

  // start 포인터와 end 포인터가 엇갈릴 때 까지 반복
  while (i <= j) {
    // start 포인터가 피봇보다 크거나 같다면 멈춘다
    while (arr[i] < pivot) {
      i++;
    }

    // end 포인터가 피봇보다 작거나 같으면 멈춘다.
    while (pivot < arr[j]) {
      j--;
    }

    // start 포인터와 end 포인터가 만나지 않았다면
    if (i <= j) {
      // start와 end포인터의 값을 바꾼다.
      [arr[i], arr[j]] = [arr[j], arr[i]];

      // 다시 진행을 위해 포인터를 하나씩 이동한다.
      i++;
      j--;
    }
  }

  // 왼쪽 정렬이 남았다면
  if (left < j) {
    quickSort(arr, left, j);
  }

  // 오른쪽 정렬이 남았다면
  if (i < right) {
    quickSort(arr, i, right);
  }

  return arr;
}

const arr = [3, 1, 2, 6, 4, 5];
const sorted_arr = quickSort(arr);
console.log(sorted_arr);
