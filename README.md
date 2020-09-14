<img src="https://blog.dankicode.com/wp-content/uploads/2019/07/o-que-e%CC%81-react-js.png" width="1200"/>

### Boas práticas de React

1. Tente deixar os componentes da forma re-utilizavel possível 
2. Use mocks para arrays, listas, etc que retornam dados fake
3. Tente organizar os componentes em hierarquia

### Anotações sobre o curso básico

#### Webpack

Webpack é um **empacotador de módulos** para aplicações JS em um unico arquivo. Ele suporta fontes, css, imagens, 
html, js e plugins.

Principais conceitos do Webpack:

:large_blue_circle: **Entry:** utilizando grafo, o webpack precisa de um ponto de entra para buscar todos os módulos e dependencias 

:large_blue_circle: **Output:** para determinar quais são os módulos que ele vai exportar

:large_blue_circle: **Loaders:** para permitir que o webpack gerencie arquivos que não são do tipo js

:large_blue_circle: **Plugins:** podem ser usados para otimização de pacotes, minificação, injeção de scripts e etc

:large_blue_circle: **Mode:** utilizado para abordagem de configuração do zero. É possivel configurar módulos como production, development ou none.
O default é development.

**Production:** trás otmizações internas e gera um arquivo final.

**Development:** é executa 3 plugins básicos 

**None:** não passamos nenhuma configuração

:memo: Chaves (keys) devem ser unicas apenas entre elementos irmãos 

:memo: O parametro **e** registra o que aconteceu em um evento

<hr/>

### Desenvolvimento de aplicações para internet com ReactJS

**Stateful:** Usa estados, possui gerenciamento de estados no componente e é construído usando classes em JS. É o **ciclo de vida** no React

**Stateless:** Não usa estados, não possui gerenciamento de estados no componentes e é construido usando funções em JS. Usado para renderizar imagens, textos comuns, etc

**Formulários** matem um estado interno ao próprio DOM

A diferença ao utilizar o _useState_ invés de uma variável comum é poder dizer ao React que quando essa variável mudar ele precisa renderizar novamente os componentes dependentes dela.
