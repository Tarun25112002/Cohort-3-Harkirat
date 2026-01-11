function sum(num) {
  let total = 0;
  for (let i = 0; i <= num; i++) {
    total += i;
  }
  return total;
}

const ans = sum(5);
console.log(ans);
