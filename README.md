# DiarioFront

Front-end em Angular para o [MeuDiarioSenac](https://github.com/Butzki/MeuDiarioSenac), consumindo a API de registros de diário pessoal.

## Tecnologias

| Tecnologia | Uso neste projeto |
|---|---|
| **Angular 18** (standalone components) | Framework principal — sem `NgModule`, cada componente declara seus próprios imports |
| **Angular SSR (`@angular/ssr`)** | Renderização no servidor configurada (`server.ts`, `app.config.server.ts`) |
| **RxJS** | Observables para as chamadas HTTP (`HttpClient`) |
| **TypeScript** | Linguagem |
| **Karma + Jasmine** | Testes unitários (scaffolding pronto, specs ainda vazios) |

## Estrutura do projeto

```
src/app/
├── app.component.ts              — componente raiz, hoje renderiza direto <app-registros>
├── app.routes.ts                 — rotas (ainda vazio — ver pendências)
├── app.config.ts                 — providers globais (router, HttpClient, hidratação SSR)
└── components/
    ├── login/                    — componente de login (criado, ainda sem implementação)
    └── registros/
        ├── registros.component.ts    — lista registros, modal de criação, chama a API
        └── card-registro/
            ├── Registro.ts           — interface do modelo de dados do front
            └── card-registro.component.ts — exibe um registro individual
```

## Como os componentes se conectam com o back-end

`RegistrosComponent` injeta `HttpClient` e chama `GET /api/registros` e `POST /api/registros`. O prefixo `/api` é redirecionado para a WebApi (`http://localhost:5109`) pelo **proxy de desenvolvimento** configurado em `src/proxy.conf.json` e ligado ao `ng serve` via `angular.json` (`serve.options.proxyConfig`). Isso evita problema de CORS em desenvolvimento, sem precisar configurar nada no back.

## Funcionalidades atuais

- Listagem de registros ao carregar a página
- Criação de novo registro via modal (título + conteúdo; a data é preenchida automaticamente com o horário local do navegador, para bater com a validação de "data atual" do back-end)
- Exibição de cada registro em card (título, data formatada, conteúdo)

## Como rodar

### Pré-requisitos

- Node.js e npm instalados
- A WebApi do [MeuDiarioSenac](https://github.com/Butzki/MeuDiarioSenac) rodando em `http://localhost:5109`

### Passo a passo

```bash
git clone https://github.com/Butzki/DiarioFront.git
cd DiarioFront
npm install
npm start
```

Acesse `http://localhost:4200`. Com o back-end já rodando, a listagem de registros deve aparecer automaticamente.

## Boas práticas já aplicadas neste projeto (referência rápida)

Para quem está começando em Angular, estes são os padrões que este repositório já segue e vale manter em qualquer componente novo:

- **Standalone components com `imports` explícito** — cada componente declara exatamente do que depende, sem módulo compartilhado escondendo a dependência real.
- **Um componente, uma pasta, com seu próprio `.ts`/`.html`/`.css`/`.spec.ts`** — fácil de localizar e isolar.
- **Interface TypeScript para o modelo de dados** (`Registro.ts`) em vez de usar objetos soltos (`any`) — o editor avisa em tempo de escrita se um campo estiver errado.
- **Proxy de desenvolvimento** em vez de hardcodar a URL completa da API no componente — facilita trocar de ambiente (dev/produção) sem mudar código.
- **Comentário explicando decisões não óbvias** (ex: por que a data é montada manualmente em vez de `toISOString()`, evitando o problema de fuso horário/UTC na validação do back).

## Pendências conhecidas

Ver o documento de acompanhamento publicado durante o desenvolvimento, ou a conversa com o time, para a lista priorizada — resumo rápido:

- `LoginComponent` existe mas está vazio — nenhuma tela de login funcional ainda
- `app.routes.ts` está vazio — a aplicação ainda não tem navegação entre páginas (tudo roda direto em `/`)
- Nenhuma integração com os endpoints de usuário (`/usuarios/registrar`, `/usuarios/login`) do back-end
- Sem armazenamento do token JWT (`localStorage`/interceptor HTTP) — pré-requisito para que as chamadas autenticadas funcionem
- `usuarioId: 1` fixo ao criar registro no front, espelhando a mesma simplificação temporária do back-end
