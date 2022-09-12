import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    getAllTaskNotCompleted(state) {
      return state.todos.filter((element) => element.state == 1);
    },
    getAllTaskCompleted(state) {
      return state.todos.filter((element) => element.state == 2);
    },
    allItems(state) {
      return state.todos;
    },
    getLastId(state) {
      let ids = state.todos.map((item) => item.id).filter((element) => element);
      return ids;
    },
  },
  mutations: {
    getAllitems(state) {
      axios.get("http://localhost:3000/todos").then((value) => {
        state.todos = value.data.map((item) => {
          return {
            id: item.id,
            label: item.label,
            state: item.state,
            isFocus: false,
          };
        });
      });
    },
    deleteTask(state, id) {
      state.todos = state.todos.filter((element) => element.id !== id);
    },
  },
  actions: {
    deleteTask({ commit }, idValue) {
      commit("deleteTask", idValue);
    },
    getAllItems(context) {
      context.commit("getAllitems");
    },
  },
  modules: {},
});
