const ligar = document.getElementById('ligado');
const desligar = document.getElementById('desligado');
const lamp = document.getElementById("lampada")
const logo = document.getElementById('logo')


function taQuebrada(){
    //verificador se a src é = a lampada quebrada colocando ">" tranformamos em um teste lógico onde vai retornar true ou false
    return lamp.src.indexOf('quebrada') > -1
}

//função para ligar e desligar a lâmpada sempre verificando se a lâmpada "não(!) taQuebrada"
function ligou(){
    if(!taQuebrada()){   
        lamp.src = "./imgs/ligada.jpg";
        logo.href = "./imgs/ligada.jpg"; 
        lamp.alt = "Lampada Ligada"
        
    }
}
function desligou(){   
    if(!taQuebrada()){
        lamp.src = "./imgs/desligada.jpg";
        logo.href = "./imgs/desligada.jpg";
        lamp.alt = "Lampada Desligada"
    }
}
function quebrou(){  // função para quebrar a lâmpada.
        lamp.src = "./imgs/quebrada.jpg"
        logo.href = "./imgs/quebrada.jpg"
        lamp.alt = "Lampada Quebrada"
        
}

//adicionado um evento click no botão para ligar, deligar e quebrar a lampada
ligar.addEventListener('click', ligou);    
lamp.addEventListener('mouseover', ligou)
desligar.addEventListener('click', desligou);
lamp.addEventListener('mouseleave', desligou)
lamp.addEventListener('dblclick', quebrou);