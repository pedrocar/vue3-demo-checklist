<script lang="ts" setup>
// emits
const emit = defineEmits(['new-task'])

// add task logic
const newTaskTitle = ref<string>('')

function addTask() {
  emit('new-task', newTaskTitle.value)
  newTaskTitle.value = '' // Reset the input field
}
</script>

<template>
  <div class="task-form">
    <input
      v-model="newTaskTitle"
      placeholder="Enter task title"
      @keyup.enter="addTask"
    >
    <button
      @click="addTask"
    >
      Add Task
    </button>
  </div>
</template>

<style scoped>
  .task-form {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 20px;
    margin-bottom: 30px;
  }

  input {
    flex-grow: 1;
    padding: 10px 15px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    box-sizing: border-box;
  }

  button {
    padding: 10px 20px;
    background-color: #333333;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #505050;
  }
</style>
