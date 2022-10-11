let lines = gets().split("");

let subtractProductAndSum = 0;
let n = 0;
let product = 1;
let sum = 0;

while( lines.length > 0) {
  n = parseInt(lines.shift());
  sum += n;
  product *= n;
}

subtractProductAndSum = product - sum;

print(subtractProductAndSum);