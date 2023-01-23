# Fundamentos do Next.js

<p align="center" >
  <img src="https://user-images.githubusercontent.com/54115624/214121250-057630d3-5368-43e6-95d4-5efba88ea824.png" alt="" width="600" />
</>

<p align="center">
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="" />
  </a>
</p>

---

<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#art-layout-no-figma">Figma</a>&nbsp;|&nbsp;
</h3>
<h3 align="center">
  <a href="#rainbow-documenta%C3%A7%C3%A3o-de-cores">Cores</a>&nbsp;|&nbsp;
  <a href="#abc-fontes-utilizadas">Fontes</a>&nbsp;|&nbsp;
  <a href="#zap-como-executar">Executar</a>&nbsp;|&nbsp;
  <a href="#memo-licen%C3%A7a">Licença</a>
</h3>

---

## :information_source: Sobre

Nesse módulo foi criado um projeto completo com o framework Next.js. Foi utilizado StitchesJS, passando por conceitos de SPA, server-side rendering (SSR) e static-site generation (SSG).

Foi desenvolvida uma aplicação de e-commerce, que contém as seguintes funcionalidades:
- Carrossel de produtos
- Mostra do nome e valor após hover do mouse
- Página estática com a descrição completa do produto
- Link para efetuar a compra através do Stripe
- Página estática de sucesso da compra efetuada


## :interrobang: Motivo

Reinicio dos estudos do bootcamp Ignite ReactJS da Rocketseat.

Este projeto foi dividido em quatro partes:
- Estrutura do Next.js
  - Conceitos no Next.js
  - Criação do projeto
  - Criação das rotas
  - Configuração do documento HTML

- Estrutura visual
  - Configuração do Stitches
  - Preparando estilos globais e cabeçalho da aplicação
  - Estruturando a Home utilizando o componente de Imagems do Next.js
  - Criando o carrossel

- Integração com Stripe
  - Configurando conta no Stripe
  - Data Fetching no Next.js
  - Buscando produtos do Stripe
  - Utilizando SSG
  - Formatando preço com Intl

- Produto & Checkout
  - Utilizando navegação via Link do Next.js
  - Estrutura das páginas de Produto e de Sucesso
  - Carregando informações do produto
  - SSG com parâmetros dinâmicos
  - Fallback do SSG
  - Prefetch de links
  - API routes no Next.js
  - Checkout no Stripe
  - Redirect no SSR
  - Trabalhando com SEO

## :rocket: Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [Axios](https://axios-http.com/)
- [ESLint](https://eslint.org/)
- [keen-slider](https://keen-slider.io/)
- [Stitches](https://stitches.dev/)
- [Stripe](https://stripe.com/)
- [@rocketseat/eslint-config](https://github.com/rocketseat/eslint-config-rocketseat#readme)

## :art: Layout no Figma

Para essa aplicação foi fornecido um layout para que fosse possível seguir e implementar todas as funcionalidades desenhadas no #Figma.

[Figma - Ignite Shop](https://www.figma.com/file/OIJJEW24DFiJO6XLqHw2DM/Ignite-Shop/duplicate?node-id=0%3A1)

## :rainbow: Documentação de cores

| Cor                  | Hexadecimal                                       |
| -------------------- | ------------------------------------------------- |
| white                | #FFFFFF                                           |
|                                                                          |
| gray-100             | #E1E1E6                                           |
| gray-300             | #C4C4CC                                           |
| gray-800             | #202024                                           |
| gray-900             | #121214                                           |
|                                                                          |
| green-300            | #00B37E                                           |
| green-500            | #00875F                                           |
|                                                                          |
| backgroundGradient   | linear-gradient(180deg, #1EA483 0%, #7465D4 100%) |

## :abc: Fontes utilizadas

- [Roboto](https://fonts.google.com/specimen/Roboto)

## :zap: Como executar

- Clone o projeto:
```
git clone https://github.com/jerp86/04-ignite-shop.git
```

- Acesse a pasta clonada:
```
cd 04-ignite-shop
```

- Instale as dependências:
```
npm ci
```

- Inicie a fake API e o projeto:
```
npm run dev
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<h4 align="center">
  Feito por Jerp86 👋️
</h4>
<h5 align="center">
  <a href="mailto:jerp.dev@gmail.com">Entre em contato!</a>
</h5>

<p align="center">
  <a href="https://www.linkedin.com/in/jerp/">
    <img alt="Perfil do Linkedin de José Eduardo Rodrigues Pinto" src="https://img.shields.io/badge/LinkedIn-jerp-0e76a8?style=flat&logoColor=white&logo=linkedin">
  </a>
</p>
