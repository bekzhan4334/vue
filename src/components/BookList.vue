<template>
    <div>
        <ul>
            <li v-for="book in books" :key="book.id">
                <router-link :to="'/book/' + book.id">{{ book.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default{
    name: 'BookList',

    computed: {
        ...mapState(['books'])
    },
    created(){
        this.$store.dispatch('fetchBooks')
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
