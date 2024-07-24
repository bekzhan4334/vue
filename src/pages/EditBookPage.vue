<template>
    <button @click="fetchPosts">Загрузить посты</button>
    <post-form 
      @create="createPosts"
    />
  
    <post-list 
    :posts="posts"
    @remove="deletePosts"
    @edit="editPost"
    />
</template>
  
<script>
import { mapState, mapGetters, mapMutations, mapActions} from 'vuex'
  export default {
    mounted(){
        this.fetchPosts()
    },
    methods:{
      ...mapActions({
        fetchPosts: 'fetchPosts'
      }),
      ...mapMutations({
        createPost: 'createPost',
        deletePost: 'deletePost'
      }),
      createPosts(post){
        this.createPost(post)
      },
      deletePosts(post){
        this.deletePost(post)
      }

    },
    computed:{
        ...mapState({
            posts: state => state.posts
        })
    },
    handler(){
        this.createPost()
    }
    
  }
  </script>
  
  <style>
    /* Basic button styles */
    button {
        padding: 10px 20px;  /* Padding inside the button */
        margin: 10px;        /* Space between buttons */
        border: none;        /* Remove default border */
        border-radius: 5px;  /* Rounded corners */
        background-color: #4CAF50; /* Button background color */
        color: white;        /* Text color */
        font-size: 16px;     /* Font size */
        cursor: pointer;     /* Cursor changes to pointer on hover */
        transition: background-color 0.3s; /* Smooth transition for background color */
    }

    /* Change background color on hover */
    button:hover {
        background-color: #45a049;
    }

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

  /* Basic input styles */
input {
    padding: 10px;           /* Padding inside the input field */
    margin: 10px;            /* Space between input fields */
    border: 1px solid #ccc;  /* Border style */
    border-radius: 5px;      /* Rounded corners */
    font-size: 16px;         /* Font size */
    width: calc(100% - 42px); /* Adjust width considering padding and border */
    box-sizing: border-box;  /* Ensure padding and border are included in the width */
}

/* Change border color on focus */
input:focus {
    border-color: #4CAF50;
    outline: none; /* Remove default outline */
}

  </style>
  