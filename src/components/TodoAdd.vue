<template>
  <!-- 输入框 -->
  <div class="input-add">
    <!-- 包括：与变量双向绑定、回车触发事件 -->
    <input
      type="text"
      name="todo"
      v-model="todoContent"
      @keyup.enter="emitAddTodo"
    />
    <!-- 点击事件 -->
    <button @click="emitAddTodo">
      <i class="plus"></i>
    </button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "TodoAdd",

  /**
   * props: 父组件传的参数
   * context: 上下文，提供 emit 与父组件通信
   */
  setup(props, context) {
    return useEmitAddTodo(props.tid, context.emit);
  },
};

function useEmitAddTodo(tid, emit) {
  const todoContent = ref("");

  const emitAddTodo = () => {
    const todo = {
      id: tid,
      content: todoContent.value,
      completed: false,
    };

    // 执行父组件自定义事件，参数为 todo
    emit("add-todo", todo);
    todoContent.value = "";
  };

  return {
    todoContent,
    emitAddTodo,
  };
}
</script>

<style>
.input-add {
  position: relative;
  display: flex;
  align-items: center;
}

.input-add input {
  width: 100%;
  padding: 16px 52px 16px 18px;
  border-radius: 48px;
  border: none;
  outline: none;
  font-size: 16px;
  color: #626262;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
}

.input-add button {
  position: absolute;
  right: 0px;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: none;
  outline: none;
  background: linear-gradient(#c0a5f3, #7f95f7);
  cursor: pointer;
}

.input-add .plus {
  display: block;
  width: 100%;
  height: 100%;

  /* 背景组成加号 */
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
  background-size: 50% 2px, 2px 50%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
