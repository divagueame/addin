
<template>
<h1>Meow</h1>
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

    const logSelectedEmailId = ()=> {
    console.log('Chiki')
    // console.log(Office.context.mailbox.item.internetMessageId)
    // console.log(Office.context.mailbox.item)
}


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
        console.log('Office ready ');
        console.log(window.Office.context.mailbox.item);
        // Code to be executed when the Office API is ready
       // logSelectedEmailId()


      });
    });
  },
})
</script>
