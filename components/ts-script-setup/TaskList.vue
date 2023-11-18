<script lang="ts" setup>
// components
import TaskItem from '@/components/ts-script-setup/TaskItem.vue'

// types
import type { Task } from '@/types/task'

// props
defineProps({
  tasks: {
    type: Object as PropType<Task[]>,
    required: true,
  },
})

// emits
const emit = defineEmits(['change-checked'])

// task
function changeChecked(event: { id: string; isChecked: boolean }) {
  emit('change-checked', { id: event.id, isChecked: event.isChecked })
}
</script>

<template>
  <TaskItem
    v-for="task in tasks"
    :key="task.id"
    :task="task"
    @change-checked="changeChecked"
  />
</template>

<style>

</style>
