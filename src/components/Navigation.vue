<template>
  <aside class="aside">
    <ul v-if="items.length" class="navigation-list">
      <navigation-item v-for="(item, i) in items"
                       :key="i" :item="item"
                       @click.native.prevent="navigate(item.link)" />
    </ul>
  </aside>
</template>
<script>
  import Vue from 'vue'
  import NavigationItem from "@/components/NavigationItem";

  export default Vue.extend({
    name: 'navigation',
    components: { NavigationItem },
    props: {
      items: {
        type: Array,
        default: () => [],
      }
    },
    methods: {
      navigate(link) {
        this.$emit('navigate', link)
      }
    }
  });
</script>
<style lang="scss">
  $secondary: #f8fcff;
  .aside {
    background-color: $secondary;
    padding: 2.5rem 0;
  }

  .navigation-list {
    list-style: none;
  }

</style>