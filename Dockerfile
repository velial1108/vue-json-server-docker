FROM node:22-alpine AS builder

WORKDIR /app

# Копируем зависимости
COPY package*.json ./

# Устанавливаем ВСЕ зависимости (включая dev) — нужно для сборки!
RUN npm ci

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

# Stage 2: Serve the app with nginx
FROM nginx:alpine

# Копируем конфиг nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем собранный проект
COPY --from=builder /app/dist /usr/share/nginx/html

# Открываем порт
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]



