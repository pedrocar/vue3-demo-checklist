<script lang="ts" setup>
// components
import TaskFilters from '@/components/ts-script-setup/TaskFilters.vue'
import TaskInput from '@/components/ts-script-setup/TaskInput.vue'
import TaskList from '@/components/ts-script-setup/TaskList.vue'

// types
import type { Task } from '@/types/task'

// tasks logic
const tasks = ref<Task[]>([])
function addNewTask(title: string) {
  const formattedtaskTitle = title.trim()
  if (!formattedtaskTitle)
    return

  const newTask: Task = {
    id: Date.now().toString(),
    title: formattedtaskTitle,
    isChecked: false,
  }
  tasks.value.unshift(newTask)
}
function changeChecked(event: { id: string; isChecked: boolean }) {
  const selectedTask = tasks.value.find(task => task.id === event.id)
  if (!selectedTask)
    return
  selectedTask.isChecked = event.isChecked
}

// filters logic
const selectedFilter = ref(false)
function changePendingFilters(value: boolean) {
  selectedFilter.value = value
}
const filteredTasks = computed(() => {
  return selectedFilter.value
    ? tasks.value.filter(task => !task.isChecked)
    : tasks.value
})
</script>

<template>
  <TaskInput
    @new-task="addNewTask"
  />
  <TaskFilters
    @change-pending-filter="changePendingFilters"
  />
  <TaskList
    :tasks="filteredTasks"
    @change-checked="changeChecked"
  />
</template>
