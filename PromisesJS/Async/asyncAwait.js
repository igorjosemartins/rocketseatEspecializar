
/*
    Async/Await

    - Maneira de escrever promises
    - Syntactic Sugar (sintaxe para deixar expressões mais fáceis de se ler)
*/


// estrutura padrão de uma promise

const promessa = new Promise(function( resolve, reject) {
    
    return resolve("ok")
})

// promessa
//     .then(function(response) {
//         console.log(response)
//     })
//     .catch(function (error) {
//         console.log(error)
//     })
//     .finally(function() {
//         console.log("sempre irei executar")
//     }
// )


// mesma estrutura com Async

async function start() {
    try {
        const result = await promessa   // devolve o resultado da espera da promessa (objeto)
        console.log(result)
    } catch(e) {
        console.log(e)
    } finally {
        console.log("rodar sempre")
    }
}
    