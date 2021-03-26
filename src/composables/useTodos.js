import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

export default function useTodos() {
  const todos = ref([]);
  const addTodo = (todo) => todos.value.push(todo);

  // 获取远程 todos
  const fetchTodos = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const rawTodos = await response.json();
    todos.value = rawTodos.map((todo) => ({
      id: todo.id,
      content: todo.title,
      completed: todo.completed,
    }));
  };

  // 挂载完成钩子
  onMounted(() => {
    fetchTodos();
  });

  return {
    todos,
    addTodo,
  };
}
