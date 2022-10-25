
// Axios é uma biblioteca http client baseado em promessas para usar no NodeJS/browser

import axios from "axios";

axios.get('https://api.github.com/users/igorjosemartins')   // get é como se fosse o fetch
    .then(res => {
        console.log(res.data)   // podemos acessar o conteúdo do objeto através do "."
    })


// ex de usabilidade do axios (clean code)
axios
    .get('https://api.github.com/users/igorjosemartins')    // pegamos url
    .then(response => axios.get(response.data.repos_url))   // pegamos os repositórios em apenas uma linha
    .then(repos => console.log(repos.data))                 // mostramos os dados do objeto repositórios
    .catch(error => console.log(error))                     // pegamos algum erro