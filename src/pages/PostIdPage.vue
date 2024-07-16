<template>
    <div>
        <h1>Это страница поста с ID: {{ $route.param.id }}</h1>
        <post-item
            :post="$store.state.posts[$route.param.id]"
        />
    </div>
</template>

<script>
export default{

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
