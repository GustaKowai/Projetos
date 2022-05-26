const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
  //pega um numero aleatório entre zero e 3.
  let hexColor = '#';
  for (let i = 0; i < 6;i++){
    hexColor += hex[getRandomNumber()]
  };
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
  var rand = Math.random()*hex.length;//Multiplico pelo comprimento para ter um número entre 0 e N-1, sendo N o comprimento
  rand = Math.floor(rand);//Arredonda para o menor inteiro mais próximo, já que precisamos de um inteiro para ser o index do array.
  return rand;
};