function fibonacci1(n, memo=[]) {
  if (n <= 2) return 1;
  if (memo[n] !== undefined) return memo[n];

  let result = fibonacci(n - 2, memo) + fibonacci(n - 1, memo);

  memo[n] = result;

  return result;
}

function fibonacci2(n) {
  if (n <= 2) return 1;

  let fiboNum = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    fiboNum[i] = fiboNum[i - 2] + fiboNum[i - 1];
  }

  return fiboNum[n];
}

let time1 = performance.now();
fibonacci1(100);
let time2 = performance.now();
console.log(time2 - time1);

let time3 = performance.now();
fibonacci2(100);
let time4 = performance.now();
console.log(time4 - time3);