function filterRange(arr, a, b) {
  let newArr = [];

  for (let i of arr) {
      if (i >= a && i <= b) {
          newArr.push(i);
      }
  }

  return newArr;
}
