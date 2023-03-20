# Animation


## O que é CSS Animation

-> ferramenta que permite criar animações sem a interação do usuário, podem acontecer de forma autônoma



## Animation name e duration

-> para uma animação funcionar, precisa de pelo menos 2 propriedades:

-> `animation-name:` = recebe o nome da animação criada

-> `animation-duration:` = recebe a duração da animação criada

-> sintaxe de uma animação:  `@keyframes nomeAnimacao {}` = propriedades da animação
    ->  `from {}` = começo da animação
    -> `to {}` = o que ela irá fazer



## Keyframes com porcentagens

-> como se fosse uma barra de progresso, onde o início da animação seria 0 e o final 100
    -> `0%` {} | `25% {}` | `50% {}` ...



## Animation delay

-> faz com que a animação aconteça depois de X tempo
    -> `animation-delay:`



## Animation iteration count

-> define quantas vezes a animação irá acontecer    
    -> `animation-iteration-count:`



## Animation direction

-> direção da animação
    -> `animation-direction:`
        -> `reverse` = de 100 a 0
        -> `alternate` = 0 a 100, 100 a 0, 0 a 100...
        -> `alternate-reverse` = 100 a 0, 0 a 100, 100 a 0...



## Animation timing function

-> `animation-timing-function` = propriedade que muda a animação da transição
    -> `ease` - início lento, rápido e final lento (este é o padrão)
    -> `linear` - mesma velocidade do início ao fim
    -> `ease-in` - início lento
    -> `ease-out` - final lento
    -> `ease-in-out` - início e fim lentos