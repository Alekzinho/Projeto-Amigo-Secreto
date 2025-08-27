let nomes = [];

function adicionar() {
    let inputNome = document.getElementById("nome-amigo").value.trim();
    
    if (inputNome == "") {
        alert("Insira um nome.");
        return;
    }

    if (nomes.includes(inputNome)) {
        alert("Ops, este nome ja foi adicionado!");
        return;
    }

    
    nomes.push(inputNome);

    listaAmigosIncluidos ();
        
    document.getElementById("nome-amigo").value = "";
    
    if (document.getElementById("lista-sorteio").innerHTML !== "") {
        document.getElementById("lista-sorteio").innerHTML = "";
    }

}
// Desafio 1: Remover nome da lista
   function listaAmigosIncluidos() {
    lista = document.getElementById("lista-amigos");
    lista.innerHTML = "";

    for (let i = 0; i < nomes.length; i++) {
        let nome = `<a onclick="remover(${i + 1})" id="nome-clicavel${i + 1}" class="nomes">${nomes[i]}</a>`;
        
        if (lista.innerHTML == "") {
        lista.innerHTML = nome;
        } else {
            lista.innerHTML = lista.innerHTML + ", " + nome; 
            }
    }
}

function remover(indice) {
    let nomeRemovido = document.getElementById(`nome-clicavel${indice}`);
    let indexDaLista = nomes.indexOf(nomeRemovido.innerHTML);
    nomes.splice(indexDaLista, 1);
    nomeRemovido.remove();
    
    listaAmigosIncluidos();

    if (document.getElementById("lista-sorteio").innerHTML = "") {
        return;
    } else {
        document.getElementById("lista-sorteio").innerHTML = "";
    }
}

function sortear() {
    embaralha(nomes);
    
    for (let i = 0; i < nomes.length; i++) {
        if (i == nomes.length - 1) {
           document.getElementById("lista-sorteio").appendChild(document.createElement("p")).innerHTML = `${nomes[i]} --> ${nomes[0]}`;
        } else {
            document.getElementById("lista-sorteio").appendChild(document.createElement("p")).innerHTML = `${nomes[i]} --> ${nomes[i + 1]}`;
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    nomes = [];
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
}

// Desafio 2: Manipulando listas
let minhaLista = [1,2,3];
let nummero4 = [4];
let nummero5 = [5];
let nummero6 = [6];
let novaLista = minhaLista.concat(nummero4, nummero5, nummero6);

// Desafio 3: Removendo último item
novaLista.pop();

console.log(novaLista);

// Desafio 4: Algoritimo Fisher-Yates( ou Knuth Shuffle)
function algoritimoFisherYates(lista) {
  for (let i = lista.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    lista[i] = lista[j];
  }
}

algoritimoFisherYates(novaLista);
console.log(novaLista);

// Desafio 5: Removendo duplicatas
function removerDuplicatas(lista) {
    let listaSemDuplicatas = new Set(lista);
    console.log([...listaSemDuplicatas]);
}

removerDuplicatas(novaLista);