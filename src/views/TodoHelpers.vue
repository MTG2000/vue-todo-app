<template>
  <div>
    <div class="px-4 py-3 row align-items-center">
      <div>
        <button
          class="btn btn-muted mx-1"
          :class="{'btn-info':filter==='all'}"
          @click="filterTodos({filter:'all'})"
        >All</button>
        <button
          class="btn btn-muted mx-1"
          :class="{'btn-info':filter==='active'}"
          @click="filterTodos({filter:'active'})"
        >Active</button>
        <button
          class="btn btn-muted mx-1"
          :class="{'btn-info':filter==='completed'}"
          @click="filterTodos({filter:'completed'})"
        >Completed</button>
      </div>
      <span class="ml-auto d-inline-block">Remaining: {{remaining}}</span>
    </div>
    <div class="row justify-content-center py-5">
      <button class="btn btn-success" @click="fetchTodos">Fetch Some Todos</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  computed: {
    remaining() {
      return this.$store.getters["todo/remaining"];
    },
    filter() {
      return this.$store.state.todo.filter;
    }
  },
  methods: {
    ...mapMutations({
      filterTodos: "todo/filter"
    }),
    ...mapActions({
      fetchTodos: "todo/fetchTodos"
    })
  }
};
</script>