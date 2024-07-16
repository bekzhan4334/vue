import { createStore } from "vuex"
import axios from "axios"

export default createStore({
    state:{
        posts: [],
        likes: 0
    },
    getters:{
        doubleLikes(state){
            return state.likes * 2
        }
    },
    mutations:{
        incLikes(state){
            state.likes += 1
        },
        decLikes(state){
            state.likes -= 1
        },
        setPosts(state, newPosts){
            state.posts = newPosts
        }
    },
    actions:{
        async fetchPosts({commit}){
            const responce = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
            commit("setPosts", responce.data)
          }
    }
})