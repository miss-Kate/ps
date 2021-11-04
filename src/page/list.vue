<template>
  <div class="container_list">
    <sidebar></sidebar>
    <div class="main_list">
      <div class="title_main">
        <h3>
          Список задач
        </h3>
      </div>
      <div class="list_page">
        <div class="task">
          <div>Задача</div>
          <div>Статус</div>
        </div>
        <hr>
        <div v-for="item in listTasks" :key="item.id" class="text_task">
          <input class="text_input" type="text"  :value="item.title">
          <div class="done">
            <input class="done_checkbox" type="checkbox" id="done_checkbox" value="Выполнено">
            <label for="done_checkbox">Выполнено</label>
            
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "../components/sidebar";
import axios from "axios"
export default {
  name: "list",
  components: {
    sidebar,
  },
  data(){
    return{
      listTasks:[]
    }
  },
  created(){
    axios.get('https://my-json-server.typicode.com/typicode/demo/posts').then((responce)=>{this.listTasks=responce.data}) 
  }
}

</script>

<style scoped>

</style>