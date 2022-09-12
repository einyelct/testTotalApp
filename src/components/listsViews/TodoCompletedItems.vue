<template>
  <ul class="todo-list">

    <li class="completed" v-for="(item, index) in getAllCompleted" :key="index">
      <label>{{ item.label }}</label>
    </li>
  </ul>
</template>

<script>
export default {
  name: "todo-all-items",
  data() {
    return {};
  },
  components: {},
  computed: {
    getAllCompleted() {
      return this.$store.getters.getAllTaskCompleted;
    },
  },
  methods: {},
};
</script>
