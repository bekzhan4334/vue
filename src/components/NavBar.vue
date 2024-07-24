<template>
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/add">Add Book</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default{
   name: 'NavBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
    background-color: #333;
    color: white;
    padding: 10px;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline;
    margin-right: 10px;
}
a {
    color: white;
    text-decoration: none;
}
</style>
