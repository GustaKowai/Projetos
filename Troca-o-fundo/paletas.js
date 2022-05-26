const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById('btn');
const color0 = document.querySelector(".colorA");
const color1 = document.querySelector(".colorB");
const color2 = document.querySelector(".colorC");
const color3 = document.querySelector(".colorD");
const color4 = document.querySelector(".colorE");
const corA = document.getElementById("corA")
const corB = document.getElementById("corB")
const corC = document.getElementById("corC")
const corD = document.getElementById("corD")
const corE = document.getElementById("corE")
btn.addEventListener('click',function(){
  //pega um numero aleatório entre zero e 3.
  for(let j = 0; j < 5; j++){
    let hexColor = '#';
    for (let i = 0; i < 6;i++){
      hexColor += hex[getRandomNumber()]
    };
    if(j == 0){
      corA.style.backgroundColor = hexColor
      color0.textContent = hexColor;
    }
    if(j == 1){
      corB.style.backgroundColor = hexColor
      color1.textContent = hexColor;
    }
    if(j == 2){
      corC.style.backgroundColor = hexColor
      color2.textContent = hexColor;
    }
    if(j == 3){
      corD.style.backgroundColor = hexColor
      color3.textContent = hexColor;
    }
    if(j == 4){
      corE.style.backgroundColor = hexColor
      color4.textContent = hexColor;
    }
    //document.body.style.backgroundColor = hexColor;
    }
})

function getRandomNumber(){
  var rand = Math.random()*hex.length;//Multiplico pelo comprimento para ter um número entre 0 e N-1, sendo N o comprimento
  rand = Math.floor(rand);//Arredonda para o menor inteiro mais próximo, já que precisamos de um inteiro para ser o index do array.
  return rand;
};