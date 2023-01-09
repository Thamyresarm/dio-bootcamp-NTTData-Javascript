var line = gets().split(" ");
let X = parseFloat(line[0]);
let Y = parseFloat(line[1]);

// TODO: Retorne o quadrante em que o ponto se encontra

 if (X === 0 && Y === 0) {
      print("Origem");
    } 
    else if (X === 0 && Y !== 0) {
      print("Eixo Y");
    } 
    else if (X !== 0 && Y === 0) {
      print("Eixo X");
    } 
    else if (X > 0 && Y > 0) {
      print("Q1");
    } 
    else if (X < 0 && Y > 0) {
      print("Q2");
    } 
    else if (X < 0 && Y < 0) {
      print("Q3");
    } 
    else if (X > 0 && Y < 0) {
      print("Q4");
    }