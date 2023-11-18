<!-- eslint-disable ts/no-unsafe-argument -->
<!-- eslint-disable ts/no-unsafe-return -->
<!-- eslint-disable ts/no-unsafe-assignment -->
<!-- eslint-disable ts/no-unsafe-member-access -->
<!-- eslint-disable ts/no-unsafe-call -->
<script setup>
// components
import TaskItem from '@/components/js-script-setup/TaskItem.vue'

// props
defineProps({
  tasks: {
    type: Object,
    required: true,
  },
})

// emits
const emit = defineEmits(['change-checked'])

// task
function changeChecked(event) {
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
