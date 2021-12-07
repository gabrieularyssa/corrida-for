// carrinho pedro 
const velMaxPedro = 230;
const velMinPedro = 150;
const derrapagemPedro = 0.03;
// carrinho juca
const velMaxJuca = 260;
const velMinJuca = 120;
const derrapagemJuca = 0.05;
// carrinho edna
const velMaxEdna = 220;
const velMinEdna = 180;
const derrapagemEdna = 0.01;
//criando contadores de vitoria
let vitoriasPedro = 0;
let vitoriasJuca = 0;
let vitoriasEdna = 0;

let carPedro;
let carJuca;
let carEdna;

  function compararvelocidade(x){

    for (let i = 0; i < x; i++){

    carJuca = parseFloat(Math.random() * (velMaxJuca - velMinJuca) + velMinJuca);
    carPedro = parseFloat(Math.random() * (velMaxPedro - velMinPedro) + velMinPedro);
    carEdna = parseFloat(Math.random() * (velMaxEdna - velMinEdna) + velMinEdna);
    
        if (carJuca > carPedro && carJuca > carEdna){
            vitoriasJuca++ 
            }
        else if (carPedro > carJuca && carPedro > carEdna){
            vitoriasPedro++
            }
        else if (carEdna > carPedro && carEdna > carJuca){
            vitoriasEdna++
            }
        else {
            x++
            }

    if (i ==  x - 1){
        if(vitoriasEdna == vitoriasJuca && vitoriasEdna > vitoriasPedro ){
            x++
        }
        else if (vitoriasPedro == vitoriasEdna && vitoriasPedro > vitoriasJuca){
            x++
        }
        else if (vitoriasPedro == vitoriasJuca && vitoriasPedro > vitoriasEdna){
            x++
        }
        else if (vitoriasEdna == vitoriasJuca && vitoriasJuca == vitoriasPedro){
            x++
        }
    }
        
}

    if (vitoriasJuca >= vitoriasPedro && vitoriasJuca >= vitoriasEdna){
        document.getElementById("vencedor").innerHTML = "Juca Venceu"
        console.log("Juca Venceu")
        }
    else if (vitoriasPedro >= vitoriasJuca && vitoriasPedro >= vitoriasEdna){
        document.getElementById("vencedor").innerHTML = "Pedro Venceu"
        console.log("Pedro Venceu")
        }
    else if (vitoriasEdna >= vitoriasPedro && vitoriasEdna >= vitoriasJuca){
        document.getElementById("vencedor").innerHTML = "Edna Venceu"
        console.log("Edna Venceu")
        }
    else {
        console.log("erro!")
    }
console.log(vitoriasJuca, vitoriasEdna, vitoriasPedro) 
vitoriasPedro = 0;
vitoriasEdna = 0;
vitoriasJuca = 0;
}
