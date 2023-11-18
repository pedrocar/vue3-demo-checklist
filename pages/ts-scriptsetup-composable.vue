<script lang="ts" setup>
// components
import TaskFilters from '@/components/ts-scriptsetup-composable/TaskFilters.vue'
import TaskInput from '@/components/ts-scriptsetup-composable/TaskInput.vue'
import TaskList from '@/components/ts-scriptsetup-composable/TaskList.vue'

// composables
import { useFilteredTasks } from '@/composables/ts-scriptsetup-composable/useFilteredTask.ts'

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
