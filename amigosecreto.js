// Autor: Miguel Angel Hernandez Vasquez
// fecha : 14/03/2024

let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    //let amigo sea el value del input

    let nombreAmigo = inputAmigo.value;

    if (!nombreAmigo) {
        alert("No has introducido ningún dato");
        return;
    }
    amigo.push(nombreAmigo);
    
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();
  }

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
for (let i = 0; i < amigo.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigo [i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigo.length < 3) {
        alert("No hay suficientes amigos para sortear");
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;

    let limpiarlista = document.getElementById("listaAmigos");
    limpiarlista.innerHTML = "";
}