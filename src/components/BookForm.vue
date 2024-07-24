<template>
    <form @submit.prevent="handleSubmit">
        <div>
            <label for="title">Title</label>
            <input type="text" v-model="title" id="title">
        </div>
        <div>
            <label for="author">Author</label>
            <input type="text" v-model="author" id="author">
        </div>
        <button type="submit">Submit</button>
    </form> 
</template>

<script>
export default{
    name: "BookForm",
    data(){
        return {
            title: '',
            author: ''
        }
    },
    methods: {
        handleSubmit(){
            this.$emit('submit', {
                title: this.title,
                author: this.author
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
