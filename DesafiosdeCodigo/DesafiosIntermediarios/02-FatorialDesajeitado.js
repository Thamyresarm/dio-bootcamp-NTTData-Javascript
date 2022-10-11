numero = "-1"

let lines = numero.split("\n"); 

let n = parseInt(lines.shift()); 

let res = 0;
let cnt = 1;
let tmp = n;

if (n === 1) {
    res = n;
  }

n--;

while (n > 0) {


  tmp *= n;
  n--;

  if(n != 0){
    tmp /= n;
    n--;
  }

  tmp += n;
  n--;

  res += tmp;

  tmp = -n;

  if (n == 1 ){
    res += tmp;
  }   

  n--;
}
  console.log(res.toFixed(0));