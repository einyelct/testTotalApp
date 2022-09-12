<template>
  <div class="main">
    <div class="new-todo">
      <input
        class="edit"
        name="title"
        autofocus
        autocomplete="off"
        placeholder="¿Alguna tarea nueva?"
        v-model.trim="textInput"
        @keyup.enter="insertNewTask"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "todo-input",
  data() {
    return {
      textInput: "",
    };
  },
  methods: {
    insertNewTask() {
      if (this.textInput != "") {
        let id = Math.max(...this.$store.getters.getLastId) + 1;
        let task = {
          id: id,
          label: this.textInput,
          state: 1,
        };
        axios({
          method: "post",
          url: "http://localhost:3000/todos",
          data: task,
        })
          .then(() => {
            this.$store.dispatch("getAllItems");
            this.textInput = "";
          })
          .catch(() => {
            console.log("No creado");
          });
      }
    },
  },
};
</script>
