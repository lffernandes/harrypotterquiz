

<h1 align="center">
      <a href="#" alt="Quiz Harry Potter">Quiz Harry Potter</a>
</h1>

<h3 align="center">
     "Juro solenemente fazer ~~nada~~ tudo de bom" 
</h3>


<h4 align="center">
	🚧   Concluído 🚀 🚧
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Funcionalidades](#-funcionalidades)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Rodando a aplicação web (Frontend)](#user-content--rodando-a-aplicação-web-frontend)
   * [Tecnologias](#-tecnologias)
     * [WebSite](#user-content-website--react----typescript)
   * [Autor](#-autor)
   * [Licença](#user-content--licença)
<!--te-->


## 💻 Sobre o projeto

Quiz Harry Potter - é uma forma de testar os seus conhecimentos sobre a Saga Harry Potter da escritora J. K. Rowling.

Projeto foi desenvolvido durante a imersão Reack e Next.js da Aura de 25/01/2021 à 29/01/2021.
Foi o meu primeiro contato com React e Next.Js, amei a experiência e quero conhecer mais as duas stacks.

---

## ⚙️ Funcionalidades

- [x] Visualização dos participantes do sorteio por categoria:
  - [x] visualização do nome e do cpf dos participantes 
  - [x] Visualização do total de participantes válidos
- [x] Realização dos sorteios das habitações por categoria:
  - [x] Visualização do nome e do cpf dos sorteados
 
---


## 🚀 Como executar o projeto


1. Frontend (pasta SorteioHabFrant)


💡O Frontend precisa que o Backend esteja em execução para funcionar.

### Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone git@github.com/lffernandes/Sorteio

# Acesse a pasta do projeto no terminal/cmd
$ cd SorteioHab

# Vá para a pasta SorteioHabBack
$ cd SorteioHabBack

# Compile a aplicação
$ dotnet build

# Vá para a pasta SorteioHab.Domain.Tests (Opcional)
$ cd SorteioHab.Domain.Tests

# Execute os testes 
$ dotnet test

# Vá para a pasta SorteioHab.Domain.Api
$ cd SorteioHab.Domain.Api

# Execute a aplicação SorteioHab.Domain.Api
$ dotnet watch run

# O servidor inciará na porta:5001- acesse https://localhost:5001 ou na porta 5000- acesse http://localhost:5000

```



#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone git@github.com/lffernandes/Sorteio


# Acesse a pasta do projeto no seu terminal/cmd
$ cd SorteioHab

# Vá até a pasta "SorteioHabFront", nossa aplicação Front End
$ cd SorteioHabFront

# Instale as dependências
$ npm install

# Execute a aplicação 
$ ng serve

# A aplicação será aberta na porta:4200- acesse https://localhost:4200

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### ** BACK END ** ([DotNet Core](https://dotnet.microsoft.com/download/))

-   **(/SorteioHab.Domain)**
    -   **[Flunt](https://github.com/andrebaltieri/flunt) "1.0.5"**
    
-   **(/SorteioHab.Domain.Api)**
    -   **[EntityFrameworkCore] "3.1.0"**
    -   **[EntityFrameworkCore.Design] "3.1.0"**
    -   **[EntityFrameworkCore.SqlServer] "3.1.0"**
    -   **[EntityFrameworkCore.Tools] "3.1.0" **
    
-   **(/SorteioHab.Domain.Infra)**
    -   **[EntityFrameworkCore] "3.1.0"**
    -   **[EntityFrameworkCore.Design] "3.1.0"**
    -   **[EntityFrameworkCore.SqlServer] "3.1.0"**
    -   **[EntityFrameworkCore.Tools] "3.1.0" **
    -   **[EntityFrameworkCore.Relational] "3.1.0" **
    
-   **(/SorteioHab.Domain.Tests)**
    -   **[Coverlet.collector] "1.2.0"**
    -   **[Flunt](https://github.com/andrebaltieri/flunt) "1.0.5"**
    -   **[Microsoft.NET.Test.Sdk] "16.5.0"**
    -   **[MSTest.TestAdapter] "2.1.0"**
    -   **[MSTest.TestFramework] "2.1.0"**    



#### ** FRONT END **  [Angular](https://www.typescriptlang.org/) + [React](https://reactjs.org/) + [HTML] + [CSS] + [Typescript] + [Typescript]


-    **[angular/animations] "~11.0.1"**
-    **[angular/common] "~11.0.1"**
-    **[angular/compiler] "~11.0.1"**
-    **[angular/core"] ~11.0.1"**
-    **[angular/forms] "~11.0.1"**
-    **[angular/platform-browser] "~11.0.1"**
-    **[angular/platform-browser-dynamic] "~11.0.1"**
-    **[angular/router] "~11.0.1"**
-    **[bower] "^1.8.8"**
-    **[grunt-cli] "^1.3.2"**
-    **[rxjs] "~6.6.0"**
-    **[tslib] "^2.0.0"**
-    **[zone.js] "~0.10.2"**



---

## 🦸 Autor


 <sub><b>Luiz Felipe M. Fernandes</b></sub></a> <a href="https://www.linkedin.com/in/luizffernandes/" title="lzfrnds">🚀</a>
 
[![Linkedin Badge](link=https://www.linkedin.com/in/luizffernandes/)](https://www.linkedin.com/in/luizffernandes/) 
[![Gmail Badge](logo=Gmail&logoColor=white&link=mailto:luiz.fernandesgti@gmail.com)](mailto:luiz.fernandesgti@gmail.com)

---

## 📝 Licença


Feito com ❤️ por Luiz Felipe M. Fernandes 👋🏽 [Entre em contato!](https://www.linkedin.com/in/luizffernandes/)

---

