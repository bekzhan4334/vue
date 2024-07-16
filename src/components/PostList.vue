<template>
    <h3>Список постов</h3>
    <div>
        <post-item
            v-for="post in posts"
            :post="post"
            @remove="$emit('remove', post)"
    />
    </div>
    
</template>

<script>
export default{
    name: "post-list",
    props: {
        posts:{
            type: Array,
            required: true
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
