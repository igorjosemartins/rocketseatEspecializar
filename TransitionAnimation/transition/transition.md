# Transition
 

## O que é CSS Transition

-> propriedade usada ao mudar o comportamento de algum elemento
    -> tamanho, opacidade, transição de cores, etc

-> sintaxe:
    -> `transition: background-color 1s ease 4s`
        -> 1. = property
        -> 2. = duration
        -> 3. = timing-function
        -> 4. = delay



## Transition property e duration

-> `transition-property` = é a propriedade css que queremos aplicar a transição
    -> ex: width, background-color, opacity...

-> `transition-duration` = é o tempo de duração da transição
    -> ex: 1s, 2s, 3s...



## Transition timing functions

-> `transition-timing-function` = propriedade que muda a animação da transição
    -> `ease` = início lento, rápido e final lento (este é o padrão)
    -> `linear` = mesma velocidade do início ao fim
    -> `easy-in` = início lento
    -> `easy-out` = final lento
    -> `easy-in-out` = início e fim lentos
    -> `cubic-bezier(n,n,n,n)` = permite definir seus próprios valores em uma função cubic-bezier



## Transition delay

-> faz com que a animação aconteça depois de X tempo

-> `transition-delay: 3s;`



## Transition property all

-> `transition: all` = qualquer propriedade que for alterada ele irá mudar junto