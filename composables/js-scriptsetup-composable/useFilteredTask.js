/* eslint-disable ts/no-unsafe-assignment */
/* eslint-disable ts/no-unsafe-member-access */
/* eslint-disable ts/no-unsafe-call */
export function useFilteredTasks() {
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
    addNewTask,
    changeChecked,
    changePendingFilters,
    filteredTasks,
  }
}
