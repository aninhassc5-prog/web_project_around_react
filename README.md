# Tripleten web_project_around_react

Este é um projeto desenvolvido durante a **Sprint 14** do curso de Desenvolvimento Web da TripleTen. A aplicação consiste numa galeria de fotos interativa onde os utilizadores podem gerir o seu perfil, adicionar locais (cartões), curtir ou remover fotos, tudo integrado com uma API remota.

O principal objetivo desta etapa foi refatorar a base de código antiga para React, aplicando o paradigma declarativo, componentização avançada, hooks e o gerenciamento de estado global com Contexto.

---

## 🚀 Funcionalidades Remodeladas

- **Autenticação e Perfil Dinâmico:** Carregamento assíncrono dos dados do utilizador (Nome, Sobre mim, Avatar) através da API.
- **Edição de Perfil Gerenciada:** Formulário de alteração de dados pessoais utilizando componentes controlados (`useState`).
- **Atualização de Avatar via DOM:** Upload de nova foto de perfil utilizando referências diretas (`useRef`) para otimização de renderização.
- **Abordagem Declarativa em Cartões:**
  - Criação de novos locais adicionados instantaneamente no topo da lista.
  - Sistema de likes síncronos com atualização dinâmica de classes no botão.
  - Remoção de cartões em tempo real com filtragem de estado (`filter`).
- **Popups Inteligentes (Modais):** Centralização dos estados de abertura e fecho no componente pai (`App.jsx`), transmitidos de forma limpa via props para os componentes filhos.
- **Visualização de Imagens Ampliadas:** Utilização do componente reutilizável `<ImagePopup />` que substitui o antigo JSX inline.

---

## 🛠️ Tecnologias Utilizadas

- **React.js** (Hooks: `useState`, `useEffect`, `useContext`, `useRef`)
- **React Context API** (Para o gerenciamento e distribuição do `CurrentUserContext`)
- **Vite** (Ferramenta de build e servidor de desenvolvimento ultra-rápido)
- **JavaScript (ES6+)** (Abordagens assíncronas com `async/await` e Promises)
- **CSS3** (Metodologia BEM, Flexbox, Grid Layout e Design Responsivo)
- **Fetch API** (Para comunicação com o servidor remoto da TripleTen via REST)

---

## ✒️ Autora

- **Ana Sofia Sanches** - _Desenvolvimento e Refatoração para React_
