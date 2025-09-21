
# CRM para Igreja - Backend e Frontend

## Como Rodar o Projeto

### Pré-requisitos
- Docker
- Node.js (para desenvolvimento)

### Rodando em Desenvolvimento
1. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/igreja-crm.git
   cd igreja-crm
   ```

2. Suba o ambiente Docker:
   ```bash
   docker-compose up --build
   ```

3. Backend rodará na porta 3000, Frontend na porta 3001.

### Variáveis de Ambiente
- `JWT_SECRET`: Segredo para gerar tokens JWT.
- `DATABASE_URL`: URL de conexão com o banco de dados PostgreSQL.

### Como Rodar Migrações e Seeds
1. Execute a migração:
   ```bash
   docker-compose exec backend npx prisma migrate dev
   ```

2. Execute o script de seed:
   ```bash
   docker-compose exec backend npx prisma db seed
   ```

### Testes
1. Execute os testes backend:
   ```bash
   docker-compose exec backend npm run test
   ```

2. Execute os testes frontend:
   ```bash
   docker-compose exec frontend npm run test
   ```

### Criando o Build de Produção
1. Backend:
   ```bash
   docker-compose exec backend npm run build
   ```

2. Frontend:
   ```bash
   docker-compose exec frontend npm run build
   ```
                