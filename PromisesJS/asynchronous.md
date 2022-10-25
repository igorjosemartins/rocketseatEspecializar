
# Síncrono

    - Sistema síncrono (synchronous)
        - A tarefa anterior precisa ser concluída, para então iniciar a próxima
        - Por padrão, o JavaScript é um sistema síncrono

# Assíncrono

    - Sistema assíncrono
        - As tarefas são executadas de maneira independente uma da outra
        - JavaScript poderá usar o assincronismo ao seu favor
    

# Callback function

    - Função que é passada como argumento para outra função, e depois ela é chamada de volta


# setTimeout(function, delay)

```js
    setTimeout(function () {
        console.log("depois de 1s")
    }, 1000)

    // ===

    setTimeout(function () {console.log("depois de 1s")}, 1000)
```


# Conectando API com HTTPS e Callback

```js
    // https do node
    const https = require("https")
    // json com dados (usuários)
    const API = "https://jsonplaceholder.typicode.com/users?_limit=2"

    // API e função "resposta" que nos mostrará o Status Code da nossa aplicação
    https.get(API, res => {
        // mostra o Status Code
        console.log(res.statusCode)
    })

    // isso aparecerá primeiro do que o Status Code, por conta do callback
    console.log("Conectando API...")
```
