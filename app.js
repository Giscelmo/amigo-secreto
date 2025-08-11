//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let lista = [];

function adicionarAmigo() {
  let nomeAmigo = document.getElementById("amigo");
  let amigo = nomeAmigo.value;
  nomeAmigo.value = "";
  if (amigo === "") {
    alert(`Por favor, inisira um nome!!`);
    return;
  }
  if (lista.includes(amigo)) {
    return alert("Este nome já existe na lista!");
  }
  lista.push(amigo);
  atualizarLista(); // Aqui atualiza a lista no HTML
  resultado.innerHTML = ""; // limpa o resultado
  console.log(lista);
}

function atualizarLista() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; //Limpa a lista antes de recriar

  for (let i = 0; i < lista.length; i++) {
    let criarLi = document.createElement("li"); // Cria o elemento <li>
    criarLi.textContent = lista[i]; // coloca o nome dentro da lista
    listaAmigos.appendChild(criarLi);
  }
}

function sortearAmigo() {
  if (lista.length === 0) {
    alert(`Não tem amigos para ser sorteado!`);
    return;
  }
  let indiceAleatorio = Math.floor(Math.random() * lista.length);
  let nomeSorteado = lista[indiceAleatorio];
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>${nomeSorteado}</li>`;

  listaAmigos.innerHTML = "";
  lista = [];

  console.log(nomeSorteado);
}

