<img src="https://beyondcompany.com.br/favicon.svg" width="50px;"/>

# Form build

Este projeto foi desenvolvido para cumprir o desafio enviado por e-mail.
## Explicando arquitetura

Adicionei automações semelhantes ao **Nuxt**. Por exemplo:

- `layouts` - uma estrutura de layouts para extrair padrões de UI comuns em layouts reutilizáveis.
- `composables` - uma estrutura de separar a lógica dos elementos de UI.


Com o layout conseguimos não só extrair padrões de layouts como também aplicar-mos `middlewares` que podem ser enviados através da `meta property` do vue-router.


Optei também por usar a `composition-api` que foi introduzida no **vue 3**, porém o vue 2.7 tem suporte nativo nas principais funcionalidades. Com a composition-api conseguimos desacoplar a lógica do nosso componente e reutilizá-la em qualquer outro cenário, muito utilizado em forma de composables.

Seguindo o mesmo principío da `composition-api`, apliquei no meu `store` com o pinia, mantendo o mesmo padrão em toda a aplicação.

Segui o padrão de nomenclaturas e pastas:
- `The<Component>` - Components que geralmente são partes fixas do projeto.
- `Vue<Component>` - Components que geralmente são components pai de configurações ou automações
- `src/components/ui/*` - Todos os components que irão se repetir ao longo do projeto: Card, Button, Input, Form, Label e etc.


## Stack utilizada

<img src="https://img.shields.io/static/v1?label=Feito Com&message=Vue&color=41b883&style=for-the-badge&logo=Vue.js"/>

<img src="https://img.shields.io/static/v1?label=Feito Com&message=Tailwindcss&color=41b883&style=for-the-badge&logo=tailwindcss"/>



Segue lista dos principais pacotes utilizados no projeto:

- Tailwindcss
- Vue-Tailwind
- V-Money
- Vue-Toastification
## Setup do projeto

Clone o projeto

```bash
git clone https://link-para-o-projeto
```

Entre no diretório do projeto

```bash
cd beyond-form-build
```

Instale as dependências

```bash
yarn install
```

Inicie o servidor

```bash
yarn dev
```


Execute o build (opcional)

```bash
yarn build
```

Inicie o servidor em modo de produção (opcional)

```bash
yarn preview
```

### Observação 

Por conta da versão 2.7 (EOL - end of life) do Vue, o typescript não oferece total suporte as novas funcionalidades do `composition-api`, por isso o modo `preview` pode não funcionar em alguns casos. 

## Autores

<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/54776441?v=4" width="90px;"/>

<sub><b>José Jorge</b></sub>