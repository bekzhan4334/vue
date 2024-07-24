<template>
    <div>
        <h3> {{ book.title }}</h3>
        <p> {{ book.author }}</p>
    </div>
</template>

<script>
export default{
   name: 'BookItem',
   props: ['book']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
