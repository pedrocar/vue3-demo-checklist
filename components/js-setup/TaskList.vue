<!-- eslint-disable ts/no-unsafe-argument -->
<!-- eslint-disable ts/no-unsafe-return -->
<!-- eslint-disable ts/no-unsafe-assignment -->
<!-- eslint-disable ts/no-unsafe-member-access -->
<!-- eslint-disable ts/no-unsafe-call -->
<script>
// components
import TaskItem from '@/components/ts-script-setup/TaskItem.vue'

export default {
  components: {
    TaskItem,
  },
  props: {
    tasks: {
      type: Object,
      required: true,
    },
  },
  emits: ['change-checked'],
  setup(props, { emit }) {
    // task
    function changeChecked(event) {
      emit('change-checked', { id: event.id, isChecked: event.isChecked })
    }
    return {
      changeChecked,
    }
  },
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
