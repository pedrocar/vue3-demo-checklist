<script lang="ts">
// vue
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['change-pending-filter'],
  setup(_, { emit }) {
    // filter logic
    const showPending = ref(false)

    function changeFilter(event: Event) {
      const target = event.target as HTMLInputElement
      const newValue = target.checked
      emit('change-pending-filter', newValue)
    }

    return {
      showPending,
      changeFilter,
    }
  },
})
</script>

<template>
  <div class="filters">
    <input
      :value="showPending"
      class="checkbox"
      type="checkbox"
      @change="changeFilter"
    >
    <label
      for="check"
    >
      Show pending
    </label>
  </div>
</template>

<style scoped>
  .filters {
    margin-bottom: 30px;
  }

  .checkbox {
    width: 16px;
    height: 16px;
    border-radius: 2px;
    border: 2px solid #ccc;
    transition: border-color 0.3s ease;
    margin-right: 10px;
    accent-color: #333333;
  }

  .checkbox:hover {
    border-color: #505050;
  }
</style>
