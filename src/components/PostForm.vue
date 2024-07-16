<template>
    <div>
        <h3>Добавить пост</h3>
        <form @submit.prevent>
            <input v-focus type="text" v-model="post.title" placeholder="Введите заголовок">
            <br>
            <input type="text" v-model="post.body" placeholder="Введите пост">
            <br>
            <button @click="create">Добавить пост</button>
        </form>
    </div>
</template>

<script>
export default{
    name: "post-form",
    data(){
        return{
            post:{
                title: "",
                body: ""
            }
        }
    },
    methods: { 
        create(){
            this.$emit('create', this.post)
            this.post = {
                title: "",
                body: ""
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
