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

const quickSort2 = (arr, low = 0, high = arr.length - 1) => {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);

    console.log("===== Pivot Index: " + pivotIndex + " =====");
    console.log("Array: " + arr);

    quickSort2(arr, low, pivotIndex - 1);
    quickSort2(arr, pivotIndex + 1, high);
  }
  return arr;
};

const partition = (arr, low, high) => {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
};

const arr = [5, 3, 8, 4, 9, 1, 6, 2, 7, 10];
const sortedArr = quickSort2(arr);
console.log("정렬된 배열: " + sortedArr);
