<template>
  <div class="container_list">
    <sidebar></sidebar>
    <div class="main">
      <div class="title_main">
        <h3>
          Мой профиль
        </h3>
      </div>
      <div class="prof_page">
        <div class="inputs">
          <span class="name_inputs">Имя</span>
          <input v-model="name" class="name_inp" type="text" form="">
          <p>Пожалуйста заполните поле</p>
        </div>
        <div class="inputs">
          <span class="name_inputs">Сменить пароль</span>
          <input v-model="password" class="pasword_change" type="pasword" form="">
          <p>Пожалуйста заполните поле</p>
        </div>
        <div class="inputs">
          <span class="name_inputs">Фамилия</span>
          <input v-model="surname" class="surname" type="text" form="">
          <p>Пожалуйста заполните поле</p>
        </div>
        <div class="inputs">
          <span class="name_inputs">Сменить логин </span>
          <input v-model="login" class="login_change" type="text" form="">
          <p>Пожалуйста заполните поле</p>
        </div>
        <div @click="save" class="btn_profile">
          <button  class="save">Сохранить</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "../components/sidebar";

export default {
  name: "profile",
  components: {
    sidebar
  },
  data(){
    return{
       name:'',
      surname:'',
      password: 0,
      login: 0
    }
  },
  mounted(){
       if (localStorage.name){
       this.name = localStorage.name}
       if (localStorage.surname){
      this.surname = localStorage.surname}
       if (localStorage.password) {
      this.password = localStorage.password}
       if (localStorage.login) {
      this.login = localStorage.login}
    },
  methods:{
      save(){
        localStorage.name=this.name;
        localStorage.surname=this.surname;
        localStorage.password=this.password;
        localStorage.login=this.login;
      }
    }


    }


  
  

</script>

<style scoped>

</style>