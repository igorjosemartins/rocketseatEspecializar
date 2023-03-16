# ReactJS

-> Biblioteca/Framework JavaScript

-> https://pt-br.reactjs.org



## Instalação

-> ter o `npm` (NodeJS)

-> `npm create vite@latest nomeProjeto --template react`
    -> criando um projeto react através do Vite

-> `npm install` = instala as dependências

-> `npm run dev` = roda a aplicação



## Boiterplates (base)

-> create react app

-> vite



## Estrutura das Pastas e Arquivos

-> `package.json` / `package-lock.json` = arquivos das dependências do nosso projeto
    -> possui os scripts de inicialização

-> `src` = pasta padrão para armazenar os arquivos do projeto

-> `public` = pasta padrão para armazenar os arquivos de imagem do projeto

-> `pages` = páginas do nosso projeto



## Estrutura do React

-> `index.html` = possui uma div com id `root` e importa o arquivo main.jsx

-> `main.jsx` = renderiza através da DOM, a tag `<App />` dentro da tag `root`

-> `App.jsx` = possui todo o conteúdo que sera exibido



## Estrutura .JSX

-> dentro de um arquivo `.jsx` teremos uma função, que o retorno dela será conteúdo `HTML`



## Fragment

-> no `jsx`, existe uma regra, só podemos retornar apenas UM elemento da nossa função, portanto para retornar mais de uma tag `HTML`, temos duas soluções:

    -> Fragment = <> conteúdo... </>
        -> tag vazia que "embrulha" outras tags e envia todas juntas
        -> uma `div` também funcionaria



## Importando arquivos CSS + Exportar funções/componentes

-> criar pasta `styles` dentro da `src`

-> lá criar os arquivos `.css`

-> ex: import `./styles/global.css`

-> outra forma de exportar uma função/componente:
    -> no final do código:
        -> padrão = export default Função
    
    -> no começo da função:
        -> export function Função()
        -> no arquivo que for importar, colocar a função entre "{ }"
            -> ex: import { Home } from './pages/Home';



## Estilizando Página CSS

-> boa prática: ao criar uma classe em uma tag HTML, usar `className`

-> estilizando a página:

```css
.container {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.container h1 {
    margin: 84px 0 24px;
}

.container input {
    width: 50%;
    padding: 24px;

    background: #e6e6e6;
    border-radius: 5px;
    border: none;

    font-size: 16px;
}

.container button {
    width: 50%;
    padding: 24px;
    font-weight: 700;

    background: #ea4c89;
    color: #FFFFFF;

    border-radius: 5px;
    margin: 12px 0 84px;
    border: none;

    cursor: pointer;
    transition: filter 0.2s;

    font-size: 16px;
}

.container button:hover {
    filter: brightness(0.9);
}
```



## Importando Fontes para o projeto

-> https://fonts.google.com

-> seleciona uma fonte
    -> seleciona o tamanho e grossura da fonte
    -> copia os links (código)
    -> disponibiliza as fontes no `index.html` através do código copiado
    -> importa a fonte selecionada no arquivo `.css`



## Componentes

-> criar pasta `components` 
    -> criar pasta para cada componente
    -> o componente `Card` terá seu `index.jsx` e seu `styles.css`
    -> mesma lógica da pasta `pages` 

-> para usar um componente = `<Componente />`



## Propriedades

-> atributos de um componente
    -> ex: `<Card name="Igor"/>`

-> para usar os atributos passamos como parâmetro `props` no componente
    -> ex: `export function Card(props) {}`

-> ao invés de usarmos "Igor" na tag `strong`, usamos `{props.name}`



## Estado

-> para pegarmos o valor atual de um `input`, usamos a propriedade `onChange` 
    -> toda vez que o valor muda, ele entrega um evento
    -> `event => event.target.value` = valor atual que está no input
    -> ou seja, quando o valor mudar, faz algo com aquele mesmo valor atual

-> porém, uma variável normal não consegue mudar e refletir na interface, para isso usamos `estados`

-> `useState`
    -> `import React, { useState } from 'React';`
    -> `const [workerName, setWorkerName] = useState('Igor');`
        ->  possui 3 elementos
            -> onde vai guardar o conteúdo do estado (`workerName`)
            -> qual a função que atualiza o estado (`setWorkerName`)
            -> valor inicial = que começará com ele mas será mudado (`'Igor'`)

-> importante para = armazenar valores que serão utilizados na sua interface, e quando o conteúdo dessa variável/estado mudar irá mudar em tempo real



