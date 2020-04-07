<template>
  <div class="home container">
    <div class="todos-container mx-auto">
      <AddTodo />
      <TodosList />
      <TodoHelpers />
    </div>
  </div>
</template>

<script>
import TodosList from "./TodosList";
import AddTodo from "./AddTodo";
import TodoHelpers from "./TodoHelpers";

export default {
  components: {
    TodosList,
    AddTodo,
    TodoHelpers
  }
};
</script>

<style lang="scss" scoped>
.todos-container {
  max-width: 500px;
}
</style>
