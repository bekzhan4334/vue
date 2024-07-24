<template>
   <div>
    <h1>Add Book Page</h1>
    <book-form @submit="addBook"
    />
   </div>
</template>

<script>
import BookForm from '../components/BookForm.vue'
export default{
  components: {
        BookForm
    },
  methods:{
    addBook(book){
      book.id = Date.now()
      this.$store.commit('addBook', book)
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>