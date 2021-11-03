<template>
  <div class="container-list">
    <header class="header">
        <img class="logo" src="/img/main/2 1.png" alt="#"> 
        </header>
        <input class="log" type="text" placeholder="логин">
        <input class="password" type="password" placeholder="пароль">
        <router-link tag="input"  class="btn" type="button" value="Войти" :to="{name:'acsess'}"
        ></router-link>
  </div>
</template>

<script>
export default {
  name: "index",
}
</script>

<style scoped>

</style>