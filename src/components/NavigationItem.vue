<template>
  <li class="navigation-item">
    <a :href="item.link" class="navigation-item__link">
      {{ item.text }}
    </a>
  </li>
</template>

<script>
  import Vue from 'vue'
  import NavigationItem from '../models/navigation/item'

  export default Vue.extend({
    name: 'navigation-item',
    props: {
      item: {
        type: NavigationItem,
      }
    },
  })
</script>

<style lang="scss">
  .navigation-item {
    &:hover {
      background-color: #bccbd6;
    }
  }

  .navigation-item__link {
    padding: 1rem 2rem;
    display: block;
  }

</style>