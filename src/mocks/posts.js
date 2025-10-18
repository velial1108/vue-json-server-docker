// src/mocks/posts.js

// Мок-данные постов
export const mockPosts = [
    {
        id: 1,
        title: "Добро пожаловать в блог!",
        content: "Это пример поста с мок-данными для GitHub Pages",
        author: "Администратор",
        createdAt: "2024-01-15"
    },
    {
        id: 2,
        title: "Второй пост",
        content: "Еще один пример поста для демонстрации",
        author: "Автор",
        createdAt: "2024-01-16"
    },
    {
        id: 3,
        title: "Работа с Vue 3",
        content: "Vue 3 Composition API - это прекрасно!",
        author: "Разработчик",
        createdAt: "2024-01-17"
    }
];

// Имитация API вызовов
export const mockApi = {
    // Получить все посты
    getPosts() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: mockPosts });
            }, 300);
        });
    },

    // Получить один пост
    getPost(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const post = mockPosts.find(p => p.id === parseInt(id));
                if (post) {
                    resolve({ data: post });
                } else {
                    reject(new Error('Пост не найден'));
                }
            }, 200);
        });
    },

    // Создать пост
    createPost(post) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newPost = {
                    ...post,
                    id: Math.max(...mockPosts.map(p => p.id)) + 1,
                    createdAt: new Date().toISOString().split('T')[0]
                };
                mockPosts.push(newPost);
                resolve({ data: newPost });
            }, 400);
        });
    },

    // Обновить пост
    updatePost(id, updates) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = mockPosts.findIndex(p => p.id === parseInt(id));
                if (index !== -1) {
                    mockPosts[index] = { ...mockPosts[index], ...updates };
                    resolve({ data: mockPosts[index] });
                } else {
                    reject(new Error('Пост не найден'));
                }
            }, 400);
        });
    },

    // Удалить пост
    deletePost(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = mockPosts.findIndex(p => p.id === parseInt(id));
                if (index !== -1) {
                    mockPosts.splice(index, 1);
                    resolve({ data: { message: 'Пост удален' } });
                } else {
                    reject(new Error('Пост не найден'));
                }
            }, 300);
        });
    }
};
