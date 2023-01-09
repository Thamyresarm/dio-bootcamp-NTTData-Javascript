let N = parseInt(gets());
let numeros = gets().split(' ')
let multiplos = 0;

for (let i = 2; i < 6; i++) {
    numeros.forEach(numero => {
        if(numero % i == 0 ) {
            multiplos++;
        }
    })
    print(multiplos + " Multiplo(s) de " + i)
    multiplos = 0;
}