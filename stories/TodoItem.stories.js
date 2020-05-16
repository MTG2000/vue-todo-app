import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import TodoItem from "../src/views/TodoItem";

export default {
  title: "Todo Item",
  component: TodoItem
};

export const Default = () => ({
  components: { TodoItem },
  template: '<todo-item :todo="todo"></todo-item>',
  props: {
    todo: {
      default: () => ({
        id: 2,
        title: "Research Vue.Js"
      })
    }
  }
});

// export const Jsx = () => ({
//   components: { MyButton },
//   render(h) {
//     return <my-button onClick={this.action}>With JSX</my-button>;
//   },
//   methods: { action: linkTo("clicked") }
// });

// export const Emoji = () => ({
//   components: { MyButton },
//   template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
//   methods: { action: action("clicked") }
// });
