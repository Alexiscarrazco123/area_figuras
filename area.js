document.getElementById("calcular").addEventListener("click", function(e){
    const figuras = document.getElementById("figura").value;
    console.log(figuras);
    const base = document.getElementById("base").value;

    const altura = document.getElementById("altura").value;
    let resultado;
    if (figuras == "cuadrado"){
        resultado=base*altura
        console.log(resultado)
       
    }
    else if (figuras == "triangulo"){
        resultado=(base*altura)/2
        console.log(resultado)

    }
    else if (figuras == "rectangulo"){
        resultado=base*altura
        console.log(resultado)
    }

    document.getElementById('fig').reset();
    
  

});





