<!-- eslint-disable ts/no-unsafe-argument -->
<!-- eslint-disable ts/no-unsafe-return -->
<!-- eslint-disable ts/no-unsafe-assignment -->
<!-- eslint-disable ts/no-unsafe-member-access -->
<!-- eslint-disable ts/no-unsafe-call -->
<script setup>
// components
import TaskItem from '@/components/js-scriptsetup-pinia/TaskItem.vue'

// store
import { useTasksStore } from '@/stores/js-scriptsetup-pinia/tasks.js'

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
