<template>
    <div>
        <button @click="$router.push('/')">Главная страница</button>
        <button @click="$router.push('/posts')">Посты</button>
        <button @click="$router.push('/postsStore')">Посты со стором</button>
    </div>
</template>

<script>
export default{
    name: "navbar"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
