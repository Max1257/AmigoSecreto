const amigos = [];
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const botonAgregar = document.querySelector('.button-add');
const botonSortear = document.getElementById('sortear');
const resultado = document.getElementById('resultado');

inputAmigo.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') agregarAmigo();
});

botonAgregar.addEventListener('click', agregarAmigo);
botonSortear.addEventListener('click', sortearAmigo);

function agregarAmigo() {
    const nombre = inputAmigo.value.trim();
    if (!nombre) return alert("Por favor, ingrese un nombre válido.");
    
    amigos.push(nombre);
    listaAmigos.innerHTML += `<li>${nombre}</li>`;
    inputAmigo.value = '';
}

function sortearAmigo() {
    if (amigos.length === 0) return alert("No hay amigos en la lista para sortear.");
    
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    
    botonAgregar.disabled = true;
    inputAmigo.disabled = true;
}
