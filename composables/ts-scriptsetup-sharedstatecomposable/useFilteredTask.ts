// types
import type { Task } from '@/types/task'

// shared states
const tasks = ref<Task[]>([])
const selectedFilter = ref(false)

export function useFilteredTasks() {
  // tasks logic
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
  function changePendingFilters(value: boolean) {
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
