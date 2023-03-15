
# API

-> Pega dados do front envia para o back em forma de json, e retorna uma resposta em json do back para o front

    -> Mesa -> Garçom -> Cozinha | (Front -> API -> Back)

    -> Cozinha -> Preparo -> Garçom -> Mesa | (Back -> Tratamento de Dados -> API -> Front)



## JSON

-> Formato de arquivo para troca de informações/dados entre sistemas

-> Independente de uma linguagem

-> Key + Value

```json
{
    "strings": "Igor",
    "numbers": "21",
    "arrays": [1, 2, 3, 4, 5],
    "objects": {
        "colors": {
            "black": "#000000",
            "white": "FFFFFF",
        },
        "example": "example",
    }
}
```



## Métodos HTTP

### GET

-> API fornece informações


### POST

-> API recebe informações

    -> Enviar informações pra API

    -> Podem ser registradas ou guardadas pela API


### DELETE

-> Recebe um identificador de um registro que deve ser apagado

    -> "DELETE id = 1"


### PUT

-> Atualizar informações de UM ou MAIS registros


### PATCH

-> Atualizar informações de um ÚNICO registro



## Insomnia

-> O browser só deixa a gente utilizar o método GET

-> Portanto utilizamos o Insomnia (software de requisições web)





# API no back-end

## Iniciando projeto com NodeJS

-> npm init -y

-> node index.js



## Framework Express

-> Conjunto de arquivos com códigos

-> Podemos utilizar estes recursos para auxiliar na criação de uma aplicação

-> Framework pra aplicativos web que também facilita a criação de APIs

-> npm i express



## Criando server

```js
/* 
    todos os módulos do express estão no node_modules
    para chamar o express pro projeto utilizamos a função require()
*/
// e guardamos ele em uma constante
const express = require('express')

// inicializando o express
const app = express()
// guardamos o express inicializado na constante "app"

app.listen("3000")
```



## GET

```js
// (GET) - criar um conteúdo na rota GET pro navegador mostrar

const express = require('express')

const app = express()

app.listen("3000")


app.route('/').get( (req, res) => res.send("hello"))
app.route('/sobre').get( (req, res) => res.send("sobre nós"))
```



## POST

```js
// (POST) - mandar informações de fora para dentro da API e conseguir usar essas informações aqui

const express = require('express')

const app = express()

app.listen("3000")


/*
    middleware - ponte entre as requisições:
        antes dele ler o post() ele lê o middleware
        ou seja, transforma a requisição em json
        pra isso usamos o express "cru" para usarmos ".json()"
*/
app.use(express.json())

// ao invés de usarmos console.log(), usamos res.send(), para mostrar a req diretamente na resposta da API
app.route('/').post( (req, res) => res.send(req.body))
```



## PUT

```js
// (PUT) - editar informações

const express = require('express')

const app = express()

app.listen("3000")


let author = "Igor"

// usamos GET pra ver o valor de "author"
app.route('/').get( (req, res) => res.send(author))

// mudamos o valor de "author" para o "author" do body
app.route('/').put( (req, res) => {
    author = req.body.author
    res.send(author)
})
```



## DELETE

```js
// (DELETE)

const express = require('express')

const app = express()

app.listen("3000")


// o identificador normalmente fica na url, o ":" diz que o identificador é uma variável
// quando passamos uma variável pela url chamamos de "params"
app.route('/:identificador').delete( (req, res) => {
    res.send(req.params.identificador)
})
```





# Parâmetros nas requisições

## O que são ?

-> Formas de passar pra dentro do nosso código informações que não estavam lá antes

-> Parâmetro = informações | Requisição = forma de requisitar coisas pra API

-> Na requisição passamos informações (parâmetros)

```js
// pelo body da req
app.route('/').put( (req, res) => res.send(res.body.author))

// por parametro
app.route('/:parametro').get( (req, res) => res.send(res.params.parametro))

// por query
app.route('/').get( (req, res) => res.send(res.query.name))
```



## Body Params

-> Forma de passar parâmetros pelo Body

-> Só podemos enviar pelos métodos POST, PUT e PATCH

```js
const express = require("express")

const app = express()

app.listen("3000")


app.use(express.json())

app.route("/").post( (req, res) => {
    const {nome, cidade, array} = req.body
    res.send(`seu nome é ${nome}, sua cidade é ${cidade}`)
    // res.send(array)
    // res.send(req.body.array) ...
})
```



## Route Params

-> Forma de passar parâmetros pela rota

```js
const express = require("express")

const app = express()

app.listen("3000")

// na rota padrão ('/') teremos como resposta "oi"
app.route('/').get( (req, res) => res.send("oi"))

// com o ":" adicionamos uma variavel, qualquer coisa após a "/" será levado como uma variável no código
// então, podemos pegar através de "params"
app.route('/:variavel').get( (req, res) => res.send(req.params.variavel))

// também podemos usar para uma rota mais específica
app.route('/identidade/:nome').get( (req, res) => res.send(req.params.nome))
```



## Query Params

-> Forma de passar os parâmetros pela URL

    -> Sempre começa com "?" 
    
    -> tem o formato de key=value 
    
    -> "&" para adicionar mais variáveis
        
        -> Ex: ?nome=Igor&cidade=Florianópolis

-> Podemos acessar elementos específicos usando "." (req.query.nome) ...

```js
const express = require("express")

const app = express()

app.listen("3000")


app.route("/").get( (req, res) => res.send(req.query))
```





# Consumindo API com NodeJS

## API REST do Github

-> https://api.github.com

    -> mostra todos os recursos que podemos utilizar



