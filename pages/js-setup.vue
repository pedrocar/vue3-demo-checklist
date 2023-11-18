<!-- eslint-disable ts/no-unsafe-argument -->
<!-- eslint-disable ts/no-unsafe-return -->
<!-- eslint-disable ts/no-unsafe-assignment -->
<!-- eslint-disable ts/no-unsafe-member-access -->
<!-- eslint-disable ts/no-unsafe-call -->
<script>
// components
import TaskFilters from '@/components/ts-setup/TaskFilters.vue'
import TaskInput from '@/components/ts-setup/TaskInput.vue'
import TaskList from '@/components/ts-setup/TaskList.vue'

export default {
  components: {
    TaskFilters,
    TaskInput,
    TaskList,
  },
  setup() {
    // tasks logic
    const tasks = ref([])
    function addNewTask(title) {
      const formattedtaskTitle = title.trim()
      if (!formattedtaskTitle)
        return

      const newTask = {
        id: Date.now().toString(),
        title: formattedtaskTitle,
        isChecked: false,
      }
      tasks.value.unshift(newTask)
    }
    function changeChecked(event) {
      const selectedTask = tasks.value.find(task => task.id === event.id)
      if (!selectedTask)
        return
      selectedTask.isChecked = event.isChecked
    }

    // filters logic
    const selectedFilter = ref(false)
    function changePendingFilters(value) {
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
