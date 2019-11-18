<template>
  <section class="container">
    Hello World
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'results-page',
  props: {
    data: Object,
  },
})
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    background-color: #ffffff;}
</style>