## Imutabilidade

-> princípio dos estados do React

-> o conteúdo não deve ser alterado, mas sim substituído
    -> deixa a aplicação mais performática

-> existe uma função para atualizar o conteúdo do estado  (ex: `setWorkerName`)

```jsx
// por estarmos trabalhando com uma lista, devemos criar um vetor para armazenar os conteúdos de cada usuário
const [workers, setWorkers] = useState([]);

  // criamos uma função para, ao clicar no botão, adicionarmos um usuário à lista
  function handleAddWorker() {
    
    const newWorker = {
      name: workerName,
      timeEntrada: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit'
      }),
      timeSaida: '15:00' 
    };

    // para conseguirmos armazenar os estados passados, devemos utilizar esta conotação, senão ele iria sempre atualizar o mesmo estado
    setWorkers(prevState => [...prevState, newWorker]);
  }

  return(
    // cortei o resto do html

    // aplicamos a função `onClick` para executar a função criada antes, `handleAddWorker`
    <button type="button" onClick={handleAddWorker}>
        Adicionar
    </button>

    // aqui por ser um vetor, podemos usar a função `.map`, que aplica uma função para cada posição do vetor
    // no nosso caso, será uma função que cria um componente `Card` para cada `worker`, com os atributos baseados na construção do nosso usuário feita na constante `newWorker` 
    {
        workers.map(worker => <Card name={worker.name} timeEntrada={worker.timeEntrada} timeSaida={worker.timeSaida}/>)
      }
  )
```



## Key Prop

-> é a ideia de adicionar para cada propriedade uma key única, para que as listagem fiquem mais performáticas, como editar/excluir algum elemento

```jsx
{
    workers.map(worker => (
        <Card 
            // a boa prática seria termos um `id` para cada elemento, porém aqui utilizei o tempo local do cadastro, já que o tempo é utilizado os segundos, seria dificil de 2 cadastros serem feitos ao mesmo tempo
            key={worker.timeEntrada}
            name={worker.name} 
            timeEntrada={worker.timeEntrada} 
            timeSaida={worker.timeSaida}
        />
    ))
}
```



## Hooks

-> vem do paradigma funcional (tudo é baseado em funções)

-> a idéia de usar funções mais simples, independentes

-> melhora do ciclo de vida das aplicações (simplificado)

-> desenvolver componentes com mais flexibilidade

-> useState = hook que armazenar estado (conteúdo), e conectar esse estado à nossa interface, para que ela inicie um novo ciclo toda vez que esse conteúdo mudar 



## Header

-> construção de um header mais organizado

```html
<header>
    <h1>Lista</h1>

        <div>
          <strong>Igor</strong>
          <img src="https://github.com/igorjosemartins.png" alt="Foto de Perfil" />
        </div>
</header>
```

```css
.container header {
    width: 50%;
    margin: 84px 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.container header img {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-left: 7px;
}

.container header div {
    display: flex;
    align-items: center;
}
```



## useEffect

-> `import React, { useEffect } from 'react`;

-> estrutura do hook:
    -> `useEffect(() => {}, [])`
        -> `() =>` =  arrow function 
        -> `{}` = corpo do useEffect = ações/aquilo que eu quero que execute
        -> `[]` = array de dependências = quais são os estados que esse useEffect depende
            -> ou seja, se eu boto um estado neste array, toda vez que este estado for atualizado, o useEffect será executado

-> é executado (automaticamente) assim que a nossa interface é renderizada



## Consumindo API

-> deixando o `header` dinâmico, usando `useEffect` para consumir a API do github

```jsx
// criamos as constantes que queremos utilizar, nome e foto
const [user, setUser] = useState({ name: '', avatar: '' })

useEffect(() => {
    // usamos o fetch = api padrão js de requisições http
    fetch('https://api.github.com/users/igorjosemartins')
    .then(res => res.json())
    .then(data => { 
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    })
    .catch(e => console.error(e))
  }, []);
```



## useEffect Async

-> o `useEffect` não pode ser utilizado de forma assíncrona (async)

-> porém podemos criar uma função assíncrona dentro dele, e depois chamar ela

-> consumindo a API do github de forma async:

```jsx
useEffect(() => {
    async function fetchData() {
        const response = await fetch('https://api.github.com/users/igorjosemartins')
        const data = await response.json()
        
        setUser({
            name: data.name,
            avatar: data.avatar_url,
        }) 
    };

    fetchData();
}, []);
```