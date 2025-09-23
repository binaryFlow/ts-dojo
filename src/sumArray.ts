export function sumArray(arr: readonly number[]) {
  return arr.reduce((prev, curr) => prev + curr, 0);
}

console.log(sumArray([1, 2, 3]));
