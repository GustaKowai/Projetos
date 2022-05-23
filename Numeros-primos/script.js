const form = document.getElementById('formulario');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('numero-procurado');//pega o elemento digitado no form imput
	console.log(inputField.value);
  procuraPrimos(inputField.value);
  //return inputField.value;
  form.reset();//limpa o campo formulário para poder digitar uma nova tarefa
};

function procuraPrimos(N){
  var numerosprimos = [1,2]
  var numerotestado = 1
  while (numerosprimos.length<N){
    if (testaprimo(2*numerotestado+1,numerosprimos.length,numerosprimos)){
      numerosprimos.push(2*numerotestado+1);
    }
    numerotestado++;
  }
  console.log(numerosprimos);
  document.getElementById("Resposta").innerHTML = numerosprimos.join(" ");
}

function testaprimo(numerotestado,tamanho,numerosprimos){
  for (i = 1; i < tamanho; i++){
    if(numerotestado%numerosprimos[i] == 0){
      return false;
    }
  }
  return true;
}