
# jonatasalvesreact

Projeto pessoal desenvolvido em React, TypeScript e Vite.

## Funcionalidades
- Internacionalização (i18n) com suporte a inglês, espanhol e português
- Listagem de livros, artigos e informações pessoais
- Interface moderna com Material UI
- ScrollSpy e navegação dinâmica

## Estrutura do Projeto

```
├── public/           # Arquivos públicos, imagens, livros, ícones, traduções
├── src/              # Código-fonte do React
│   ├── assets/       # Imagens e ícones usados na interface
│   ├── components/   # Componentes React reutilizáveis
│   ├── locales/      # Traduções (i18n)
│   ├── App.tsx       # Componente principal
│   └── ...           # Outros arquivos de configuração
├── package.json      # Dependências e scripts
├── vite.config.ts    # Configuração do Vite
├── tsconfig*.json    # Configuração do TypeScript
├── README.md         # Este arquivo
```


## Instalação e Uso

1. Instale as dependências:
  ```bash
  npm install
  ```

2. Rode o projeto em modo desenvolvimento:
  ```bash
  npm run dev
  ```

3. Para build de produção:
  ```bash
  npm run build
  ```

4. Para visualizar o build:
  ```bash
  npm run preview
  ```

## Principais comandos npm

| Comando            | Descrição                                 |
|--------------------|-------------------------------------------|
| npm install        | Instala todas as dependências do projeto  |
| npm run dev        | Inicia o servidor de desenvolvimento      |
| npm run build      | Gera o build de produção                  |
| npm run preview    | Visualiza o build gerado                  |
| npm run lint       | Executa o ESLint para análise de código   |

Para rodar o lint:
```bash
npm run lint
```

## Principais Dependências
- React
- TypeScript
- Vite
- Material UI
- react-i18next
- ESLint

---
Desenvolvido por [jonatadev](https://github.com/jonatadev)
