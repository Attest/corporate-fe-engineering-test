<template>
  <section class="container">
    <h1>{{data.name}}</h1>
    <survey-results v-if="data.responses" :responses="data.responses"></survey-results>
    <h2 v-else>Please select department</h2>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import SurveyResults from './SurveyResults.vue'
export default Vue.extend({
  name: 'results-page',
  components: {SurveyResults},
  props: {
    data: Object,
  },
})
</script>

<style lang="scss" scoped>
  .container {
    padding: 1rem;
    background-color: #ffffff;}
</style>
