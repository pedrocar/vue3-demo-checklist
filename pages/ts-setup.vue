<script lang="ts">
// vue
import { defineComponent } from 'vue'

// components
import TaskFilters from '@/components/ts-setup/TaskFilters.vue'
import TaskInput from '@/components/ts-setup/TaskInput.vue'
import TaskList from '@/components/ts-setup/TaskList.vue'

// types
import type { Task } from '@/types/task'

export default defineComponent({
  components: {
    TaskFilters: TaskFilters as Component,
    TaskInput: TaskInput as Component,
    TaskList: TaskList as Component,
  },
  setup() {
    // tasks logic
    const tasks = ref<Task[]>([])
    function addNewTask(title: string) {
      const formattedtaskTitle = title.trim()
      if (!formattedtaskTitle)
        return

      const newTask: Task = {
        id: Date.now().toString(),
        title: formattedtaskTitle,
        isChecked: false,
      }
      tasks.value.unshift(newTask)
    }
    function changeChecked(event: { id: string; isChecked: boolean }) {
      const selectedTask = tasks.value.find(task => task.id === event.id)
      if (!selectedTask)
        return
      selectedTask.isChecked = event.isChecked
    }

    // filters logic
    const selectedFilter = ref(false)
    function changePendingFilters(value: boolean) {
      selectedFilter.value = value
    }
    const filteredTasks = computed(() => {
      return selectedFilter.value
        ? tasks.value.filter(task => !task.isChecked)
        : tasks.value
    })

    return {
      tasks,
      addNewTask,
      changeChecked,
      changePendingFilters,
      filteredTasks,
    }
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
