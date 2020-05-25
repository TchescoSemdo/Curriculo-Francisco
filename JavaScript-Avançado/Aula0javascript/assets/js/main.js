

let listaDeInputs = document.querySelectorAll('input')

for (let index = 0; index < listaDeInputs.length; index++) {
    const input = listaDeInputs[index];
    input.style.backgroundColor = "red"
    
}

let elemento = document.getElementById('copyright')

console.log(elemento.attributes)