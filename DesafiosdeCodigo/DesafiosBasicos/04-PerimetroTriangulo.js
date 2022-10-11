let pi = 3.14159265358979323846;
 
let a = gets();
let raio = 0;
let area = 0;

raio = a * Math.sqrt(3) / 3;
area = pi * Math.pow(raio, 2)

print("A area da circunferencia eh: " + area.toFixed(2));