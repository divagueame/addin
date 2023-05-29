
<template>
<h1>Nuxt appp loaded</h1>
</template>

<script lang="ts">
import Vue from 'vue'
import { ref, onMounted } from 'vue';
declare global {
  interface Window {
    Office: any;
  }
}

export default Vue.extend({
  name: 'IndexPage',
  setup() {
    const waitForOfficeAvailability = () => {
      return new Promise<void>((resolve) => {
        const checkAvailability = () => {
          if (typeof window.Office !== 'undefined') {
            resolve();
          } else {
            setTimeout(checkAvailability, 100);
          }
        };

        checkAvailability();
      });
    };
    onMounted(async () => {
      await waitForOfficeAvailability();

      window.Office.onReady(() => {
        console.log('Office ready');
        // Code to be executed when the Office API is ready
      });
    });
  },
})
</script>
