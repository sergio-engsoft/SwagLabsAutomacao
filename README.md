# Swag Labs Automação 🧪🚀

Este repositório contém o projeto de automação de testes End-to-End (E2E) para o site de e-commerce **Swag Labs**. O principal objetivo é garantir a qualidade e a funcionalidade dos principais fluxos da aplicação através de testes automatizados, assegurando uma experiência de usuário sem falhas.

## Sumário do Projeto ✨

* **Tecnologias:** Cypress, JavaScript, Node.js, Git, GitHub Actions.
* **Aplicação Testada:** [https://www.saucedemo.com/](https://www.saucedemo.com/)
* **Foco dos Testes:** Login, Fluxo de Carrinho de Compras, Ordenação de Produtos, Checkout, e validações detalhadas de interface e dados.

## Funcionalidades Testadas (Cobertura) 🎯

O projeto abrange a automação dos seguintes fluxos e cenários essenciais da aplicação:

* **Fluxo de Login:**
    * Login válido com acesso à página de produtos.
    * Cenários de login falho (usuário incorreto, senha incorreta, usuário bloqueado, campos de usuário/senha vazios).
    * Funcionalidade de Logout da aplicação.
* **Fluxo de Carrinho de Compras:**
    * Adição e remoção de produtos ao carrinho (tanto pela página de produtos quanto pela página do carrinho).
    * Adição de múltiplos produtos e validação da contagem do carrinho.
    * Navegação para o carrinho com itens e retorno à lista de produtos.
* **Fluxo de Checkout:**
    * Início do processo de checkout.
    * Preenchimento de informações do cliente (nome, sobrenome, código postal) em cenário de sucesso.
    * Finalização da compra e validação da mensagem de sucesso.
    * Cenários de erro de validação para campos obrigatórios (Primeiro Nome, Último Nome, Código Postal).
    * Cancelamento do processo de checkout com retorno correto ao carrinho.
* **Ordenação de Produtos:**
    * Validação da ordenação de produtos por nome (A-Z e Z-A).
    * Validação da ordenação de produtos por preço (menor para maior e maior para menor).
    * Acesso e validação da Página de Detalhes de Produtos a partir da lista.

## Tecnologias e Ferramentas Utilizadas ⚙️

* **Cypress:** Framework de automação de testes End-to-End (E2E) em JavaScript.
* **JavaScript:** Linguagem de programação principal dos testes.
* **Node.js:** Ambiente de execução para JavaScript.
* **npm (Node Package Manager):** Gerenciador de pacotes e scripts do projeto.
* **Git:** Sistema de controle de versão para o código-fonte.
* **GitHub Actions:** Plataforma de Integração Contínua (CI/CD) para automação da pipeline de testes.
* **Visual Studio Code (VS Code):** Editor de código utilizado para o desenvolvimento.

## Pré-requisitos 📦

Antes de executar os testes, certifique-se de ter as seguintes ferramentas instaladas:

* **Node.js:** (Versão recomendada pelo Cypress, atualmente Node.js 18.x ou 20.x, conforme `package-lock.json`)
* **npm:** (Geralmente vem instalado com o Node.js)
* **Git**

## Como Executar os Testes 🚀

Siga os passos abaixo para configurar e executar os testes em seu ambiente local:

### 1. Clonar o Repositório

```bash
git clone [https://github.com/sergio-engsoft/SwagLabs_automation.git](https://github.com/sergio-engsoft/SwagLabs_automation.git)
cd SwagLabs_automation
2. Instalar as Dependências
Bash

npm install
3. Executar os Testes
Para abrir a interface gráfica do Cypress Test Runner:

Bash

npm run cy:open
Para abrir o Cypress Test Runner com viewport simulando um dispositivo móvel:

Bash

npm run cy:open:mobile
Para rodar os testes em modo headless (sem interface gráfica visível) no terminal:

Bash

npm test
Para rodar os testes em modo headless com viewport simulando um dispositivo móvel no terminal:

Bash

npm run test:mobile
Estrutura do Projeto 📁
A organização do projeto segue as convenções do Cypress para garantir clareza e manutenibilidade:

SwagLabs_automation/
├── cypress/                               # Pasta principal do Cypress
│   ├── e2e/                               # Arquivos de especificação dos testes End-to-End (.cy.js)
│   │   ├── FluxoCarrinho.cy.js            # Testes do fluxo do carrinho
│   │   ├── FluxoCheckout.cy.js            # Testes do fluxo de checkout
│   │   ├── FluxoLogin.cy.js               # Testes do fluxo de login
│   │   └── FluxoOrdenacaoDeProdutos.cy.js # Testes do fluxo de ordenação de produtos
│   ├── support/                           # Comandos customizados e hooks globais
│   │   ├── e2e.js                         # Arquivo de configuração global para carregar comandos e hooks
│   │   ├── ValidarCarrinho.js             # Comandos relacionados ao carrinho
│   │   ├── ValidarCheckout.js             # Comandos relacionados ao checkout
│   │   ├── ValidarFiltro.js               # Comandos relacionados a filtros/ordenação
│   │   ├── ValidarLogin_Logout.js         # Comandos relacionados a login e logout
│   │   ├── ValidarProduto.js              # Comandos para validação de produtos
│   │   └── ValidarUrl.js                  # Comandos para validação de URLs
│   ├── fixtures/                          # Dados estáticos de teste (JSON, CSV, etc.)
│   ├── screenshots/                       # Capturas de tela (ignoradas pelo Git)
│   └── videos/                            # Gravações de vídeo dos testes (ignoradas pelo Git)
├── cypress.config.js                      # Arquivo de configuração principal do Cypress
├── node_modules/                          # Dependências do projeto (ignoradas pelo Git)
├── package.json                           # Metadados do projeto e scripts npm/yarn
├── package-lock.json                      # Versões exatas das dependências
└── .gitignore                             # Arquivo para ignorar arquivos não relevantes para o Git
Integração Contínua (CI/CD) com GitHub Actions 🚀
O projeto utiliza GitHub Actions para automação da Integração Contínua. Uma pipeline de CI/CD é configurada para garantir a qualidade do código a cada alteração:

Localização da Pipeline: O arquivo de configuração da pipeline está em .github/workflows/main.yml (ou um nome similar).

Triggers: A pipeline é acionada automaticamente a cada push (envio de código) e pull request para a branch main (ou outras branches configuradas).

Processo:

Checkout do Código: Clona o repositório.

Configuração do Ambiente: Instala o Node.js na versão correta.

Instalação de Dependências: npm install (com cache para agilizar o processo).

Execução dos Testes Cypress: Roda os testes Cypress em modo headless, garantindo feedback rápido sobre a saúde da aplicação.

Geração de Artefatos (Opcional): Em caso de falha, faz o upload de screenshots e vídeos para facilitar a depuração.

Status Check: O status da execução dos testes é exibido diretamente no GitHub por meio de um badge de status no topo do repositório, fornecendo feedback instantâneo e visibilidade sobre a qualidade do código.

CD (Entrega Contínua - Futuras Melhorias): A pipeline está preparada para incluir etapas de Deploy Contínuo, permitindo a entrega automática da aplicação para ambientes de staging/produção após a aprovação dos testes, caso fosse um projeto de desenvolvimento de software completo.

Autor 👤
Sérgio dos Santos Soares [Meu LinkedIn](http://linkedin.com/in/sergio-dos-santos-soares) | [Meu GitHub](https://github.com/sergio-engsoft)
