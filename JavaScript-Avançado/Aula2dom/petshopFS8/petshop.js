let Pet = document.getElementById('pets');

document.createElement('div')


let listaDeAnimais = [
    {
        tipo: "Gato",
        nome:"Elias",
        idade: 4,
        raça:undefined,
        porte: "Grande",
        sexo: "M",
        vacinado:true,
        tutor:{
            nome:"Vinicius",
            telefone:"(11)4002-8922"
        }
    },
    {
        tipo:"Gato",
        nome:"Flor",
        idade:3,
        raça:undefined,
        porte:"Pequeno",
        sexo:"F",
        vacinado:true,
        tutor:{
            nome:"Vinicius",
            telefone:"(11)4002-8922"
        }
    }
];

function adicionarPet(tipo, nome, idade, raca, porte, sexo, vacinado, tutor){
    let novoPet = { 
        tipo,
        nome,
        idade:idade,
        raça:raca,
        porte:porte,
        sexo:sexo,
        vacinado:vacinado,
        tutor:{
            nome:tutor,
            telefone:undefined
        }
    }

    listaDeAnimais.push(novoPet);

    console.log("Pet cadastrado com sucesso!")

}


function visualizarPets(){
    for(let i =0; i < listaDeAnimais.length; i++){

        let animal = listaDeAnimais[i]

        let divConteudoPet = document.createElement('div')

        divConteudoPet.setAttribute('class','bixinho')

        let pSeparador = document.createElement('p');
        pSeparador.textContent = "------------------------";

        let pNomeAnimal = document.createElement('p');
        pNomeAnimal.textContent =  "Nome do Animal:" + animal.nome

        let pTipoAnimal = document.createElement('p')
        pTipoAnimal.textContent = "Tipo do Animal:" + animal.tipo

        divConteudoPet.appendChild(pSeparador)
        divConteudoPet.appendChild(pNomeAnimal)
        divConteudoPet.appendChild(pTipoAnimal)

      Pet.appendChild(divConteudoPet)

    }
}

function buscarPet(nomePet){
    for (let index = 0; index < listaDeAnimais.length; index++) {
        const animal = listaDeAnimais[index];
        
        if(animal.nome ==nomePet){
            console.log
        }
    }
}
