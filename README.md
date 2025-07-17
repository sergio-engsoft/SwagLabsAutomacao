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
