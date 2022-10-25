import axios from "axios"

// promessas ao mesmo tempo

// Promise.all = função que recebe arrays de promessas como parâmetro
Promise.all([
    axios.get('https://api.github.com/users/igorjosemartins'),      // promessa de pegar as info do meu github
    axios.get('https://api.github.com/users/igorjosemartins/repos') // promessa de pegar meus repositórios
])
.then(response => {                             // então usamos response em formato de array para pegar as informações
    console.log(responses[0].data.login)        // pega o login (user) do meu github 
    console.log(responses[1].data.length())     // pega a quantidade de repositórios que eu tenho
})
.catch(error => console.log(error.message))     // mostra o código do erro