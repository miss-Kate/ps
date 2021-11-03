<template>
  <div>
    <div v-if="open" class="sidebar">
      <div class="title">
        <img class="title_img" src="/img/profile/Frame 2.png" alt="#">
      </div>
      <router-link class="profile" tag="div" :to="{name: 'profile'}">
        <img src="/img/profile/Vector-7.png" alt="#">
        Мой профиль
      </router-link>
      <router-link tag="div" class="list" :to="{name: 'list'}">
        <img src="/img/profile/Vector-6.png" alt="#">
        Список задач
      </router-link>
      <router-link tag="div" class="statistic" :to="{name: 'statistics'}">
        <img src="/img/profile/question 1.png" alt="#">
        Статистика
      </router-link>
      <router-link tag="div" class="out" :to="
      {name:'out'}">
        <img src="/img/profile/Group 12.png" alt="#">
        <p>Выйти</p>
      </router-link>
    </div>
    <div @click="open=!open" v-bind:style="{left:open?'299px':'8px'}" class="close">
      <img src="/img/profile/Ellipse 16.png" alt="#">
      <img class="arrow" src="/img/profile/Group 2.png" alt="#">
    </div>
    
    <div class="off_menu">
      <img class="line_first" src="/img/off_menu/Rectangle 232.png" alt="#">
      <img class="line_second" src="/img/off_menu/Rectangle 232.png" alt="#">
      <img class="logo_menu" src="/img/off_menu/Frame 2.png" alt="#">
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data(){
    return{
      open:true,
    }
    


  }

}

</script>

<style scoped>

</style>