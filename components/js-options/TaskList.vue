<!-- eslint-disable ts/no-unsafe-argument -->
<!-- eslint-disable ts/no-unsafe-return -->
<!-- eslint-disable ts/no-unsafe-assignment -->
<!-- eslint-disable ts/no-unsafe-member-access -->
<!-- eslint-disable ts/no-unsafe-call -->
<script>
// components
import TaskItem from '@/components/js-options/TaskItem.vue'

export default {
  components: {
    TaskItem,
  },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  emits: ['change-checked'],
  methods: {
    changeChecked(event) {
      this.$emit('change-checked', { id: event.id, isChecked: event.isChecked })
    },
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
