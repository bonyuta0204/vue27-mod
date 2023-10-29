<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="increment">Increment</button>
    <p>Count: {{ count }}</p>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MyComponent',
  setup() {
    const message = ref('Hello, Vue 2.6 with Composition API!');
    const count = ref(0);

    const increment = () => {
      count.value += 1;
    };

    return {
      message,
      count,
      increment
    };
  }
});
</script>

<style scoped>
/* CSS styles here */
</style>
