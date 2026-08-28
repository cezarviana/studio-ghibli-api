# 🎬 Studio Ghibli API

*Read this in English: [🇺🇸 English](README.md)*

## 📝 Descrição do Projeto

Este é um projeto React com TypeScript que consome a **API pública do Studio Ghibli** para criar uma aplicação web interativa. O projeto exibe os **10 primeiros filmes do Studio Ghibli em ordem alfabética** com uma interface moderna e responsiva. Os usuários podem clicar em qualquer filme para visualizar seus detalhes completos, incluindo descrição, diretor, produtor, data de lançamento e pontuação do Rotten Tomatoes.

Este projeto foi desenvolvido como um **desafio para praticar habilidades com React, TypeScript, Tailwind CSS, React Router e consumo de APIs**.

## 🔎 Funcionalidades

- **Design responsivo** para todos os dispositivos
- **Consumo de API** usando a API do Ghibli (`https://ghibliapi.vercel.app/films`)
- **10 filmes ordenados alfabeticamente** por título
- **Página inicial** exibindo pôsteres e títulos dos filmes
- **Página de detalhes** com informações completas do filme
- **Animação de carregamento** com indicador GIF personalizado
- **Roteamento do lado do cliente** usando React Router
- **Totalmente tipado com TypeScript** para segurança de tipos
- **Estilizado com Tailwind CSS** para UI moderna e limpa
- **Link para voltar à home** a partir da página de detalhes
- **Efeitos de hover** com transições de escala nos cartões de filmes

## 🛠️ Ferramentas e Tecnologias Utilizadas

- **React:** Biblioteca para construção de componentes
- **TypeScript:** Tipagem estática para JavaScript
- **Vite:** Ferramenta de build e servidor de desenvolvimento
- **React Router DOM:** Navegação do lado do cliente
- **Tailwind CSS:** Framework CSS baseado em utilidades
- **Fetch API:** Requisições HTTP para consumir a API
- **Git:** Controle de versão

## 💡 Decisões do Projeto

1. **Separação de Responsabilidades**
   - Criados componentes separados: `Home`, `FilmDetail`, `Header` e `Layout`
   - Cada componente tem uma única responsabilidade para facilitar manutenção e testes

2. **Gerenciamento de Estado**
   - Utilizado hook `useState` para gerenciar filmes e estado de carregamento
   - Implementado estado `isLoading` para lidar com a UI de carregamento durante chamadas à API

3. **Tratamento de Requisições à API**
   - Utilizado hook `useEffect` para buscar dados quando o componente é montado
   - Implementado tratamento de erros com blocos `try-catch`
   - Adicionado `.finally()` para garantir que o estado de carregamento sempre seja atualizado

4. **Interface TypeScript**
   - Criada interface `Movie` para tipar respostas da API
   - Garante consistência de dados e previne erros em tempo de execução

5. **Estilização**
   - Utilizadas classes utilitárias do Tailwind CSS para design responsivo
   - Implementados cálculos customizados de gap e largura com `flex-wrap` para 5 filmes por linha

6. **Estratégia de Roteamento**
   - Utilizado hook `useParams` do React Router para lidar com IDs dinâmicos de filmes
   - Implementado componente `Link` para navegação do lado do cliente

## 📁 Estrutura do Projeto

```
studio-ghibli-api/
│
├── src/
│   ├── assets/
│   │   ├── catbus-loading.gif
│   │   ├── favicon.png
│   │   ├── studio-ghibli.png
│   │   ├── studio-ghibli.svg
│   │   └── studio-shibli-logo-secondary.png
│   │
│   ├── components/
│   │   ├── Header/
│   │   │   └── index.tsx          # Componente de cabeçalho com navegação
│   │   └── Layout/
│   │       └── index.tsx          # Componente de layout principal com Header e Outlet
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   └── index.tsx          # Página de listagem de filmes
│   │   └── FilmDetail/
│   │       └── index.tsx          # Página de detalhes de um filme específico
│   │
│   ├── routes/
│   │   └── index.tsx              # Configuração de rotas com React Router
│   │
│   ├── styles/
│   │   └── globals.css            # Estilos globais e imports do Tailwind
│   │
│   ├── App.tsx                    # Componente principal da aplicação com setup do roteador
│   └── main.tsx                   # Ponto de entrada de renderização do React DOM
│
├── public/
│   └── favicon.ico                # Favicon do website
│
├── index.html                     # Ponto de entrada HTML
├── tsconfig.json                  # Configuração do TypeScript
├── tsconfig.app.json              # Configuração TS específica da aplicação
├── tsconfig.node.json             # Configuração TS da ferramenta de build
├── vite.config.ts                 # Configuração do Vite
├── package.json                   # Dependências do projeto e scripts
└── README.md                       # Este arquivo
```

### Detalhes da Organização das Pastas

- **`src/assets/`** - Imagens, GIFs e outros recursos estáticos utilizados em toda a aplicação
- **`src/components/`** - Componentes React reutilizáveis (Header, Layout)
- **`src/pages/`** - Componentes de nível de página representando diferentes rotas
- **`src/routes/`** - Configuração do React Router e definições de rotas
- **`src/styles/`** - Configuração CSS global e estilos

## 💦 Desafios Enfrentados

- **Compreender genéricos do TypeScript** para tipar o hook `useParams`
- **Implementar renderização condicional** baseada no estado de carregamento
- **Lidar com rotas dinâmicas** e passar IDs através de parâmetros de URL
- **Layout CSS com flexbox** para exibir adequadamente em telas de vários tamanhos
- **Responsividade de estilização** para visualizações mobile e desktop
- **Utilizar Tailwind CSS** para construir um website responsivo e moderno

## 🔓 O Que Aprendi

- Como consumir APIs REST utilizando a Fetch API em React
- Definições de interface TypeScript e segurança de tipos em componentes React
- Utilizar hooks `useParams` e `useEffect` para busca de dados e roteamento
- Padrões de renderização condicional em React
- Design responsivo com Tailwind CSS e flexbox
- React Router DOM para navegação do lado do cliente
- Tratamento de erros e estados de carregamento em operações assíncronas
- Composição de componentes e separação de responsabilidades

## 💭 Possíveis Atualizações Futuras

- ✅ Completar estrutura básica do projeto e roteamento
- Adicionar funcionalidade de busca/filtro de filmes
- Implementar opções de ordenação de filmes (por ano, avaliação, diretor)
- Adicionar recurso de favoritos/marcadores usando localStorage
- Criar componente de carrossel para filmes em destaque
- Adicionar transições de animação entre páginas
- Implementar alternância de tema claro/escuro
- Adicionar internacionalização (Inglês/Português/Espanhol)
- Criar seção detalhada de elenco e equipe
- Adicionar análises de filmes ou avaliações de outras fontes
- Otimizar imagens e implementar lazy loading
- Adicionar testes unitários e de integração

## 🚀 Como Executar o Projeto

Siga os passos abaixo para executar o projeto em sua máquina:

### Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn** gerenciador de pacotes
- **Git** para clonar o repositório

### Passos de Instalação

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/cezarviana/studio-ghibli-api.git
   cd studio-ghibli-api
   ```

2. **Instalar dependências:**
   ```bash
   npm install
   ```

3. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Abrir no navegador:**
   - A aplicação estará disponível em `http://localhost:5173` (ou a URL mostrada no terminal)
   - Abra a URL em seu navegador web

### Scripts Disponíveis

- `npm run dev` - Iniciar servidor de desenvolvimento
- `npm run build` - Construir para produção
- `npm run preview` - Visualizar build de produção localmente
- `npm run lint` - Executar ESLint (se configurado)