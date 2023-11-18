<!-- eslint-disable ts/no-unsafe-argument -->
<!-- eslint-disable ts/no-unsafe-return -->
<!-- eslint-disable ts/no-unsafe-assignment -->
<!-- eslint-disable ts/no-unsafe-member-access -->
<!-- eslint-disable ts/no-unsafe-call -->
<script setup>
// emits
const emit = defineEmits(['change-pending-filter'])

// filter logic
const showPending = ref(false)

function changeFilter(event) {
  const target = event.target
  const newValue = target.checked
  emit('change-pending-filter', newValue)
}
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
