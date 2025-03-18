src

let amigo = []

function anadirAmigo(){
    let inputAmigo = document.getElementById("amigo");
    //let amigo se el value del input

    let nombreAmigo = inputAmigo.value;

    if (!amigo) {
        alert("No has introducido ningún dato");
        return;
    }
    amigo.push(nombreAmigo);
    console.log(amigo);

}