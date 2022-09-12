<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{ countTask }}</strong> {{ getText }}
    </span>
    <ul class="filters">
      <li>
        <a @click="$router.push('/')" :class="{ selected: path === '/' }"
          >All</a
        >
      </li>
      <li>
        <a
          @click="$router.push('active')"
          :class="{ selected: path === '/active' }"
          >Active</a
        >
      </li>
      <li>
        <a
          @click="$router.push('complete')"
          :class="{ selected: path === '/complete' }"
          >completed</a
        >
      </li>
      <li>
        <button
          v-if="taskCompletedCount"
          @click="clearCompleted()"
          class="clear-completed"
        >
          clean completed
        </button>
      </li>
    </ul>
  </footer>
</template>

<script>
import axios from "axios";

export default {
  name: "TodoFooter",

  data() {
    return {};
  },
  computed: {
    getText() {
      if (this.countTask != 1) {
        return "items";
      } else {
        return "item";
      }
    },
    path() {
      return this.$route.path;
    },
    countTask() {
      return this.$store.getters.getAllTaskNotCompleted.length;
    },
    taskCompleted() {
      return this.$store.getters.getAllTaskCompleted;
    },
    taskCompletedCount() {
      if (this.$store.getters.getAllTaskCompleted.length > 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    clearCompleted() {
      let listUrl = [];
      this.taskCompleted.forEach((element) => {
        listUrl.push(axios.delete(`http://localhost:3000/todos/${element.id}`));
      });
      axios.all(listUrl).then(() => this.$store.dispatch("getAllItems")).catch(()=>{
        console.log('ERROR de servicio');
      });
    },
  },
};
</script>
