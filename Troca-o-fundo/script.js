const colors = ["green","red","rgba(133,122,200)","#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
  //pega um numero aleatório entre zero e 3.
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
})

function getRandomNumber(){
  var rand = Math.random()*colors.length;//Multiplico pelo comprimento para ter um número entre 0 e N-1, sendo N o comprimento
  rand = Math.floor(rand);//Arredonda para o menor inteiro mais próximo, já que precisamos de um inteiro para ser o index do array.
  return rand;
};

