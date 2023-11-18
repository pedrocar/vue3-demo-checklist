<script lang="ts">
// vue
import { defineComponent } from 'vue'

// components
import TaskFilters from '@/components/ts-options/TaskFilters.vue'
import TaskInput from '@/components/ts-options/TaskInput.vue'
import TaskList from '@/components/ts-options/TaskList.vue'

// types
import type { Task } from '@/types/task'

export default defineComponent({
  components: {
    TaskFilters: TaskFilters as Component,
    TaskInput: TaskInput as Component,
    TaskList: TaskList as Component,
  },
  data() {
    return {
      tasks: [] as Task[],
      selectedFilter: false,
    }
  },
  computed: {
    filteredTasks(): Task[] {
      return this.selectedFilter
        ? this.tasks.filter(task => !task.isChecked)
        : this.tasks
    },
  },
  methods: {
    addNewTask(title: string) {
      const formattedtaskTitle = title.trim()
      if (!formattedtaskTitle)
        return

      const newTask: Task = {
        id: Date.now().toString(),
        title: formattedtaskTitle,
        isChecked: false,
      }
      this.tasks.unshift(newTask)
    },
    changeChecked(event: { id: string; isChecked: boolean }) {
      const selectedTask = this.tasks.find(task => task.id === event.id)
      if (!selectedTask)
        return
      selectedTask.isChecked = event.isChecked
    },
    changePendingFilters(value: boolean) {
      this.selectedFilter = value
    },
  },
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
