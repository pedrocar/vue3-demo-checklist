<!-- eslint-disable ts/no-unsafe-argument -->
<!-- eslint-disable ts/no-unsafe-return -->
<!-- eslint-disable ts/no-unsafe-assignment -->
<!-- eslint-disable ts/no-unsafe-member-access -->
<!-- eslint-disable ts/no-unsafe-call -->
<script setup>
// components
import TaskFilters from '@/components/js-script-setup/TaskFilters.vue'
import TaskInput from '@/components/js-script-setup/TaskInput.vue'
import TaskList from '@/components/js-script-setup/TaskList.vue'

// tasks logic
const tasks = ref([])

function addNewTask(title) {
  const formattedtaskTitle = title.trim()
  if (!formattedtaskTitle)
    return

  const newTask = {
    id: Date.now().toString(),
    title: formattedtaskTitle,
    isChecked: false,
  }
  tasks.value.unshift(newTask)
}
function changeChecked(event) {
  const selectedTask = tasks.value.find(task => task.id === event.id)
  if (!selectedTask)
    return
  selectedTask.isChecked = event.isChecked
}

// filters logic
const selectedFilter = ref(false)
function changePendingFilters(value) {
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
