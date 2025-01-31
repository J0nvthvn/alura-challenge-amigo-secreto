// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigoALista() {
    
    let amigo = document.getElementById('amigo').value;
    //si el texto ingresado es nulo
    if (amigo === "") {
        alert("Por favor, inserte un nombre!");
    } else {
        if (amigos.includes(amigo)) {
            alert("Este nombre ya está en la lista!")
            limpiarCaja();
        } else {
            amigos.push(amigo);
            limpiarCaja();
            listarAmigos();
            console.log(amigos);
        }
    }
}

function listarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; ++i) {
        let li = document.createElement('li')
        li.innerText = amigos[i];
        lista.appendChild(li);
    }

}

function sortearAmigoSecreto() {
    
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}