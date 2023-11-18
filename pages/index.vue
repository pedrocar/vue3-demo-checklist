<script lang="ts" setup>
// routers
import { useRouter } from 'vue-router'

const router = useRouter()
async function navigate(path: string) {
  await router.push(path)
}

// interface
interface TaskSystem {
  id: string
  title: string
  path: string
}

// nav logic
const taskSystems: TaskSystem[] = [
  // JS
  {
    id: Date.now().toString(),
    title: '1. Javascript + Options API',
    path: 'js-options',
  },
  {
    id: Date.now().toString(),
    title: '2. Javascript + Setup Function',
    path: 'js-setup',
  },
  {
    id: Date.now().toString(),
    title: '3. Javascript + Script Setup',
    path: 'js-scriptsetup',
  },
  {
    id: Date.now().toString(),
    title: '4. Javascript + Script Setup + composable',
    path: 'js-scriptsetup-composable',
  },
  {
    id: Date.now().toString(),
    title: '5. Javascript + Script Setup + Shared state composable',
    path: 'js-scriptsetup-sharedstatecomposable',
  },
  {
    id: Date.now().toString(),
    title: '6. Javascript + Script Setup + Pinia',
    path: 'js-scriptsetup-pinia',
  },
  // TS
  {
    id: Date.now().toString(),
    title: '7. Typescript + Options API',
    path: 'ts-options',
  },
  {
    id: Date.now().toString(),
    title: '8. Typescript + Setup Function',
    path: 'ts-setup',
  },
  {
    id: Date.now().toString(),
    title: '9. Typescript + Script Setup',
    path: 'ts-scriptsetup',
  },
  {
    id: Date.now().toString(),
    title: '10. Typescript + Script Setup + composable',
    path: 'ts-scriptsetup-composable',
  },
  {
    id: Date.now().toString(),
    title: '11. Typescript + Script Setup + Shared state composable',
    path: 'ts-scriptsetup-sharedstatecomposable',
  },
  {
    id: Date.now().toString(),
    title: '12. Typescript + Script Setup + Pinia',
    path: 'ts-scriptsetup-pinia',
  },
  {
    id: Date.now().toString(),
    title: '13. Playground!',
    path: 'playground',
  },
]
</script>

<template>
  <div
    class="system-list"
  >
    <button
      v-for="taskSystem in taskSystems"
      :key="taskSystem.id"
      @click="navigate(taskSystem.path)"
    >
      {{ taskSystem.title }}
    </button>
  </div>
</template>

<style>
  .system-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  button {
    padding: 10px 20px;
    background-color: #333333;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #505050;
  }
</style>
