<template>
  <!-- 代办列表 -->
  <div class="todo-list">
    <TodoListItem
      v-for="todo in todos"
      :key="todo.id"
      :todo-item="todo"
      @change-state="todo.completed = $event.target.checked"
    />
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem";

export default {
  name: "TodoList",
  props: ["todos"],
  components: {
    TodoListItem,
  },
};
</script>

<style scoped>
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>
