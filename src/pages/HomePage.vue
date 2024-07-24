<template>
    <div>
        <h1>Home Page</h1>
        <book-list></book-list>
    </div>
</template>

<script>
   import BookList from '../components/BookList.vue';

   export default {
    components: {
    BookList
 }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
