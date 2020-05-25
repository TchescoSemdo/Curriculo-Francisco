let divPet = document.getElementById("pets");

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

const adicionarPet = (tipo, nome, idade, raca, porte, sexo, vacinado, tutor)=>{
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


const visualizarPets = ()=>{
   listaDeAnimais.forEach((animal, index) =>{
    let divConteudoPet = document.createElement('div')
    //<div></div>
    divConteudoPet.setAttribute('class','bixinho')

    let pSeparador = document.createElement('p');
    pSeparador.textContent = "------------------------------";

    let pNomeAnimal = document.createElement('p')
    pNomeAnimal.textContent = "Nome do Animal: " + animal.nome
   
    let pTipoAnimal = document.createElement('p')
    pTipoAnimal.textContent = "Tipo de Animal: " + animal.tipo

    divConteudoPet.appendChild(pSeparador)
    divConteudoPet.appendChild(pNomeAnimal)
    divConteudoPet.appendChild(pTipoAnimal)

    divPet.appendChild(divConteudoPet)
   })      
        
}


const buscarPet = nomePet =>{
    for (let index = 0; index < listaDeAnimais.length; index++) {
        let animal = listaDeAnimais[index];
        
        if(animal.nome == nomePet){
           console.log("Sim existe esse animal cadastrado no sistema.")
           console.log("E suas informações são essas:")
           console.log("------------------------------")
           console.log("Nome do Animal: " + animal.nome)
           console.log("Tipo de Animal: " + animal.tipo)
           console.log("Sexo do Animal: " + animal.sexo)
           console.log("Nome do tutor: " + animal.tutor.nome)
           return
        }
    }

    console.log('Não existe animal cadastrado!')
   
}

const removerPet = nomePet =>{
    let totaldePets = listaDeAnimais.length
   listaDeAnimais =  listaDeAnimais.filter((animal, index)=>{
            return nomePet != animal.nome 
    })

    if(totaldePets == listaDeAnimais.length){
        return console.log("Não encontramos um animal com o nome de:" + nomePet)
    }

    console.log("O Animal: " +nomePet + " foi removido com sucesso!")
}







// let listaDeFrutas =  ["Maça","uva","banana"];

// listaDeFrutas.forEach(function(fruta, index){
//     console.log("O valor da posição: " + index + " é " + fruta)
// })

 

//  let numeros = [0.5,1.8,10.6]
// undefined
// numeros.map(()=>{})
// (3) [undefined, undefined, undefined]
// numeros.map((valor, index)=>{
//     return Math.round(valor)
// })
// (3) [1, 2, 11]



// const somar = (a,b)=> a + b

// const buscarPet = nomePet => {}

// // 1 parametro é uma regra
// const visualizarPet  = ()=>{

// }

// // 2 parametros ou mais

// const visualizarPet = (valorA,valorB)=>{

// }

// //função de apenas uma linha

// const somar = (a,b)=> a + b {
//     console.log("Estou na soma")

// }

