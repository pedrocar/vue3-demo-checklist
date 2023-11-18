<script lang="ts" setup>
// components
import TaskItem from '@/components/ts-scriptsetup-sharedstatecomposable/TaskItem.vue'

// composables
import { useFilteredTasks } from '@/composables/ts-scriptsetup-sharedstatecomposable/useFilteredTask.ts'

// task
const { filteredTasks: tasks } = useFilteredTasks()
</script>

<template>
  <TaskItem
    v-for="task in tasks"
    :key="task.id"
    :task="task"
  />
</template>

<style>

</style>
