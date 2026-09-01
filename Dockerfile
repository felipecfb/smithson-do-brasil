FROM node:20-alpine AS builder

WORKDIR /app

# Instalar pnpm
RUN npm install -g pnpm

# Copiar dependências
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Instalar dependências
RUN pnpm install --frozen-lockfile

# Copiar código
COPY . .

# Build
RUN pnpm build

# Stage de produção
FROM node:20-alpine

WORKDIR /app

# Instalar servidor estático simples
RUN npm install -g serve

# Copiar build do stage anterior
COPY --from=builder /app/dist ./dist

# Expor porta
EXPOSE 8080

# Servir a aplicação
CMD ["serve", "-s", "dist", "-l", "8080"]

