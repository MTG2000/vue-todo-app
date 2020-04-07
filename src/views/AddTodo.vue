<template>
  <div>
    <form @submit.prevent="handleSubmit" class="d-flex align-items-center mt-5">
      <input
        type="text"
        name="title"
        v-model="title"
        class="form-control flex-fill"
        placeholder="New Todo...."
      />
      <button type="submit" class="btn btn-primary ml-3">Add Todo</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data: () => ({
    title: ""
  }),
  methods: {
    handleSubmit: function() {
      if (this.title.trim().length > 0) {
        this.addTodo({ title: this.title });
        this.title = "";
      }
    },
    ...mapMutations({
      addTodo: "todo/addTodo"
    })
  }
};
</script>

<style lang='scss' scoped>
form {
  width: 100%;

  button {
    min-width: 150px;
  }
}
</style>

