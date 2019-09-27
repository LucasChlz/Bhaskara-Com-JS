var resp = document.getElementById('resp');
function calculo(){
    var valorA = prompt('Digite o valur de A');
    var valorB = prompt('Digite o valor de B');
    var ValorC = prompt('Digite o valor de C');

    var ExpB = Math.pow(valorB,2);
    var junT = 4 * valorA * ValorC;

    var delta =  ExpB - junT;


    //Segundo passo//
    var X1 = -(valorB) + Math.sqrt(delta);
    var X1R = X1 / 2 *valorA;

    var X2 = -(valorB) - Math.sqrt(delta);
    var X2R = X2 / 2 * valorA;
    
    resp.innerHTML = `Os numeros dados foram: A = ${valorA} B = ${valorB} 
    C = ${ValorC} <br> O valor de delta foi = ${delta} <br> O X1 foi = ${X1R} <br> O X2 foi = ${X2R}`
    
}


window.onload = calculo;

