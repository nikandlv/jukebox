<template>
  <div>

    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import FavouriteItem from '../components/ListItem'

export default {
  name: 'List',
  props: ['favourites'],
  components: { FavouriteItem }
}
</script>

<style lang="sass" scoped>
ul
  margin: 0
  padding: .3rem 0rem
</style>
