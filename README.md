# PeakInvest_app
---
## Sobre o aplicativo

Projeto desenvolvido para a empresa Peak Invest.
O objetivo era montar uma aplicação básica com duas camadas: front-end usando Angular e  back-end usando ASP.NET C#.
O aplicativo teria duas telas: uma de cadastro (para simulação de empréstimo) e outra de consulta (bara buscar usuários).

---

## Como instalar

Pre-requisitos para rodar o projeto: 
- NPM
- dotnet

Copie o ssh do projeto `git@github.com:LuizaAntiques/PeakInvest_app.git`

* Abra um terminal no seu computador e utilize os comandos a baixo na ordem que são apresentados:

  * `git clone git@github.com:LuizaAntiques/PeakInvest_app.git`
  * `cd PeakInvest_app`
  * `cd Frontend`
  * `npm install`
  
  O backend está configurado para rodar na porta local 5000.

---

## Modo de utilização

* Para rodar o Frontend do projeto utilize os comando abaixo:

  * `cd PeakInvest_app`
  * `cd Frontend`
  * `npm start`

* Para rodar o Backend do projeto utilize os comando abaixo:

  * `cd PeakInvest_app`
  * `cd Backend`
  * `dotnet watch run`

A API consta com 2 rotas:

1 - Na rota 'api/cadastro' (POST) - É possível simular as parcelas de empréstimo.

2 - Na rota 'api/consulta/:id' (GET) - É possível consultar usuários por id.

---

Qualquer dúvida ou sugestão, entre em contato:

[![Linkedin: Luiza Antiques](https://img.shields.io/badge/-LuizaAntiques-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/luizaantiques/)](LINK-DO-SEU-LINKEDIN)
[![Gmail Badge](https://img.shields.io/badge/-luiza.antiques@gmail.com-006bed?style=flat-square&logo=Gmail&logoColor=white&link=mailto:luiza.antiques@gmail.com)](mailto:SEU-EMAIL)
