var line = gets().split(" ");

var hInicial = parseInt(line[0]);
var hFinal = parseInt(line[1]);


if (hInicial > hFinal) { 
    print('O JOGO DUROU ' + (24 - (hInicial - hFinal)) + ' HORA(S)');
} else if (hFinal > hInicial ) {
    print('O JOGO DUROU ' + (hFinal - hInicial) + ' HORA(S)');
} else {
   print('O JOGO DUROU 24 HORA(S)');
}