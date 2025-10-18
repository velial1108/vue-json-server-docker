import { defineStore } from "pinia";
import { mockApi } from '@/mocks/posts';

// Функция для определения среды выполнения
const isGitHubPages = () => {
    return window.location.hostname.includes('github.io');
};

export const usePostsStore = defineStore('posts', {
    state: () => ({
        posts: [],
        post: {},
        loading: false,
        error: null
    }),

    getters: {
        postTitle: (state) => state.post.title
    },

    actions: {
        // получение постов
        async getPosts() {
            this.loading = true;
            this.error = null;
            try {
                if (isGitHubPages()) {
                    // Используем мок-данные на GitHub Pages
                    const response = await mockApi.getPosts();
                    this.posts = response.data;
                } else {
                    // Используем реальный JSON-server в разработке
                    const response = await fetch('/api/posts');
                    this.posts = await response.json();
                }
            } catch (error) {
                this.error = error.message;
                console.error('Error fetching posts:', error);
            } finally {
                this.loading = false;
            }
        },

        // получение одного поста
        async getPost(id) {
            this.loading = true;
            this.error = null;
            try {
                if (isGitHubPages()) {
                    const response = await mockApi.getPost(id);
                    this.post = response.data;
                } else {
                    const response = await fetch(`/api/posts/${id}`);
                    this.post = await response.json();
                }
            } catch (error) {
                this.error = error.message;
                console.error('Error fetching post:', error);
            } finally {
                this.loading = false;
            }
        },

        // создание поста
        async StorePost(post) {
            this.loading = true;
            this.error = null;
            try {
                if (isGitHubPages()) {
                    const response = await mockApi.createPost(post);
                    // Добавляем новый пост в список
                    this.posts.push(response.data);
                    return response.data;
                } else {
                    const response = await fetch('/api/posts', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(post),
                    });
                    const newPost = await response.json();
                    this.posts.push(newPost);
                    return newPost;
                }
            } catch (error) {
                this.error = error.message;
                console.error('Error creating post:', error);
                throw error;
            } finally {
                this.loading = false;
            }
        },

        // обновление поста
        async updatePost() {
            this.loading = true;
            this.error = null;
            try {
                if (isGitHubPages()) {
                    const response = await mockApi.updatePost(this.post.id, this.post);
                    // Обновляем пост в списке
                    const index = this.posts.findIndex(p => p.id === this.post.id);
                    if (index !== -1) {
                        this.posts[index] = response.data;
                    }
                    return response.data;
                } else {
                    const response = await fetch(`/api/posts/${this.post.id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(this.post),
                    });
                    const updatedPost = await response.json();

                    // Обновляем в списке
                    const index = this.posts.findIndex(p => p.id === updatedPost.id);
                    if (index !== -1) {
                        this.posts[index] = updatedPost;
                    }
                    return updatedPost;
                }
            } catch (error) {
                this.error = error.message;
                console.error('Error updating post:', error);
                throw error;
            } finally {
                this.loading = false;
            }
        },

        // удаление поста
        async deletePost(post) {
            this.loading = true;
            this.error = null;
            try {
                if (isGitHubPages()) {
                    await mockApi.deletePost(post.id);
                    this.posts = this.posts.filter(postItem => postItem.id !== post.id);
                } else {
                    await fetch(`/api/posts/${post.id}`, {
                        method: 'DELETE',
                    });
                    this.posts = this.posts.filter(postItem => postItem.id !== post.id);
                }
            } catch (error) {
                this.error = error.message;
                console.error('Error deleting post:', error);
                throw error;
            } finally {
                this.loading = false;
            }
        },
    },
});
