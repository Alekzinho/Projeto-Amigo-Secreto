let nomesIncluidos = [];
let sorteados = [];

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
    for (let i = 0; i < nomesIncluidos.length; i++) {
        
        let sortearNomes = nomesIncluidos[parseInt(Math.floor(Math.random() * nomesIncluidos.length))];
        
        while (sorteados.includes(sortearNomes) || nomesIncluidos[i] == sorteados[i]) {
            sortearNomes = nomesIncluidos[parseInt(Math.floor(Math.random() * nomesIncluidos.length))];
        }
        
        sorteados.push(sortearNomes);

        document.getElementById("lista-sorteio").appendChild(document.createElement("p")).innerHTML = `${nomesIncluidos[i]} -> ${sorteados[i]}`;
        console.log(sorteados);
    }
}

function reiniciar() {
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";

}

// Não consegui fazer com que a pessoa não sorteasse ela mesma!