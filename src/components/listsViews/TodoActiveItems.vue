<template>
  <ul class="todo-list">
    <input
      v-if="getAllNotCompleted"
      type="checkbox"
      class="toggle-all"
      :checked="getAllNotCompleted"
    />
    <label @click="checkAll"></label>
    <li
      :class="{
        editing: item.isFocus,
      }"
      v-for="(item, index) in task"
      :key="index"
    >
      <input
        type="checkbox"
        class="toggle"
        :checked="false"
        :key="item.id"
        @input="checketState(item)"
      />
      <label :class="{ view: item.isFocus }" @dblclick="editTask(item)">{{
        item.label
      }}</label>
      <input
        @keyup.enter="changeLabel(item)"
        @keyup.esc="exitInput(item)"
        class="edit"
        v-model.trim="item.label"
      />
      <button
        @click="deleteTask(item.id)"
        :class="{ destroy: !item.isFocus }"
      ></button>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  name: "todo-all-items",
  data() {
    return {
      lastLabel: undefined,
    };
  },
  components: {},
  computed: {
    task() {
      return this.$store.getters.getAllTaskNotCompleted;
    },
    getAllNotCompleted() {
      let completed = this.task
        .map((item) => {
          if (item.state === 1) return item.id;
        })
        .filter((element) => element);

      if (completed.length > 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    exitInput(item) {
      item.label = this.lastLabel;
      item.isFocus = false;
    },
    // cabia el focus del item
    editTask(item) {
      this.lastLabel = item.label;
      if (item.state == 1) {
        this.task.forEach((element) => {
          if (element.id === item.id) {
            element.isFocus = true;
          } else {
            element.isFocus = false;
          }
        });
      }
    },
    //Cambia el nombre de la tarea
    changeLabel(item) {
      if (item.label != "") {
        let updateTask = {
          id: item.id,
          label: item.label,
          state: item.state,
        };
        axios({
          method: "put",
          url: `http://localhost:3000/todos/${item.id}`,
          data: updateTask,
        });
      } else {
        this.deleteTask(item.id);
      }
      item.isFocus = false;
    },
    // modifica el state de task
    newItem(item, state) {
      return {
        id: item.id,
        label: item.label,
        state: state,
      };
    },
    checkAll() {
      let listUrl = [];
      this.task.forEach((element) => {
        element.state = 2;
        listUrl.push(
          axios.put(
            `http://localhost:3000/todos/${element.id}`,
            this.newItem(element, 2)
          )
        );
      });
      axios.all(listUrl);
    },
    // elimina una tarea
    deleteTask(id) {
      this.$store.dispatch("deleteTask", id);
      axios.delete(`http://localhost:3000/todos/${id}`);
    },
    // Cambia el estado completado
    checketState(item) {
      let newItem = this.newItem(item, this.changeState(item.state));
      this.task.forEach((element) => {
        if (element.id === item.id) {
          element.state = this.changeState(element.state);
        }
      });
      axios({
        method: "put",
        url: `http://localhost:3000/todos/${item.id}`,
        data: newItem,
      });
    },
    // metodo cambia valor estado
    changeState(value) {
      if (value === 1) {
        return 2;
      } else {
        return 1;
      }
    },
  },
};
</script>
