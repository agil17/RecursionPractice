const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  const mid = arr.length / 2;
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    const sorted = [];

    while(left.length && right.length) {
        if(left[0] < right[0]) {
            sorted.push(left.shift());
        }
        else {
            sorted.push(right.shift());
        }
    }

    return [...sorted, ...left, ...right];
}

const arr = [3, 2, 1, 13, 23, 8, 5, 0, 1];
console.log(mergeSort(arr));