## Consumindo com Axios

-> Módulo que possibilita fazer requisições em APIs externas

```js
const express = require('express')
const axios = require('axios')

const app = express()


app.listen("3000")

app.use(express.json())

app.route('/').get( (req, res) => {

    // pegamos a API do github
    axios.get("https://api.github.com/users/igorjosemartins")
    // como resposta mostramos a imagem do avatar do github
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    // caso haja algum erro, é mostrado no console
    .catch(e => console.error(e))
})
```





# API no front-end com Fetch

-> baixar a API pelo repositório: https://github.com/jakeliny/node-api-discover
    -> npm i
    -> npm start



## GET

-> com a API rodando, construimos um mini front-end com um index.html e um main.js

-> no html botamos uma div no body com a id de `renderApiResult`

-> no arquivo js atribuímos a url da nossa API a uma variável

-> utilizamos a função `fetch` para podermos trabalhar a resposta

-> utilizamos um segundo `.then` para jogar esta resposta para nossa div lá no html
    -> `.textContent` retorna todo o conteúdo em texto de um elemento
    -> `JSON.stringify` = transforma JSON em texto

-> como resultado, é mostrado na página o mesmo conteúdo da API, porém agora no nosso front


```js
const url = "http://localhost:5500/api"

function getUsers() {
    fetch(url)
        .then(res =>res.json())
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(e => console.error(e))
}

getUsers()
```



## GET com parâmetros

-> agora criamos outra função para pegar apenas UM usuário
    -> fazemos isso botando o id `1` na url

-> com isso, criamos 3 tags html para cada conteúdo da API, no caso `name`, `city` e `avatar`

-> utilizamos novamente o `.textContent` e o `src` (para imagens) passando agora os parâmetros da resposta da API

-> com isso temos os 3 conteúdos no nosso front 

-> podemos passar o `id` como parâmetro, trazendo dinâmica na aplicação
    -> com isso podemos escolher qual usuário será mostrado na parte de baixo


```js
function getUser(id) {
    fetch(`${url}/${id}`)
        .then(res => res.json())
        .then(data => {
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
        .catch(e => console.error(e))
}
```



## POST

-> por padrão, o método do `fetch` é o GET, portanto para utilizarmos o POST, passamos um objeto como segundo parâmetro da função
    -> passamos o método, no caso POST
    -> o corpo do que queremos enviar, no caso o conteúdo armazenado na constante newUser
    -> e os headers que são padrão

-> na nossa API, a resposta de um POST é apenas um texto, para não deixarmos ela em qualquer lugar iremos organiza-la
    -> criamos uma div com id `alertApi`, vai servir como se fosse um status da requisição
    -> atribumos a ela a resposta como `data`

-> por fim criamos um objeto para armazenar os dados do nosso novo usuário


```js
function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => alertApi.textContent = data)
    .catch(e => console.error(e))
}

const newUser = {
    name: "Igor Martins",
    avatar: "",
    city: "Florianópolis"
}
```



## PUT

-> sempre consultar a documentação da API, para saber o que cada método irá esperar
    -> por exemplo, nessa o método PUT espera um `id` após a url, este mesmo `id` também pode ser passado no body, porém temos que verificar a documentação

-> mesma lógica do POST, porém agora com um usuário já existente, ou seja, editamos


```js
function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {"Content-type": "application/json; chartset=UTF-8"}
    })
        .then(res => res.json())
        .then(data => alertApi.textContent = data)
        .catch(e => console.error(e))
}

const updatedUser = {
    name: "PUT test",
    avatar: "https://picsum.photos/200/300",
    city: "PUT test"
}
```



## DELETE

-> funciona como os outros, porém agora deletamos um usuário a partir do seu `id`

-> por ser uma ação de excluir um usuário, não precisamos do `body`, já que não enviaremos nenhum dado 

```js
function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(res => res.json())
        .then(data => alertApi.textContent = data)
        .catch(e => console.error(e))
}
```





# API no Front-End com Axios

-> https://github.com/jakeliny/axios-api



## GET

```js
const url = "https://localhost:5500/api"

function getUsers() {
    axios.get(url)
        .then(res => {
            apiResult.textContent = JSON.stringify(res.data)
        })
        .catch(e => console.error(e))
}
```



## POST

-> no `axios` não precisamos passar o tipo do método como parâmetro, usamos `axios.post` para o POST

-> também temos que usar o objeto a ser inserido (no caso um novo usuário) como parâmetro da nossa função

```js
function addNewUser(newUser) {
    axios.post(url, newUser)
        .then(res => {
            console.log(res)
        })
        .catch(e => console.error(e))
}

const newUser = {
    name: "Igor",
    avatar: "https://picsum.photos/200/300",
    city: "Florianópolis"
}
```



## GET com parâmetros

-> o atributo `data` contém o conteúdo da resposta da nossa API, portanto podemos criar uma constante para facilitar o uso

-> aqui passamos o `id` como parâmetro para podermos filtrar cada usuário pelo seu respectivo ID
    -> getUser(2) = irá mostrar as informações (nome, cidade, id, imagem) do usuário de ID `2`

```js
function getUser(id) {
    axios.get(`${url}/${id}`)
        .then(res => {
            const data = res.data
            userName.textContent = data.name
            userCity.textContent = data.city
            userID.textContent = data.id
            userAvatar.src = data.avatar
        })
        .catch(e => console.error(e))
}

const newUser = {
    name: "Igor",
    avatar: "https://picsum.photos/200/300",
    city: "Florianópolis"
}
```