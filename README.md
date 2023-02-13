# Desafio 04 - Adicionando features ao Ignite Shop

<p align="center" >
  <img src="https://user-images.githubusercontent.com/54115624/218580885-67a7ba7a-cee3-40ed-84a4-7ad5df82c504.png" alt="" width="600" />
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

Nesse desafio, foi necessário implementar um carrinho no nosso projeto, com a opção de adicionar e remover os itens antes de prosseguir ao checkout.


## :interrobang: Motivo

Nesse desafio, aproveitei a aplicação já desenvolvida na trilha **Ignite ReactJS** para implementar um carrinho que utilizará os dados da API do Stripe para buscar os itens existentes, e controlará, através da aplicação, o número de itens que a pessoa deseja comprar.

- [x] Adicionar a possibilidade de adicionar aquele item ao carrinho na página do produto
- [x] Salvar todos os itens selecionados, e exibir o número de itens no carrinho
- [x] Enviar o carrinho que armazenado na aplicação para a rota de checkout, onde irá gerar a sessão de checkout com os ``line_items`` necessários.

Para completar esse desafio foi necessário de realizar algumas pesquisas na documentaçao para entender sobre a API do Stripe.

## :rocket: Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [Axios](https://axios-http.com/)
- [embla-carousel-react](https://www.embla-carousel.com/)
- [immer](https://github.com/immerjs/immer#readme)
- [Phosphor](https://phosphoricons.com/)
- [Radix-UI](https://www.radix-ui.com/)
- [Stitches](https://stitches.dev/)
- [Stripe](https://stripe.com/)
- [use-context-selector](https://github.com/dai-shi/use-context-selector#readme)
- [@rocketseat/eslint-config](https://github.com/rocketseat/eslint-config-rocketseat#readme)

## :art: Layout no Figma

Para essa aplicação foi fornecido um layout para que fosse possível seguir e implementar todas as funcionalidades desenhadas no #Figma.

[Figma - Ignite Shop](https://www.figma.com/file/FxlDRKOmznBbTH8DsTgnZU/Ignite-Shop-2.0/duplicate)

## :rainbow: Documentação de cores

| Cor                | Hexadecimal                                       |
| ------------------ | ------------------------------------------------- |
| white              | #FFFFFF                                           |
|                                                                        |
| gray-100           | #E1E1E6                                           |
| gray-300           | #C4C4CC                                           |
| gray-500           | #8D8D99                                           |
| gray-800           | #202024                                           |
| gray-900           | #121214                                           |
|                                                                        |
| green-300          | #00B37E                                           |
| green-500          | #00875F                                           |
|                                                                        |
| backgroundGradient | linear-gradient(180deg, #1EA483 0%, #7465D4 100%) |

## :abc: Fontes utilizadas

- [Roboto](https://fonts.google.com/specimen/Roboto)

## :zap: Como executar

- Clone o projeto:
```
git clone https://github.com/jerp86/ignite-shop.git
```

- Acesse a pasta clonada:
```
cd ignite-shop
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
