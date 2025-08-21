let nomesIncluidos = [];

function adicionar() {
    let inputNome = document.getElementById("nome-amigo").value.trim();
    
    if (inputNome == "") {
        return;
    }

    nomesIncluidos.push(inputNome);    
    document.getElementById("lista-amigos").innerHTML = nomesIncluidos.join(", ");
        
    document.getElementById("nome-amigo").value = "";
    
}

function sortear() {
    embaralha(nomesIncluidos);
    
    for (let i = 0; i < nomesIncluidos.length; i++) {
        if (i == nomesIncluidos.length - 1) {
           document.getElementById("lista-sorteio").appendChild(document.createElement("p")).innerHTML = `${nomesIncluidos[i]} --> ${nomesIncluidos[0]}`;
        } else {
            document.getElementById("lista-sorteio").appendChild(document.createElement("p")).innerHTML = `${nomesIncluidos[i]} --> ${nomesIncluidos[i + 1]}`;
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
    nomesIncluidos = []; //Correção
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";

}

// Problema solucionado de acordo com o vídeo!