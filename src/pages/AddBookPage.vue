<template>
    <button @click="fetchPosts">Загрузить посты</button>
    <post-form 
      @create="createPost"
    />
  
    <post-list 
    :posts="posts"
    @remove="deletePost"
    @edit="editPost"
    />
  </template>
  
  <script>
  import axios from "axios"
  export default {
    data(){
      return{
        posts:[],
        id: 0
      }
    },
    mounted(){
        this.fetchPosts()
    },
    methods:{
      async fetchPosts(){
        const responce = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
        this.posts = responce.data
        this.id = this.posts.length
      },
      deletePost(post){
        this.posts = this.posts.filter(function(p){
          return p.id !== post.id
        })
      },
      createPost(post){
        this.id++
        post.id = this.id
        this.posts.push(post)
      },
      editPost(post){
        
      }
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
  }
  
  nav {
    padding: 30px;
  }
  
  nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  
  nav a.router-link-exact-active {
    color: #42b983;
  }
  </style>
  