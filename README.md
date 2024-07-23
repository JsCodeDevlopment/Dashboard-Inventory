# AppTrack

<p align='center'>
  <img src='https://github.com/elielgomes/app-pontotrack/assets/108281436/9c94463b-f7ef-45dc-a08b-b6be13260d7a'/>
</p>

## 📌 Introdução

Bem-vindo ao **AppTrack**! Este projeto é uma aplicação web front-end desenvolvida para simular um serviço de rastreamento de veículos. A aplicação oferece uma interface responsiva e funcionalidades robustas para proporcionar uma experiência de usuário imersiva e eficiente.

## ⚙️ Instalação e Configuração

### 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior.

### 🔧 Passos para Configuração

1. **Clone o Repositório:**

```bash
git clone https://github.com/elielgomes/app-pontotrack.git
cd app-pontotrack
```

2. **Instale as Dependências:**

```bash
npm install
```

3. **Configuração das Variáveis de Ambiente:**

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Inicie a Aplicação:**

```bash
npm run dev
```

### 🛠 Conectando ao Backend

Para que o **AppTrack** funcione corretamente, é necessário clonar e configurar o backend (API). Siga os passos abaixo:

1. **Clone o Repositório da API:**

```bash
git clone https://github.com/elielgomes/api-pontotrack.git
cd api-pontotrack
```

2. **Siga as Instruções de Configuração da API:**

As instruções para configurar e iniciar a API estão detalhadas no [README da API](https://github.com/elielgomes/api-pontotrack).

3. **Inicie a API:**

Após seguir as instruções no README da API, inicie a API para que o front-end possa se comunicar com ela.

## ✏️ Descrição do Projeto

O **AppTrack** é uma aplicação web que oferece funcionalidades de CRUD (Create, Read, Update, Delete) de usuários. A arquitetura da aplicação segue padrões como MVVM e Compositions, além de princípios SOLID, garantindo uma estrutura sólida e escalável.

## 🛠️ Funcionalidades

- Autenticação de usuário.
- Registro e login de usuários.
- Atualização de informações do usuário.
- Alteração de senha.
- Seleção de tema para a aplicação.

## 🌐 Uso de Dados Estáticos

### 📊 Páginas de Dashboard e Veículos
Para melhorar a experiência do usuário e facilitar a visualização do layout, as páginas de dashboard e veículos utilizam dados estáticos mockados. Esses dados são utilizados apenas para fins de demonstração e não refletem informações reais de rastreamento de veículos.

- Dashboard: Exibe informações resumidas e estatísticas mockadas sobre o sistema de rastreamento.
- Veículos: Mostra uma lista de veículos com detalhes fictícios, permitindo ao usuário visualizar como as informações reais seriam apresentadas.
Esses dados estáticos ajudam a criar uma experiência mais fluida e visualmente agradável, além de permitir a verificação do design e funcionalidade sem a necessidade de integração com dados reais.

## 🔗 Acesso ao Projeto

Você pode acessar o projeto clicando [aqui](https://apptrack-coral.vercel.app/) ou pelo link: https://apptrack-coral.vercel.app/

## 👨🏻‍💻 Tecnologias Utilizadas
![React.js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)&nbsp;
![Tailwindcss](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)&nbsp;
![Next.js](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)&nbsp;
![Tanstack Query](https://img.shields.io/badge/-Tanstack%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![Shadcn](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)&nbsp;
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)&nbsp;
![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)&nbsp;
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

- **[React](https://reactjs.org/)**: Biblioteca JavaScript para criação de interfaces de usuário interativas.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS para estilização eficiente.
- **[Next.js](https://nextjs.org/)**: Framework React para renderização do lado do servidor.
- **[Tanstack Query](https://tanstack.com/query)**: Biblioteca para gerenciamento de estado e busca de dados no cliente.
- **[Shadcn UI](https://shadcn.dev/)**: Componentes UI para React.
- **[Axios](https://axios-http.com/)**: Cliente HTTP para realizar requisições.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática opcional.
- **[Git/GitHub](https://github.com/)**: Controle de versão distribuído e plataforma de hospedagem de código-fonte.

## 📄 Licença

Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo [LICENSE](https://github.com/elielgomes/app-pontotrack/blob/main/LICENSE.md).

## ✒️ Autor

Feito por [Eliel Gomes](https://github.com/elielgomes).
