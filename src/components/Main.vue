<template>
  <div class="main">
    Hello World
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Main',
  props: {
    msg: String,
  },
})
</script>

<style scoped>
.main {
  text-align: center;
  color: red;
}
</style>
