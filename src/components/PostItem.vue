<template>
    <div>
        <div>
            <strong>Заголовок: </strong> {{ post.title }}
        </div>
        <div>
            <strong>Описание: </strong> {{ post.body }}
        </div>
        <button @click="$emit('remove', post)">Удалить</button>
        <button @click="editPost">Изменить</button>
        <button @click="$router.push(`/posts/${post.id}`)">Открыть</button>
    </div>  
</template>

<script>
export default{
    name: "post-item",
    props:{
        post:{
            type: Object,
            required: true
        }
    },
    methods:{
        editPost(){
            const newTitle = prompt('Введите новый заголовок:', this.post.title);
            const newBody = prompt('Введите новое описание:', this.post.body);
            if(newTitle !== null && newBody !== null){
                this.post.title = newTitle;
                this.post.body = newBody;
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
