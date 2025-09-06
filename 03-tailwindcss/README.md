# TailwindCSS

Esta versão utiliza **TailwindCSS** para estilização com suporte a tema claro e escuro.

## Estrutura

- `tailwind.config.js`: Configuração do Tailwind, incluindo `darkMode: 'class'`
- `src/index.css`: Importação das diretivas base do Tailwind (`@tailwind base`, `components`, `utilities`)
- `src/components/`: Componentes estilizados com classes utilitárias do Tailwind
- Alternância de tema via classe `dark` no elemento `<html>`

## Como executar

```bash
npm install
npm start
