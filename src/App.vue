<template>
  <!-- 主容器 -->
  <main>
    <div class="container">
      <img src="./assets/logo.png" alt="logo" class="logo" />
      <h1>Welcome to this app</h1>
      <TodoAdd :tid="todos.length" @add-todo="addTodo" />
      <TodoFilter :select="filter" @change-filter="filter = $event" />
      <TodoList :todos="filteredTodos" />
    </div>
  </main>
</template>

<script>
import TodoAdd from "./components/TodoAdd";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

import useTodos from "./composables/useTodos";
import useFilterTodos from "./composables/useFilterTodos";

export default {
  name: "App",
  components: {
    TodoAdd,
    TodoFilter,
    TodoList,
  },
  setup() {
    const { todos, addTodo } = useTodos();
    const { filter, filteredTodos } = useFilterTodos(todos);

    return {
      todos,
      addTodo,
      filter,
      filteredTodos,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 主容器 */
main {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(203, 210, 240);
}

/* 包裹容器 */
.container {
  width: 60%;
  max-width: 400px;
  padding: 28px 28px;
  border-radius: 24px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  background-color: rgb(245, 246, 252);
  text-align: center;
}

.logo {
  width: 50px;
  height: 50px;
}

/* 标题 */
h1 {
  margin: 14px 0 24px;
  font-size: 28px;
  color: #414873;
  text-align: center;
}
</style>
