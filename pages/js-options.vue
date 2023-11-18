<!-- eslint-disable ts/no-unsafe-argument -->
<!-- eslint-disable ts/no-unsafe-return -->
<!-- eslint-disable ts/no-unsafe-assignment -->
<!-- eslint-disable ts/no-unsafe-member-access -->
<!-- eslint-disable ts/no-unsafe-call -->
<script>
// components
import TaskFilters from '@/components/js-options/TaskFilters.vue'
import TaskInput from '@/components/js-options/TaskInput.vue'
import TaskList from '@/components/js-options/TaskList.vue'

export default {
  components: {
    TaskFilters,
    TaskInput,
    TaskList,
  },
  data() {
    return {
      tasks: [],
      selectedFilter: false,
    }
  },
  computed: {
    filteredTasks() {
      return this.selectedFilter
        ? this.tasks.filter(task => !task.isChecked)
        : this.tasks
    },
  },
  methods: {
    addNewTask(title) {
      const formattedtaskTitle = title.trim()
      if (!formattedtaskTitle)
        return

      const newTask = {
        id: Date.now().toString(),
        title: formattedtaskTitle,
        isChecked: false,
      }
      this.tasks.unshift(newTask)
    },
    changeChecked(event) {
      const selectedTask = this.tasks.find(task => task.id === event.id)
      if (!selectedTask)
        return
      selectedTask.isChecked = event.isChecked
    },
    changePendingFilters(value) {
      this.selectedFilter = value
    },
  },
}
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
