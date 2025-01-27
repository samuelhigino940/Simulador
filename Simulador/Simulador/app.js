/**
 * Simulador dos operadores lógicos AMD - OR - NOT
 * @author Samuel Cerretti Higino
 */ 

let receive //Armazena o parametro(valor) recebido do html
// As variaveis abaixo são usadas para identificar se o interruptor esta ligado ou
// desligado (false = desligado | true = ligado)
let sw1 = false
let sw2 = false

//a variável abaixo é usada para identificar se a lampada esta quebrada
let broken =false

function sw(receive){
    console.log(receive)

    if (receive === 1 && sw1 === false) {
        document.getElementById('sw1').src = "img/swon.png"
        sw1 = true
    } else if(receive === 1 && sw1 === true){
        document.getElementById('sw1').src = "img/swoff.png"
        sw1=false
    }else if(receive === 2 && sw2 === false){
        document.getElementById('sw2').src = "img/swon.png"
        sw2=true
    }else if(receive === 2 && sw2 === true){
        document.getElementById('sw2').src = "img/swoff.png"
        sw2=false
    }

    // Logico para quebrar a lampada
    if (receive === 3){
    // a linha abaixo cria um objeto usando a classe Audio
    let som = new Audio()
    console.log(typeof(som))
    som.src ="sound/glassbreaking.wav"
    som.play()
    // trocar a imagem
    document.getElementById('lamp').src = "img/broken.jpg"
    broken=true
   }

   // Logica para o operador AND
   if(broken !==true){
    if(sw1===true && sw2===true){
        document.getElementById('lamp').src = "img/on.jpg"
       } else {
        document.getElementById('lamp').src = "img/off.jpg"
       }
   }


}