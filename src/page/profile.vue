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
          <input class="name_inp" type="text" form="">
          <p>Пожалуйста заполните поле</p>
        </div>
        <div class="inputs">
          <span class="name_inputs">Сменить пароль</span>
          <input class="pasword_change" type="pasword" form="">
          <p>Пожалуйста заполните поле</p>
        </div>
        <div class="inputs">
          <span class="name_inputs">Фамилия</span>
          <input class="surname" type="text" form="">
          <p>Пожалуйста заполните поле</p>
        </div>
        <div class="inputs">
          <span class="name_inputs">Сменить логин </span>
          <input class="login_change" type="text" form="">
          <p>Пожалуйста заполните поле</p>
        </div>
        <div class="btn_profile">
          <button class="save">Сохранить</button>
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
  }
}
</script>

<style scoped>

</style>