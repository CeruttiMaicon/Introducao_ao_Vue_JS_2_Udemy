Aula 1 - Introdução ao Curso

    O que é o Vue JS e como vamos aborda-lo nas aulas.

Aula 2 - Introdução ao Vue

    A aula foi somente de como trazer as dependencias do Vue e fazer um print inicial na tela utilizando esta tecnologia.

Aula 3 - Utilizando o V-Bind

    O V-BIND: faz com que o atributo do HTML esteja manipulado de acordo com as configuracoes passadas no DATA do Vue JS
    
Aula 4 - Estrutura IF e Laços de Repetição

    Dentro do Vue a estrutura if é utilizada com a seguinte sintaxe
        <p v-if="teste  logico"> Se a condição é verdadeira mostra esse paragrafo, se não, não mostra </p>

    Ele deve ser usado dentro da sintaxe do html, e se a condição for verdadeira ele mostra o objeto em tela.

    A estrutura de laços de repetição é utilizada com a seguinte sintaxe
        <p v-for="item in itens"> itens.nomeatributo </p>
    "itens" é a variavel com o array dos itens, e item é a variavel utilizada para pegar os objetos de dentro do array de "itens"

    Bem resumidamente esta aula apenas ensinou a condição v-if e o v-for.

Aula 5 - Fazendo uma função simples no Vue JS

    Durante a aula foi feito um botão que muda de status para verdadeiro e falso, alterando os botões que sao apresentado na visualização. E foi utilizado o methods para criar a função do botão.

Aula 6 - Utilizando o v-model

    Foi criado um campo input que recebia uma variavel passada pelo usuario (o nome), e depois era escrito em tela em tempo real, o javascript recebe a variavel e depois as coloca em tela.

Aula 7 - Criando componentes Vue

    Foi criado um componente de titulo com o Vue e feito a chamada dentro da div do App do Vue

Aula 8 - Passando parametros com o PROPS

    Trabalhando com os componentes do Vue e utilizando os pros para passar os parametros utilizando o PROPS do Vue Js

Aula 9 - Utilizando o v-model 

    Utilizando o v-model é possivel modificar os valores utilizados dentro do Vue

    V-bind = Utiliado para trazer valores dinamicos

    V-model = Utilizado para fazer uma licitação

Aula 10 - Criando um componente dinamico de tabela

    Foi criado um componente em Vue JS, o componente é uma tabela que recebe um array em json que é dinamico dentro da TD da tabela, foi utilizado um f-vor na TR e mais um f-vor na TD. Assim fazendo o elemento ficar dinamico com os dados do Json.

Aula 11 - Ensinando mais alguns recursos do Vue JS

    O v-once faz com que o componente não mude mais de valor, depois que ele ja foi renderizado

    O v-html faz com que o objeto ou variavel que foi instaciado seja compilado para aparecer na isualização do componente

Aula 12 - Usando Filtros

    Metodos em javascript para formatar um valor númerico
    Metodo do javascript para aredondar numeros
	.toFixed(2)

    Metodo Replace, utiliado para fazer substituições em strings
        .replace('.', ',')
    Aqui ele substituiu o ponto pela virgula


    Utilização de filtros
        Os filtros são utilizados como funções para fazer o tratamento de alguns valores, ou fazer filtros.

    Utilizando as funções do Vue o parametro "filters" é utilizado para fazer essas funções em javascript

Aula 13 - Metodos de funções do Vue Js

	Durante a aula foi utilizado um methods e um computed para fazer a soma dos valores passados dentro do array.
	Computado
		Metodos computados não precisam ser chamados como funções (com o "Nomefunção()" paratenses no final da chamada da função ).
		Apresentam um maior desempenho e só são executados uma vez no código. O computed deve ser mais utilizados para 
	valores que mudam toda hora, para obter resultados calculados. Além disso, armazena os dados em cache até que seja alterado. Quando o Vue é instanciado, as propriedades calculadas são convertidas em uma propriedade. Portanto, você faz referência a uma propriedade computada como se fosse uma propriedade de dados.

	Metodos
		Também executam funções do javascript, porém tem um desempenho muito pior, por um metodo ser chamado varias vezes. Methods
	devem ser utilizados para funções do usuario. Se recomenda utilizar methods para criar funções para o usuario. Um método não faz nada a menos que você o chame. Como todas as funções javascript, aceita parâmetros e será reavaliado sempre que for chamado. Depois disso, eles não podem armazenar valores em cache. Além disso, você deve usar métodos quando quiser passar um valor para modificá-lo. 

Aula 14 - Dicas de utilização Methods e Computed + Observadores

	Methods
	Methods devem ser utilizados para as funções do usuario, o methodo pode ser utilizado uma vez, ou não.

	Computed
	Computed deve ser utilizado para mostrar soluções, mostrar uma resposta enquanto a sua aplicação esta renderizando.

	Observadores são funções em javascript que são chamadas em tempo real, no tempo de interação do usuario. Isto é utilizado usando o "watch"

Aula 15 - Começando a trabalhar com Formularios

    Foi feito o campo de texto input, com o v-model para mostrar o titulo alterando em tempo de digitação.
    E também foi criado um textarea onde foi demonstrado o mesmo efeito, porém foi adicionado um style para fazer a quebra de linha, deixando o texto formatado igual ao digitado dentro do campo do textarea.

    style:"white-space: pre-line"
    
Aula 16 - Formulários - Checkbox

    Utilizando o checkbox em um formulario utilizando o Vue JS, e mostrando como fazer com que o checkbox iniciasse marcado ou não, e alterando o texto do mesmo elemento durante o click no checkbox.

Aula 17 - Formulários - Multiplos Checkbox

    Mostrando como funciona o multiplo checkbox e visualizando a montagem dos checks dentro de um array "notificações".

Aula 18 - Formulários - Radio

    Foi feito um botão de rádio mostrando a seleção dos sexos masculino e feminino. Foi utilizado o v-model para fazer com que o dado de sexo recebesse o valor "M" ou "F", de masculino e feminino respectivamente.

Aula 19 - Select e Multiplos Selects

    Fazendo select e multiplos selects e mostrando os resultados em um array utilizando o v-model.

Aula 20 - Formularios Lazy

    O Lazy é utilizado para renderizar um campo somente após o usuario sair do campo input text, clicando fora ou em um botão. 
    Este atributo é chamado como função do v-model, da seguinte maneira:

    v-model.lazy="variavel"

Aula 21 - Number

    Fazendo uma entrada input tipo number, e forçando ela a continuar do tipo number com o v-model.number

Aula 22 - Iniciando projeto com Vue JS de forma profissional

    Introdução a como iniciar um projeto em Vue Js de forma profissional, e mostrando uma amostra do próximo projeto a ser executado durante o curso.

Aula 23 - Instalação do Vue com o CLI

    Foi instalado o vue com o CLI seguindo a documentação oficial do Vue, e montamos o projeto de acordo com o tutorial da udemy.
    
Aula 24 - Entendendo a estrutura do Vue no projeto

    Aqui temos toda a explicação do projeto e como funciona a arquitetura de pastas do Vue JS, e foi feito um pequeno ajuste no componente inicial de inicio do projeto, e alterado a linguagem padrão da página. 
    E também para utilizar o Vue Js e deixar ele compilando em tempo real de edição é utilizado o seguinte comando:
    $ npm run dev

Aula 25 - Baixando o projeto de modelo do NetFlix

    Foi baixado ao projeto os arquivos de projeto de exemplo do netflix, para o usarmos como base para fazer a nossa implementação em Vue Js. E transformar os elementos do projeto cópiado para elementos do Vue Js.

