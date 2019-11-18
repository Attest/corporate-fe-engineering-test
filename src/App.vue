<template>
  <main id="app">
    <navigation class="navigation" :items="navigationItems" @navigate="navigate"></navigation>
    <page class="page" :data="departmentData"/>
  </main>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Page from './components/Page.vue'
  import Navigation from './components/Navigation.vue'
  import NavigationItem from './models/navigation/item';
  import {mapGetters} from "vuex";

  export default Vue.extend({
    name: 'app',
    components: {
      Page,
      Navigation,
    },
    mounted() {
      this.$store.dispatch('loadNavigation')
    },
    computed: {
      ...mapGetters(['navigationItems', 'departmentData'])
    },
    methods: {
      navigate(department: String) {
        this.$store.dispatch('loadDepartmentData', department)
      }

    }

  });
</script>

<style lang="scss">
  @import "styles/variables.scss";
  #app {
    padding: 5rem;
    display: flex;
    min-height: -webkit-fill-available;
  }

  .page {
    flex-grow: 1;
  }

  .navigation {
    margin-right: 2.5rem;
  }

</style>
