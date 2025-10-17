import {defineStore} from "pinia";
import axios from "axios";
import {useRoute} from "vue-router";
export const usePostsStore = defineStore('posts', {
    state: () => ({
        posts: [],
        post: {},
    }),
    getters: {
        postTitle: (state) => state.post.title
    },
    actions: {
         // получение постов
         getPosts() {
            axios.get('/api/posts')
                .then(res => {
                    this.posts = res.data
                })
        },
         // получение поста одного
         getPost(){
            axios.get(`/api/posts/${useRoute().params.id}`)
                .then(res => {
                    this.post = res.data
                })
        },
        //создание поста
         StorePost(post) {
            axios.post('/api/posts', post)
                .then(res=>{
                    console.log(res)
                })
        },
        //обеовление записи
        updatePost()  {
            axios.patch(`/api/posts/${this.post.id}`, this.post)
                .then(res => {
                })
        },
        // удаление поста
         deletePost(post){
            axios.delete(`/api/posts/${post.id}`)
                .then(() => {
                    this.posts = this.posts.filter(postItem => postItem !== post)
                })
        },

    },
})
