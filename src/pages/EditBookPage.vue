<template>
    <div>
      <h1>Edit Book</h1>
      <book-form
        :book="book" @submit="updateBook"
      />
    </div>
</template>
  
<script>
import BookForm from '../components/BookForm.vue'
import { mapState} from 'vuex'
export default{
  components: {
        BookForm
    },
  computed:{
    ...mapState(['books']),
    book(){
      return this.books.find(book => book.id === parseInt(this.$route.params.id))
    }
  },
  methods:{
    updateBook(updatedBook){
      this.$store.commit('updateBook', {...this.book, ...updatedBook})
    }
  }
}
</script>
  
<style>

</style>
  