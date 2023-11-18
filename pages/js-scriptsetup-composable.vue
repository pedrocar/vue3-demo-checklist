<script setup>
// components
import TaskFilters from '@/components/js-scriptsetup-composable/TaskFilters.vue'
import TaskInput from '@/components/js-scriptsetup-composable/TaskInput.vue'
import TaskList from '@/components/js-scriptsetup-composable/TaskList.vue'

// composables
import { useFilteredTasks } from '@/composables/js-scriptsetup-composable/useFilteredTask.js'

const {
  addNewTask,
  changeChecked,
  changePendingFilters,
  filteredTasks,
} = useFilteredTasks()
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
