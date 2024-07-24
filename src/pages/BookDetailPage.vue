<template>
    <div>
        <h1> {{ book.title }}</h1>
        <h1> {{ book.author }}</h1>
        <button @click="deleteBook">Delete</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState(['books']),
        book(){
            return this.books.find(book => book.id === parseInt(this.$route.params.id))
        }
    },
    methods:{
        deleteBook(){
            this.$store.commit('deleteBook', this.book.id)
            this.$router.push('/')
        }
    }
}
</script>