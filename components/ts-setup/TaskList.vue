<script lang="ts">
// vue
import { defineComponent } from 'vue'

// components
import TaskItem from '@/components/ts-script-setup/TaskItem.vue'

// types
import type { Task } from '@/types/task'

export default defineComponent({
  components: {
    TaskItem: TaskItem as Component,
  },
  props: {
    tasks: {
      type: Object as PropType<Task[]>,
      required: true,
    },
  },
  emits: ['change-checked'],
  setup(props, { emit }) {
    // task
    function changeChecked(event: { id: string; isChecked: boolean }) {
      emit('change-checked', { id: event.id, isChecked: event.isChecked })
    }
    return {
      changeChecked,
    }
  },
})
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
