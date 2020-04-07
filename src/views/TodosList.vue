<template>
  <div class="todos mt-5">
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"></TodoItem>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
import TodoItem from "./TodoItem";

export default {
  components: {
    TodoItem
  },

  computed: {
    ...mapGetters({
      todos: "todo/todos"
    })
  }
};
</script>

<style lang="scss" scoped>
.todos {
  box-shadow: 5px 3px 10px #999;
}
</style>
