<template>
  <div>Redirecting...</div>
</template>

<script>
export default {
  mounted() {
    if (process.client) {
      window.location.href = "/addin/";
    }
  },
};
</script>
