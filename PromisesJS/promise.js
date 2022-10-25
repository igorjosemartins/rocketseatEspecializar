
/*
    Promise

    - A promessa de que algo irá acontecer
    - Poderá dar certo ou errado, mas irá acontecer
*/

// exemplo Uber:

let aceitar = true

console.log("pedir uber")

const promessa = new Promise((resolve, reject) => {

    if (aceitar) {
        return resolve("pedido aceito!")
    }

    return reject("pedido negado!")
})

console.log("aguardando...")

// .then = mostra o "result" caso a promise deu certo
// .catch = mostra o "erro" caso a promise deu errado
// .finally = resultado final
promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log("finalizada"))