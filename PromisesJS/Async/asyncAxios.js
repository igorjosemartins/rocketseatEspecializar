// queremos pegar o usuário e a lista de repositórios (api do github)

// utilizando a biblioteca axios
import axios from 'axios'

axios
    .get('https://api.github.com/users/igorjosemartins')
    .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch(error => console.log(error))


// utilizando Async
// usamos try catch para tratar os dados

async function fetchRepos() {

    try {
        const user = await axios.get('https://api.github.com/users/igorjosemartins');
        const repos = await axios.get(user.data.repos_url)
        console.log(repos.data)
    } catch(e) {
        console.log(e)
    }   
}

fetchRepos()