<script lang="ts" setup>
// components
import TaskItem from '@/components/ts-scriptsetup-pinia/TaskItem.vue'

// store
import { useTasksStore } from '@/stores/ts-scriptsetup-pinia/tasks.ts'

// task
const { filteredTasks: tasks } = storeToRefs(useTasksStore())
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
