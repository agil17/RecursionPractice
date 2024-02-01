// Iterative
const fibIterative = (n) => {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      arr.push(0);
    } else if (i === 1) {
      arr.push(1);
    } else {
      arr.push(i - 1 + (i - 2));
    }
  }
  return arr;
};

// console.log(fibIterative(8)); [0, 1,  1,  3, 5, 7, 9, 11, 13]

const fibRecursive = (n) => {
  if (n <= 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }

  const a = fibRecursive(n - 1);
  a.push(a[n - 2] + a[n - 3]);
  return a;
};

// console.log(fibRecursive(8)); [0, 1,  1,  3, 5, 7, 9, 11, 13]

const mergeSort = (arr, low, high) => {
  if (low >= high) return;
  const mid = (low + high) / 2;
  const left = arr.slice(0, mid);
  const right = arr.slice(mid+1, high);

  console.log(left, right);
};

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));