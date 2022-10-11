let x = parseInt(gets());
let soma = 0;
let i = 0;

while (x !== 0)
{
//Condição para caso o número informado for PAR, ele irá somar os 5 pares consecutivos até o seu número.
while (i < 5)
{
    if  (x % 2 !== 0)
    {
        x = x + 1;
    } else {
      soma += x;
      x = x + 1;
      i++;
    }
}
//Imprima a soma:
    print(soma);
    soma = 0;
    i = 0;
    x = parseInt(gets());
}