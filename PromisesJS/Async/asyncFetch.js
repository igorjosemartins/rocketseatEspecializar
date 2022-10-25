
// estrutura padrão fetch

// fetch('https://api.github.com/users/igorjosemartins')
// .then(response => response.json())
// .then(data => fetch(data.repos_url))
// .then(res => res.json())
// .then(d => console.log(d))
// .catch(err => console.log(err))


// mesma estrutura usando Async
// transformamos um código encadeado para um código mais síncrono

async function start() {
    const response = await fetch("https://api.github.com/users/igorjosemartins");
    const user = await response.json(); // transformamos a resposta em json
    const reposResponse = await fetch(user.repos_url);  // pegamos os repositórios
    const repos = await reposResponse.json();   // transformamos em json
    console.log(repos); // mostramos no console
}

// ainda podemos deixar o código mais limpo retirando algumas linhas
// as linhas de transformar a resposta em json apenas encadeamos elas na própria await

async function start() {
    const url = 'https://api.github.com/users/igorjosemartins';
    const user = await fetch(url).then(r => r.json());
    const userRepos = await fetch(user.repos_url).then(r => r.json());
    console.log(userRepos);
}

start().catch(e => console.log(e))