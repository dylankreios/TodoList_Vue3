import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

export default function useFilterTodos(todos) {
  const filter = ref("all");

  // 利用计算属性，根据状态计算过滤后的 todo
  const filteredTodos = computed(() => {
    switch (filter.value) {
      case "done":
        return todos.value.filter((todo) => todo.completed);
      case "todo":
        return todos.value.filter((todo) => !todo.completed);
      default:
        return todos.value;
    }
  });

  return {
    filter,
    filteredTodos,
  };
}
