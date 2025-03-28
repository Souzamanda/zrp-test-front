# Pokedex Front-end
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![ReactRouter](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![TailwindCss](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

## Sobre
App, desenvolvido como teste para ZRP, que retorna algumas informações do pokemon quando colocado o nome ou o número na URL ou na caixa de input.
As informações retornadas são: 
- Nome do pokemon
- Id do pokemon
- Habilidades (em ordem alfabética)
- Tipos do pokemon
- Imagem do pokemon versão normal e versão shiny

Esse projeto foi construído com:
- Vite (React + Typescript)
- Tailwindcss
- Axios
- React-router

## Pre-requisitos
- Node v20.17
- yarn

## Instrução de instalação
Clone o repositório

Crie um arquivo .env seguindo o exemplo e substitua a URL pela URL gerada pelo back (provavelmente http://localhost:8080)

Rode o comando para instalar as dependências:
```bash
yarn install
```

## Instrução de uso
1. Para inicializar o projeto, rode:
```bash
yarn vite
```
2. Abra localhost:5173 para a Home
3. Coloque o **nome** ou o **id** do pokemon no campo de input 
![input mode](/src/assets/image.png)

ou na url (``localhost:5173/nome``)
![url mode](/src/assets/url.png)
