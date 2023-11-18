<!-- eslint-disable ts/no-unsafe-argument -->
<!-- eslint-disable ts/no-unsafe-return -->
<!-- eslint-disable ts/no-unsafe-assignment -->
<!-- eslint-disable ts/no-unsafe-member-access -->
<!-- eslint-disable ts/no-unsafe-call -->
<script setup>
// composables
import { useFilteredTasks } from '@/composables/ts-scriptsetup-sharedstatecomposable/useFilteredTask.ts'

// props
const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
})

// task
const { changeChecked } = useFilteredTasks()
function checkTask(event) {
  const target = event.target
  const isChecked = target.checked
  changeChecked({ id: props.task.id, isChecked })
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
