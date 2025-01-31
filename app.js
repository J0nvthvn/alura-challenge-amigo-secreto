// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigoALista() {
    
    let amigo = document.getElementById('amigo').value;
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

function sortearAmigo() {
    // Valida que haya amigos disponibles
    if(amigos.length === 0) {
        alert("❌ La lista está vacía. Agrega al menos un amigo!");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indice]; // -> Se accede a el nombre sorteado

    let lista = document.getElementById('resultado');
    lista.innerHTML = ""; // -> Limpiar resultado anterior

    // Mostrar el resultado
    let li = document.createElement('li');
    li.innerText = `🎉 El amigo secreto sorteado es: ${amigoSeleccionado} 🎁`;
    lista.appendChild(li);

    // Vaciar la lista de amigos
    amigos = [];
    listaAmigos.innerHTML = "";
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}