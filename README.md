
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
├── package.json      # Gerencia dependências, scripts e metadados do projeto
├── vite.config.ts    # Configurações do bundler Vite
├── tsconfig.json     # Configuração principal do TypeScript
├── tsconfig.app.json # Configuração TypeScript para o app React
├── tsconfig.node.json# Configuração TypeScript para scripts Node/Vite
├── README.md         # Documentação do projeto
```

### Descrição dos principais arquivos de configuração

- **package.json**: Gerencia as dependências, scripts e informações do projeto.
- **vite.config.ts**: Configura o bundler Vite, plugins e opções de build.
- **tsconfig.json**: Arquivo principal de configuração do TypeScript, referencia outros arquivos de configuração.
- **tsconfig.app.json**: Configuração TypeScript específica para o código do app React.
- **tsconfig.node.json**: Configuração TypeScript para scripts Node.js e arquivos de configuração do Vite.


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

| Comando                      | Descrição                                 |
|------------------------------|-------------------------------------------|
| npm install                  | Instala todas as dependências do projeto  |
| npm run dev                  | Inicia o servidor de desenvolvimento      |
| npm run build                | Gera o build de produção                  |
| npm run preview              | Visualiza o build gerado                  |
| npm run lint                 | Executa o ESLint para análise de código   |
| npm cache clean --force      | Limpa o cache do npm                      |
| rmdir /s /q node_modules     | Remove a pasta node_modules (Windows)     |
| rm -rf node_modules          | Remove a pasta node_modules (Linux/Mac)   |
| del /q package-lock.json     | Remove o arquivo de lock (Windows)        |
| rm package-lock.json         | Remove o arquivo de lock (Linux/Mac)      |

Para rodar o lint:
```bash
npm run lint
```

Para limpar cache e reinstalar dependências (Windows):
```cmd
rmdir /s /q node_modules
del /q package-lock.json
npm cache clean --force
npm install
```

Para limpar cache e reinstalar dependências (Linux/Mac):
```bash
rm -rf node_modules
rm package-lock.json
npm cache clean --force
npm install
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
