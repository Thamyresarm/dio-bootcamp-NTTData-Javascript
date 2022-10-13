let lines = gets().split("\n"); 

let n = parseInt(lines.shift()); 


if (n <= 2) { 
  
  n * 1;
  print(n); 

} else {
  
  let res = 0;
  let cnt = 1;
  let tmp = n;
  
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
  print(res.toFixed(0));
} 
