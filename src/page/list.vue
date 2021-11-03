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
        <div class="text_task">
          <input class="text_input" type="text" placeholder="Текст задачи">
          <div class="done">
            <input class="done_checkbox" type="checkbox" id="done_checkbox" value="Выполнено">
            <label for="done_checkbox">Выполнено</label>
          </div>
        </div>
        <hr>
        <div class="text_task">
          <input  class="text_input" type="text" placeholder="Текст задачи">
          <div class="done">
            <input class="done_checkbox_second" type="checkbox" id="done_checkbox_second" value="Выполнено">
            <label for="done_checkbox_second"> <span>Выполнено</span> </label>
          </div>
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "../components/sidebar";
export default {
  name: "list",
  components: {
    sidebar,
  },  
}

</script>

<style scoped>

</style>