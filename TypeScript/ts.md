
# TypeScript

-> traz tipagem para o JavaScript

-> server para manter a consistência da aplicação
    -> mais simples de encontrar erros

-> tudo é JS, porém o TS compila para uma versão do JS que seja compatível com o seu contexto



## Por que usar TypeScript

-> os erros aparecem na hora da codificação, não na execução
    -> trazendo rapidez e facilidade na etapa de desenvolvimento

-> TypeScript Playground = https://www.typescriptlang.org = compila diretamente no browser

-> instalar extensão `Quokka.js`
    -> executa linhas js em tempo real

-> clicar em Quokka na parte inferior do vscode
    -> "Launch Interactive Demo"



## Tipagem Explícita

```ts
// para tipar um parâmetro usar ":", podemos usar "|" para dar mais de um tipo para o mesmo dado
function showTicket(user: string | null, ticket: number) {
    // "??" = condição para caso seja null
    console.log(`nome: ${user ?? 'Usuário Padrão'}, ticket: ${ticket}`)
}

showTicket(null, 123)
```



## Any

-> a tipagem padrão do TS é `any`, que pode ser qualquer tipo

-> não é uma boa prática

-> podemos forçar o ts a usar passando `any` como tipo
    -> ex: `data: any`



## Tipos Primitivos

-> `boolean`

-> `string`

-> `number`



## Matrizes

-> 2 formas de tipar um array

```ts
let numbers: number[];
numbers = [1, 2, 3, 4, 5];

let users: Array<string>;
users = ['Rodrigo', 'João'];
```



## Funções

-> `void` = função que não tem um retorno

-> o TS infere de forma automática o tipo da função de acordo com o tipo do retorno

-> também podemos tipar explicitamente o retorno:

```ts
function showMessages(message: string): string {
    return message;
}
```



## Union (|)

-> podemos fazer com que uma variável tenha mais de um tipo

```ts
function printUserId(id: number | string | boolean) {
    console.log(`O ID do usuário é: ${id}`)
}
```



## Generics

-> tipagem flexível

-> tipagem no momento de declaração 

```ts

/**
 * Generics:
    * S => state
    * T => type
    * K = key
    * V => value
    * E => element
*/
function useState<T>() {
    let state: T;

    function get(){
        return state;
    }

    function set(newValue: T){
        state = newValue;
    }

    return { get, set}
}

// aqui eu tipo a função como string
let newState = useState<string>();
newState.get();
newState.set("João");

// portanto aqui, não irá funcionar
newState.set(123);
```



## Type

-> podemos criar um `type` como se fosse uma variável, e lá armazenar os tipos que queremos

-> evita a repetição dos mesmos tipos 

```ts
type IdType = string | number | undefined;

let userId = IdType;

let adminId = IdType;
```



## Type Assertions

-> podemos tipar os atributos de um objeto por `type`

```ts
type UserResponse = {
    ui: number;
    name: string;
    avatar: string;
}

let userResponse = {} as UserResponse;

userResponse.ui
userResponse.name
userResponse.avatar
```



## Objetos

-> tipagem de objetos utilizando `type`

```ts
type Point = {
    x: number;
    y: number;
}

function printCoord(points: Point) {
    console.log(`O eixo x é: ${points.x}`)
    console.log(`O eixo y é: ${points.y}`)
}

printCoord({x: 101, y: 50})
```



## Opcional

-> as vezes, gostaríamos que uma propriedade de um objeto seja opcional, como por exemplo um id de Admin

-> para isso utilizamos o `?` após o atributo desejado

```ts
type User = {
    name: string,
    email: string,
    age: number,
    isAdmin?: boolean
}

let newUser: User = {
    name: "igor",
    email: "igor@email.com",
    age: 21,
}
```



## Intersecção de Tipos

-> União de dois `types`

```ts
type Account = {
    email: string,
    password: string 
}

type Char = {
    nickname: string,
    level: number
}

type PlayerInfo = Account & Char

let user: PlayerInfo = {
    email: "igor@email.com",
    password: "*****",
    nickname: "igor",
    level: 15
}
```



## Interface

-> outra forma de criar tipagens, assim como o `type`, porém não se utiliza o `=`

```ts
interface User {
    id: number,
    name: string
}

function registerNewUser(newUser: User) {
    newUser.id
    newUser.name
}
```



## Diferença entre Type e Interface

-> objetivo é o mesmo = criar/definir tipagem

-> `type`
    -> mais recomendável, por ser mais simples, flexível, mais fácil de ligar com tipos primitivos
```ts
type TUser = {
    name: string;
}

type TPayment = {
    method: string;
}

type TAccount = TUser & TPayment; 
```

-> `interface`
    -> muito utilizada para quem desenvolve libs, devs mais experientes

```ts
interface IUser {
    name: string;
}

interface IPayment {
    method: string;
}

interface IAccount extends IUser, IPayment {}
```



## tsconfig

-> arquivo de configurações do TS
    -> nele podemos colocar as regras que o TS terá que seguir na nossa aplicação

-> pode ser criado como um js ou json



## Aplicando TypeScript

-> iremos transformar um projeto JS em TS

-> `git clone https://github.com/rocketseat-education/lista_presenca/tree/typescript`

-> `npm install`

-> `npm run dev`



## Adicionando TypeScript

-> `npm install typescript --save-dev` = instala o typescript como dev dep

-> criar um arquivo de configuração = `tsconfig`
    -> documentação = configs padrão para uma aplicação em Vite
    -> `https://www.typescriptlang.org/docs/handbook/tsconfig-json.html`

-> é importante lembrar que não precisamos tipar tudo, podemos migrar um projeto em JS para TS de forma gradual, não é preciso tipar tudo



## Tipando Componentes

-> mudar a extensão do arquivo para `.tsx`

-> para o `ts` entender a sintaxe do `react`, também devemos instalar as dependências
    -> depende do erro, sempre passar o mouse em cima para mais informações
    -> no nosso caso: `npm i --save-dev @types/react`

-> no exemplo, Card possui dois atributos, nome e tempo, tipando:

```tsx
type CardProps = {
    name: string;
    time: string;
}

export function Card(props: CardProps) {
    //...
}
```



## Tipando Estados

-> mudar a extensão do arquivo para `.tsx`

-> no exemplo, estamos fazendo a lógica da lista através dos `Cards`, portanto a tipagem seria a mesma

-> com isso podemos exportar também um tipo, colocando `export` antes dele

-> para tipar um estado, passamos o tipo assim: `<Type>`

-> por ser um vetor também devemos utilizar o `[]`

```tsx
import { Card, CardProps } from '.././components/Card';

const [students, setStudents] = useState<CardProps[]>([]);
```



## Tipando resposta da API

-> no exemplo, estamos usando a API do github para buscar o nome e o avatar de um perfil, podemos então, tipar a resposta com apenas este dois dados

```tsx
// tipando:
type ProfileResponse = {
    name: string;
    avatar_url: string;
}

// para tipar:
const response = fetch('https://api.github.com/users/igorjosemartins');
const data = response.json() as ProfileResponse;
```

-> abaixo, temos um estado que está tendo seus tipos inferidos direto no meio da execução da função

-> se tivermos por exemplo, vários atributos, teríamos que tipar um por um, portanto fazemos:

```tsx
// má prática
const [user, setUser] = useState({ name: '', avatar: '' });


// boa prática
type User = {
    name: string;
    avatar: string;
}

// utilizando:
const [user, setUser] = useState<User>({} as User);
```