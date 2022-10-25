
// encadeamento de promessas = quando precisamos fazer várias chamadas e cada uma depende da anterior

// fetch (buscar) = função que recebe uma url como parâmetro | estrutura de promessa do browser

fetch('https://api.github.com/users/igorjosemartins')   // pegamos api do github
.then( response => response.json())     // pegamos a resposta e transformamos em json para ver os dados
.then( data => fetch(data.repos_url))   // agora queremos a informação do objeto "repos_url" (repositórios)
.then( res => res.json())               // então transformamos o objeto em json
.then( d => console.log(d))             // e mostramos no console
.catch( err => console.log(err))        // usamos catch para mostrar no console caso haja algum erro