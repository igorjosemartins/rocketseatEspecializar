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

