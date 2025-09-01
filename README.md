
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

## Principais Dependências
- React
- TypeScript
- Vite
- Material UI
- react-i18next
- ESLint

## Como contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b minha-feature`)
3. Commit suas alterações (`git commit -m 'Minha feature'`)
4. Faça push para a branch (`git push origin minha-feature`)
5. Abra um Pull Request

---
Desenvolvido por [jonatadev](https://github.com/jonatadev)
