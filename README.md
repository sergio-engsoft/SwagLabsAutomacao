# 🧪🚀 Swag Labs Automação

![CI](https://github.com/sergio-engsoft/SwagLabsAutomacao/actions/workflows/main.yml/badge.svg?branch=main)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![License](https://img.shields.io/badge/license-Apache%202.0-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen)

Este repositório contém um projeto de automação de testes End-to-End (E2E) para o site de e-commerce Swag Labs. O objetivo é demonstrar a aplicação de boas práticas de engenharia de software na garantia de qualidade (QA), utilizando um framework moderno para validar os fluxos críticos da aplicação e assegurar uma experiência de usuário robusta e sem falhas.

![Desktop 2025 07 21 - 21 50 56 01 mp4](https://github.com/user-attachments/assets/e6360f14-4378-4b10-8d44-0b7f6869991d)

## ✨ Sumário do Projeto 
* **Tecnologias:** Cypress, JavaScript, Node.js, Git, GitHub Actions.
* **Aplicação Testada:** [https://www.saucedemo.com/](https://www.saucedemo.com/)
* **Foco dos Testes:** Login, Fluxo de Carrinho de Compras, Ordenação de Produtos, Checkout, e validações detalhadas de interface e dados.

## Cobertura de Testes (26 Cenários Automatizados)🎯
O projeto abrange a automação dos seguintes fluxos e cenários essenciais da aplicação:

* **Fluxo de Login (7 cenários):**
    * Login válido com acesso à página de produtos.
    * Cenários de login falho (usuário incorreto, senha incorreta, usuário bloqueado, campos de usuário/senha vazios).
    * Funcionalidade de Logout da aplicação.
      
* **Fluxo de Carrinho de Compras (6 cenários):**
    * Adição e remoção de produtos ao carrinho (tanto pela página de produtos quanto pela página do carrinho).
    * Adição de múltiplos produtos e validação da contagem do carrinho.
    * Navegação para o carrinho com itens e retorno à lista de produtos.
      
* **Fluxo de Checkout (7 cenários):**
    * Início do processo de checkout.
    * Preenchimento de informações do cliente (nome, sobrenome, código postal) em cenário de sucesso.
    * Finalização da compra e validação da mensagem de sucesso.
    * Cenários de erro de validação para campos obrigatórios (Primeiro Nome, Último Nome, Código Postal).
    * Cancelamento do processo de checkout com retorno correto ao carrinho.
      
* **Ordenação de Produtos (6 cenários):**
    * Validação da ordenação de produtos por nome (A-Z e Z-A).
    * Validação da ordenação de produtos por preço (menor para maior e maior para menor).
    * Acesso e validação da Página de Detalhes de Produtos a partir da lista.
 
##  🧠 Planejamento e Estratégia de Testes
Antes da automação, foi realizado um planejamento completo de testes para garantir uma cobertura estratégica e alinhada aos objetivos de negócio. Este processo, documentado em um relatório técnico detalhado, incluiu:

 * Análise de Requisitos e Histórias de Usuário: As funcionalidades da aplicação foram traduzidas em Histórias de Usuário (User Stories) para capturar a perspectiva do cliente.
   
 * Definição de Critérios de Aceitação: Para cada história, foram definidos Critérios de Aceitação claros, que serviram como base para a validação dos testes.
   
 * Criação de Casos de Teste Manuais: Foram escritos 26 casos de teste detalhados em formato Gherkin (Dado-Quando-Então), descrevendo passo a passo as ações e os resultados esperados para cada cenário.    

Essa fase de planejamento manual foi fundamental para guiar o desenvolvimento dos scripts automatizados, garantindo que a automação estivesse focada nos fluxos de maior valor e risco para a aplicação.

[Documentação tecnica SwagLabs.pdf](https://github.com/user-attachments/files/21759607/Documentacao.tecnica.SwagLabs.pdf)

## 🏛️ Arquitetura e Padrões de Projeto
A filosofia deste projeto é tratar o código de automação como um produto de software de primeira classe. Para isso, em vez de adotar o padrão Page Object Model (POM) tradicional, a arquitetura utiliza Comandos Customizados do Cypress, uma abordagem mais alinhada com o ecossistema funcional do Cypress.

Comandos Customizados (`cypress/support`)

Este padrão consiste em encapsular interações e validações complexas ou repetitivas em comandos reutilizáveis. Cada arquivo no diretório `cypress/support` (ex: `ValidarCarrinho.js`, `ValidarCheckout.js`) agrupa um conjunto de ações e asserções relacionadas a um fluxo específico.

Vantagens desta abordagem:

 * Reusabilidade Máxima: Ações como `login`, `adicionarProdutoAoCarrinho` ou `preencherFormularioCheckout` são definidas uma única vez e podem ser chamadas em qualquer arquivo de teste, tornando os testes mais limpos e concisos.

 * Legibilidade Aprimorada: Os testes se tornam mais declarativos, focando no "o quê" está sendo testado (a jornada do usuário) em vez do "como" (os detalhes de implementação dos cliques e seletores).

 * Manutenção Simplificada: Se um fluxo de negócio ou um seletor de elemento muda, a alteração é feita em um único local (o arquivo de comando customizado), e todos os testes que o utilizam são atualizados automaticamente.

Essa estratégia de design promove um código mais limpo, DRY (Don't Repeat Yourself) e altamente manutenível.

## 📁 Estrutura do Projeto 
A organização do projeto segue as convenções do Cypress para garantir clareza e manutenibilidade:
```
SWAGLABS_AUTOMATION/
├──.github/
│   └── workflows/
│       └── main.yml
├── cypress/
│   ├── e2e/
│   │   ├── fluxoCarrinho.cy.js
│   │   ├── fluxoDeCheckout.cy.js
│   │   ├── fluxoDeLogin.cy.js
│   │   └── fluxoOrdenacaoDeProdutos.cy.js
│   └── support/
│       ├── e2e.js
│       ├── ValidarCarrinho.js
│       ├── ValidarCheckout.js
│       ├── ValidarFiltro.js
│       ├── ValidarLogin_Logout.js
│       ├── ValidarProduto.js
│       └── ValidarUrl.js
├──.gitignore
├── cypress.config.js
├── LICENSE.md
├── package-lock.json
├── package.json
└── README.md
```
      
## Tecnologias e Ferramentas Utilizadas ⚙️

* **Cypress:** Framework de automação de testes End-to-End (E2E) em JavaScript.
* **JavaScript:** Linguagem de programação principal dos testes.
* **Node.js:** Ambiente de execução para JavaScript.
* **npm (Node Package Manager):** Gerenciador de pacotes e scripts do projeto.
* **Git:** Sistema de controle de versão para o código-fonte.
* **GitHub Actions:** Plataforma de Integração Contínua (CI/CD) para automação da pipeline de testes.
* **Visual Studio Code (VS Code):** Editor de código utilizado para o desenvolvimento.

## 📦 Pré-requisitos 

Antes de executar os testes, certifique-se de ter as seguintes ferramentas instaladas:

* **Node.js:** (Versão recomendada pelo Cypress, atualmente Node.js 18.x ou 20.x, conforme `package-lock.json`)
* **npm:** (Geralmente vem instalado com o Node.js)
* **Git**

## 🚀 Como Executar os Testes 

Siga os passos abaixo para configurar e executar os testes em seu ambiente local:

1. Clonar o Repositório
```
git clone https://github.com/sergio-engsoft/SwagLabs_automation.git cd SwagLabs_automation
```
2. Instalar as Dependências
```
npm install
```
3. Executar os Testes
Para abrir a interface gráfica do Cypress Test Runner:
```
npm run cy:open
```
Para abrir o Cypress Test Runner com viewport simulando um dispositivo móvel:
```
npm run cy:open:mobile
```
Para rodar os testes em modo headless (sem interface gráfica visível) no terminal:
```
npm test
```
Para rodar os testes em modo headless com viewport simulando um dispositivo móvel no terminal:
```
npm run test:mobile
```

##  ⚙️ Integração Contínua (CI/CD)

O projeto utiliza GitHub Actions para automação da Integração Contínua. O workflow, definido em `.github/workflows/main.yml`, é acionado a cada `push` e `pull request` para a branch `main`, garantindo que a qualidade do código seja verificada automaticamente.

## 📜 Licença

Este projeto está licenciado sob a Licença Apache 2.0. Veja o arquivo(LICENSE.md) para mais detalhes.

## Links Úteis 🔗

* **Documentação Tecnica:** [Documentação tecnica SwagLabs.pdf](https://github.com/user-attachments/files/21759607/Documentacao.tecnica.SwagLabs.pdf)
* **Aplicação Testada:** [https://www.saucedemo.com/](https://www.saucedemo.com/)
* **Repositório no GitHub:** [https://github.com/sergio-engsoft?tab=repositories](https://github.com/sergio-engsoft?tab=repositories)
* **Meu LinkedIn:** [https://www.linkedin.com/in/sergio-dos-santos-soares/](https://www.linkedin.com/in/sergio-dos-santos-soares/)
* **E-mail:** sergiodossantossoares@hotmail.com

