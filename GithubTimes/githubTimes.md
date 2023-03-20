# Github for Teams


## Adicionando colaboradores

-> criar um repositório -> settings -> colaboradores

-> "." = atalho para um editor vscode no próprio github
    -> github.dev



## Branches

-> ver todas as branchs existentes
    -> `git branch`

-> como criar outra branch
    -> `git checkout -b nomeBranch`
        -> `checkout` serve para trocar de branch, porém como não temos outra
        -> `-b` serve para criar uma branch

-> não há limites de branchs, podemos criar quantas forem necessárias

-> serve como ambiente de teste e como um histórico de alterações do projeto
    -> podemos criar uma branch para cada atualização para não perder as versões antigas



## Merge

-> colocar o conteúdo de uma branch na `main`
    -> `git merge nomeBranch`

-> `git push origin nomeBranch`



## Apagar uma Branch

-> no github, podemos excluir e restaurar as branchs, porém temos também a forma em código:

-> `git branch -D nomeBranch`
    -> irá excluir uma branch do seu computador
        -> não irá apagar do github

-> `git push origin --delete nomeBranch`
    -> irá excluir uma branch permanentemente



## Atualizando as Branchs

-> `git branch -a`
    -> mostra as branchs no seu computador e do github
    -> porém não é atualizada com o repositório do github

-> para atualizar as branchs criadas
    -> `git fetch`

-> para atualizar as branchs apagadas
    -> `git fetch -p`



## Config de Branch padrão e proteção da Main

-> vamos supor que alguém fez um `push` para a `main` sem querer

-> vamos adicionar proteção a branch `main` para que não haja problemas

`-> settings -> branches -> add rule -> adicionar o nome da branch -> escolher as proteções`
    -> pedir um `pull request` antes de dar `merge` entre branches
        -> requer aprovação daquele `pull request`
            -> podemos escolher o número de aprovações necessárias
        -> requer que o dono do repositório faça um review

    -> status checks to pass
        -> ferramenta do github, faz análises na branch/código para ver se está correto

    -> requer uma conversa no pull request antes de dar merge

    -> incluir administradores
        -> inclui os adm nas regras selecionadas
        -> por padrão, quem é adm não precisaria seguir as proteções

    -> permitir que usuários possam apagar branches depois de terem feito merge na main



## Pull Request

-> pedido para enviar um `pull`

-> lá temos todas as informações e alterações dos commits

-> aba de conversa entre os colaboradores



## Resolvendo conflito

-> normalmente conflito de versões acontece quando tu esquece de mandar uma alteração, e puxa outra do github

-> com isso, a boa prática é arrumar o código e criar uma outra branch para fazer um PR

-> ao criar uma branch, ela irá receber o conteúdo da branch original



## Criando um Pull Request

-> `base` = branch que irá receber o conteúdo

-> `compare` = branch que irá enviar o conteúdo

-> a criação de um PR é bem intuitiva e simples de lidar



## Colaborando em projetos públicos

->  `Fork` = copia um repositório público para o seu perfil

-> com isso podemos fazer alterações e `compare across forks`, ou seja mandar um PR para o repositório original

-> podemos fazer reviews de códigos dos PR



## Issues

-> pendências

-> página para conversar/resolver alguns problemas do repositório

-> podemos linkar PRs nas issues, labels, responsáveis, etc



## Projects

-> ferramenta customizada de organização das tarefas de um projeto

-> gerenciamento da equipe, podemos transformar as tarefas em issues e colocar responsáveis nelas

-> Tabela ou Kanban
