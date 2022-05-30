const reviews = [
  {
    color: 'var(--cor-neon-1)', //é possivel usar uma cor declarada no css
    name: "Atsushi 'Sushi'",
    job: "Gato",
    img: "./sushi.jpeg",
    text:
      "Escrever qualquer coisa aqui só pra ter um texto maior e poder ver melhor como fica no cartão para poder adequar melhor o css. Eu preciso de um texto um pouco maior pois esse deu apenas duas linhas e só com isso não consigo ver direito como fica. Se eu escrever um texto grande o suficiente posso saber se está cabendo ou não.",
  },
  {
    color: '#ffffff', //Também da para usar uma cor em hex
    name: "Gold Cat",
    job: "AdvoGato",
    img: "./gold.jpeg",
    text:
      "Preciso pensar em reviews.",
  },
  {
    color: 'rgb(255,0,255)',//em rgb também da
    name: "Yasick 'Capeta'",
    job: "pao",
    img: "./yasick.jpeg",
    text:
      "O que será que a Yasick pensa de mim?",
  },
  {
    color: 'blue',//Ou o nome da cor, também pode.
    name: "Alguém",
    job: "Alguma",
    img: "./gold.jpeg",
    text:
      "Enquanto não tenho uma quarta 'pessoa', vou deixar vazio mas com a foto do gold, pq ele é lindo.",
  },
];

const autor =document.getElementById("autor");
const foto = document.getElementById("foto-pessoa");
const trabalho = document.getElementById("job");
const descri = document.getElementById("info");
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const randbtn = document.querySelector('.random-btn');
const fotoborda = document.getElementById("bordafoto")

let itemAtual = 0;

window.addEventListener('DOMContentLoaded',changeReview(itemAtual));


//FUnção que muda a review.
function changeReview(itemAtual){
  const pessoa = reviews[itemAtual];
  autor.textContent = pessoa.name;
  foto.src = pessoa.img;
  trabalho.textContent = pessoa.job;
  descri.textContent = pessoa.text;
  fotoborda.style.borderColor = pessoa.color;
  fotoborda.style.borderBottomColor = 'black'
  cordaborda = "0px 0px 5px "+ pessoa.color+", 0px 0px 3px  "+ pessoa.color
  fotoborda.style.boxShadow = cordaborda;
}

//Botões:
next.addEventListener('click', function(){
  itemAtual ++;
  if(itemAtual >= reviews.length){
    itemAtual = 0;
  }
  changeReview(itemAtual);
})

prev.addEventListener('click', function(){
  itemAtual --;
  if(itemAtual < 0){
    itemAtual = reviews.length-1;
  }
  changeReview(itemAtual);
})

function getARandom(){
  var rand = Math.random()*reviews.length;
  rand = Math.floor(rand);
  return rand;
}

randbtn.addEventListener('click', function(){
  let rand = itemAtual
  while (rand == itemAtual){ //Impede que o aleatório caia no mesmo número.
     rand = getARandom();
  }
  itemAtual = rand;
  changeReview(itemAtual);
})