// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById('resultado');

function agregarAmigoALista() {
    let amigo = inputAmigo.value;
    // Valida si el texto ingresado es nulo
    if (amigo === "") {
        alert("❌ Por favor, inserte un nombre válido!");
    } else {
        if (amigos.includes(amigo)) {
            alert("⚠️ Este nombre ya está en la lista!")
            limpiarCaja();
        } else {
            amigos.push(amigo);
            limpiarCaja();
            listarAmigos();
            console.log(amigos);
            resultado.innerHTML = "";
        }
    }
}

function listarAmigos() {
    let lista = listaAmigos;
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; ++i) {
        let li = document.createElement('li')
        li.innerText = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // Valida que haya amigos disponibles
    if(amigos.length === 0) {
        alert("❌ La lista está vacía. Agrega al menos un amigo!");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indice]; // -> Se accede a el nombre sorteado

    let lista = resultado;
    lista.innerHTML = ""; // -> Limpiar resultado anterior

    // Mostrar el resultado
    let li = document.createElement('li');
    li.innerText = `🎉 El amigo secreto sorteado es: ${amigoSeleccionado} 🎁`;
    lista.appendChild(li);

    // Reinicia la lista de amigos
    reiniciarLista();
}

function limpiarCaja() {
    inputAmigo.value = "";
}

function reiniciarLista() {
    amigos = [];
    listaAmigos.innerHTML = "";
}