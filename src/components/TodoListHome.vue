<template>
  <div>
    <div>
      <h1>Todo</h1>
      <todo-input />
    </div>
    <div v-if="lookBodyFooter" class="main">
      <router-view></router-view>
    </div>
    <todo-footer v-if="lookBodyFooter" class="footer" />
  </div>
</template>

<script>
import TodoInput from "./TodoInput.vue";
import TodoFooter from './footer.vue'

export default {
  name: "todo-list-home",
  components: {
    TodoInput,
    TodoFooter,
  },
  created() {
    this.$store.dispatch("getAllItems");
  },
  computed:{
    lookBodyFooter(){
      if(this.$store.getters.getLastId.length>0){
        return true;
      }else{
        return false;
      }
    },
  }
};
</script>
