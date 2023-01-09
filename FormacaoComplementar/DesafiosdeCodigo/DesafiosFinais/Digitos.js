let C = parseInt(gets())
        
for (let i = 0; i < C; i++) {
    var input = gets().split(" ");
    let N = parseInt(input[0]);
    let M = parseInt(input[1]);
    let digitos = 1 + Math.trunc(Math.log10(Math.pow(N, M)));
    print(digitos);
}