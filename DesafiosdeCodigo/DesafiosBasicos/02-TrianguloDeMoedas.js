let N = parseInt(gets()); 
let valorSubtraido = N;
let altura = 0;

//let n = 1 + 8*N; sujestão da plataforma, não consegui entender e fiz da maneira que encontrei

for (let i = 1; i <= N; i++){
  if(valorSubtraido - i >= 0 ){
    valorSubtraido -=i;
    altura++;
  }
}

print (altura);
