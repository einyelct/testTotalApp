<template>
  <div id="app" class="todoapp">
    <todo-list-home />
  </div>
</template>

<script>
import TodoListHome from "./components/TodoListHome.vue";

export default {
  name: "App",
  components: {
    TodoListHome,
  },
};
</script>

<style src="./assets/styles/app.css"></style>
