<script lang="ts" setup>
// types
import type { Task } from '@/types/task'

// props
const props = defineProps({
  task: {
    type: Object as PropType<Task>,
    required: true,
  },
})

// emits
const emit = defineEmits(['change-checked'])

// task
function checkTask(event: Event) {
  const target = event.target as HTMLInputElement
  const isChecked = target.checked
  emit(
    'change-checked',
    { id: props.task.id, isChecked },
  )
}
</script>

<template>
  <div class="task">
    <input
      :value="task.isChecked"
      :checked="task.isChecked"
      class="checkbox"
      type="checkbox"
      @change="checkTask"
    >
    <label
      :class="{
        strikethrough: task.isChecked,
      }"
      for="check"
    >
      {{ task.title }}
    </label>
  </div>
</template>

<style scoped>
  .task {
    display: flex;
    justify-content: row;
    align-items: center;
    gap: 20px;
    padding: 15px 20px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }

  .task:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* transform: translateY(-2px); */
  }

  .checkbox {
    width: 16px;
    height: 16px;
    border-radius: 2px;
    border: 2px solid #ccc;
    transition: border-color 0.3s ease;
    margin-right: 10px;
    accent-color: #333333;
  }

  .checkbox:hover {
    border-color: #505050;
  }

  .strikethrough {
    text-decoration: line-through;
  }
</style>
