<template>
  <div class="todo-item px-5 py-4">
    <input type="checkbox" :checked="todo.completed" @change="toggleTodo({id:todo.id})" />
    <span class="mx-2">{{todo.title}}</span>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapMutations } from "vuex";
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations({
      toggleTodo: "todo/toggleTodo"
    })
  }
};
</script>

<style lang="scss" scoped>
.todo-item {
  color: #666;
  background: rgb(245, 245, 245);
  border-bottom: 1px solid rgb(119, 119, 119);
}
</style>