const quickSort1 = (arr, node = 0) => {
  if (arr.length <= 1) {
    console.log("반환합니다. " + arr);
    return arr;
  }
  node++;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  console.log("===== node는 " + node + " =====");
  console.log("left = " + left);
  console.log("right = " + right);

  const lSorted = quickSort1(left, node);
  const rSorted = quickSort1(right, node);
  return [...lSorted, pivot, ...rSorted];
};

// const sortedArr = quickSort(arr);
// console.log(sortedArr);
// 첫번째 코드는 메모리 낭비가 심하다.

//=================================================================
// 수도코드

// pivot 변수를 만든다.
// start와 end 포인터를 만든다.

// start와 end 포인터가 엇갈릴 때까지 포인터를 움직인다.
// 만약 start 포인터의 값이 pivot보다 크다면 포인터를 멈춘다.
// 만약 end 포인터의 값이 pivot보다 작다면 포인터를 멈춘다.
// 만약 start와 end포인터가 엇갈리지 않았다면
// 현제 포인터들이 가리키고 있는 값을 스왑한다.

// 만약 왼쪽 끝과 end 포인터 사이에 값이 있다면
// 이 배열을 가지고 치환하는 코드를 제귀한다.

// start포인터와 오른쪽 끝 사이에 값이 있다면
// 이 배열을 가지고 치환하는 코드를 제귀한다.

// 배열을 반환한다.

// 손코딩
const quickSort2 = (arr, left = 0, right = arr.length - 1) => {
  const pivot = arr[left];
  // 새로운 시작점과 포인터의 위치를 구분하기 위해 선언
  let startPointer = left;
  let endPointer = right;

  // start와 end 포인터가 엇갈릴 때까지 포인터를 움직인다.
  while (startPointer <= endPointer) {
    // 만약 start 포인터의 값이 pivot보다 크거나 같다면 포인터를 멈춘다.
    while (arr[startPointer] < pivot) {
      startPointer++;
    }

    // 만약 end 포인터의 값이 pivot보다 작거나 같다면 포인터를 멈춘다.
    while (arr[endPointer] > pivot) {
      endPointer--;
    }

    // 만약 start와 end포인터가 엇갈리지 않았다면
    // 현제 포인터들이 가리키고 있는 값을 스왑한다.
    // 그리고 포인터의 위치를 한 칸씩 이동한다.
    if (startPointer <= endPointer) {
      [arr[startPointer], arr[endPointer]] = [
        arr[endPointer],
        arr[startPointer],
      ];

      startPointer++;
      endPointer--;
    }
  }

  // 만약 왼쪽 끝과 end 포인터 사이에 값이 있다면
  // 이 배열을 가지고 치환하는 코드를 제귀한다.
  if (left < endPointer) {
    quickSort2(arr, left, endPointer);
  }

  // start포인터와 오른쪽 끝 사이에 값이 있다면
  // 이 배열을 가지고 치환하는 코드를 제귀한다.
  if (startPointer < right) {
    quickSort2(arr, startPointer, right);
  }

  // 배열을 반환한다.
  return arr;
};

const arr = [5, 3, 8, 4, 9, 1, 6, 2, 7, 10];
const sortedArr = quickSort2(arr);
console.log("정렬된 배열: " + sortedArr);
