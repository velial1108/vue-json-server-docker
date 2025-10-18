#!/bin/sh
# Скрипт для замены переменных окружения в собранных файлах

echo "Applying environment variables for Vue App..."

# Создаем конфиг для runtime переменных
cat > /usr/share/nginx/html/env-config.js << EOF
window.env = {
  VITE_API_BASE_URL: "${VITE_API_BASE_URL:-/api}",
  VITE_APP_TITLE: "${VITE_APP_TITLE:-Vue App}"
};
EOF

# Заменяем плейсхолдеры в HTML файле
if [ -n "$VITE_API_BASE_URL" ]; then
    find /usr/share/nginx/html -type f -name "*.js" -exec sed -i "s|VITE_API_BASE_URL_PLACEHOLDER|${VITE_API_BASE_URL}|g" {} \;
    find /usr/share/nginx/html -type f -name "*.css" -exec sed -i "s|VITE_API_BASE_URL_PLACEHOLDER|${VITE_API_BASE_URL}|g" {} \;
    find /usr/share/nginx/html -type f -name "*.html" -exec sed -i "s|VITE_API_BASE_URL_PLACEHOLDER|${VITE_API_BASE_URL}|g" {} \;
fi

echo "Environment variables applied:"
echo "VITE_API_BASE_URL = ${VITE_API_BASE_URL:-/api}"
echo "VITE_APP_TITLE = ${VITE_APP_TITLE:-Vue App}"

# Запускаем основной процесс
exec "$@"
