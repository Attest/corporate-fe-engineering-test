
<template>
  <div class="app">
    {{hello_world}}
  </div>
</template>

<script>
  import Vue from "vue"

  export default Vue.extend({
    data() {
      return {
        hello_world: 'Hello World',
      }
    },
  })
</script>

<style lang="postcss">
  .app {
  }
</style>
