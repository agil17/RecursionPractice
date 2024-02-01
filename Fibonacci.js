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

console.log(fibIterative(8)); [0, 1,  1,  3, 5, 7, 9, 11, 13]

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

console.log(fibRecursive(8)); [0, 1,  1,  3, 5, 7, 9, 11, 13]

