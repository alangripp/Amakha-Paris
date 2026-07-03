# 🎀 AMAKHA OS - Sistema de Gestão de Vendas com IA

**Sistema SaaS completo para transformar o estoque de 7.000 perfumes em vendas organizadas**

## 📊 Visão Geral

AMAKHA OS é um sistema completo desenvolvido para a Amakha Paris Brasil - distribuidora de perfumes de luxo. O objetivo principal é transformar um estoque de aproximadamente 7.000 perfumes em vendas organizadas utilizando Inteligência Artificial.

## 🎯 Funcionalidades Principais

### 1. 📊 Dashboard
- Meta diária
- Faturamento em tempo real
- Pedidos em andamento
- Status de expedição
- Novos clientes
- Produtos mais vendidos
- Gráficos de vendas
- Alertas inteligentes

### 2. 👥 CRM
- Cadastro completo de clientes
- Tipos: Consumidor, Revendedor, Empresa
- Histórico de compras
- Observações
- Pontuação de cliente
- Probabilidade de recompra (IA)

### 3. 🧴 Produtos
- Catálogo de 7.000+ perfumes
- Imagens
- Preços dinâmicos
- Controle de estoque
- Semelhantes importados
- Notas olfativas
- Fixação
- Argumentos de venda

### 4. 📦 Estoque
- Entrada de produtos
- Saída de produtos
- Inventário completo
- Alertas de estoque baixo

### 5. 🛒 Pedidos
- Criar pedidos
- Atualizar estoque automaticamente
- Status: Recebido, Separação, Conferência, Embalagem, Etiqueta, Despachado, Entregue

### 6. 💰 Financeiro
- Receitas
- Despesas
- Lucro
- Fluxo de caixa
- Comissões

### 7. 📢 Marketing
- Campanhas por WhatsApp
- Campanhas por Instagram
- Campanhas por Facebook
- Campanhas por Email
- Geração de mensagens automáticas

### 8. 🤖 IA (Alan IA)
Comandos:
- "Venda 100 perfumes"
- "Crie uma campanha"
- "Monte uma promoção"
- "Clientes inativos"
- "Produtos parados"
- "Resumo da empresa"

### 9. 📈 Relatórios
- Produtos mais vendidos
- Clientes principais
- Vendas por cidades
- Análise de revendedores
- Margem de lucro
- Faturamento total

### 10. ⚙️ Configurações
- Gerenciamento de usuários
- Permissões
- Transportadoras
- Formas de pagamento
- Configurações gerais

## 🛠️ Tecnologias

### Frontend
- **React 18** + Next.js 14
- **TypeScript**
- **Tailwind CSS**
- **Supabase Auth**
- **Axios**

### Backend
- **Node.js**
- **NestJS**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**

### Banco de Dados
- **PostgreSQL** (Supabase)
- **Supabase Auth**

### Arquitetura
- **DDD** (Domain-Driven Design)
- **Clean Architecture**
- **SOLID Principles**
- **REST API**

## 📁 Estrutura do Projeto

```
Amakha-Paris/
├── apps/
│   ├── frontend/                 # Next.js + React + Tailwind
│   │   ├── src/
│   │   │   ├── pages/
│   │   │   ├── components/
│   │   │   ├── lib/
│   │   │   ├── styles/
│   │   │   └── types/
│   │   └── package.json
│   │
│   └── backend/                  # NestJS
│       ├── src/
│       │   ├── common/
│       │   ├── modules/
│       │   │   ├── auth/
│       │   │   ├── users/
│       │   │   ├── products/
│       │   │   ├── customers/
│       │   │   ├── orders/
│       │   │   ├── stock/
│       │   │   ├── financial/
│       │   │   ├── dashboard/
│       │   │   ├── marketing/
│       │   │   ├── reports/
│       │   │   ├── settings/
│       │   │   └── ai/
│       │   └── main.ts
│       ├── prisma/
│       │   └── schema.prisma
│       └── package.json
│
└── docs/                         # Documentação
    ├── DATABASE.md
    ├── ARCHITECTURE.md
    └── DEVELOPMENT.md
```

## 🚀 Como Começar

### Pré-requisitos
- Node.js 18+
- PostgreSQL 14+
- npm ou yarn
- Conta Supabase

### Instalação

1. **Clonar repositório**
```bash
git clone https://github.com/alangripp/Amakha-Paris.git
cd Amakha-Paris
```

2. **Instalar dependências**
```bash
npm install
```

3. **Configurar variáveis de ambiente**
```bash
cp .env.example .env.local
# Edite .env.local com suas credenciais
```

4. **Iniciar Backend**
```bash
cd apps/backend
npm install
npm run start:dev
# Rodando em http://localhost:3001
```

5. **Iniciar Frontend**
```bash
cd apps/frontend
npm install
npm run dev
# Rodando em http://localhost:3000
```

## 🎨 Primeiros Produtos a Cadastrar

1. D
2. GD
3. 521 VIP Rosé
4. Athena
5. Chic
6. Elegance
7. Fakar Rosé
8. Zaya
9. Angelina
10. Clô
11. Fortune
12. Imortal
13. Apolo
14. 521 Sexy Men
15. Assaddy
16. Provoque
17. Famous
18. Animals
19. AMK For Men
20. Malik Nuit

## 👨‍💼 Arquiteto

**Alan Gripp**  
Senior Software Architect  
Especialista em: SaaS, AI, CRM, ERP, E-commerce, Node.js, React, PostgreSQL, Supabase

## 📄 Licença

Proprietary - Amakha Paris Brasil

---

**Desenvolvido com ❤️ para Amakha Paris**
