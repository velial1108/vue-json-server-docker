# 📝 Vue 3 Posts Manager

Простое, но полноценное CRUD-приложение для управления постами, построенное на современном стеке Vue 3.  
Идеально подходит как шаблон для быстрого старта или учебного проекта.

- ✅ Создание, чтение, редактирование и удаление постов (CRUD)
- ⚡ Реактивность через **Composition API**
- 🧠 Управление состоянием с **Pinia**
- 🧭 Маршрутизация через **Vue Router**
- 🗄️ Бэкенд на **json-server** (REST API из `db.json`)
- 🐳 Полная изоляция и развёртывание через **Docker Compose**
- 🚀 Готово к интеграции с **CI/CD**

---

## 🛠️ Технологии

- **Frontend**: Vue 3, Composition API, Pinia, Vue Router, Vite
- **Backend**: json-server (мок REST API)
- **Контейнеризация**: Docker, Docker Compose
- **Сборка**: Vite → Nginx (продакшен)

---

## 🚀 Быстрый старт

Убедитесь, что у вас установлены:
- [Docker](https://www.docker.com/) и [Docker Compose](https://docs.docker.com/compose/)

### 1. Клонируйте репозиторий

bash
git clone https://github.com/velial1108/vue-posts-manager.git
cd vue-posts-manager

### 2. Запустите приложение
bash
docker-compose up --build

### 3. Откройте в браузере
👉 http://localhost:8080
