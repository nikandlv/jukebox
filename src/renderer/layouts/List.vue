<template>
  <div>
    <div class="favourite__title-container">
      <legend>favourite songs</legend>
      <Button variant="outlined" class="view-all">View All</Button>
    </div>

    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import FavouriteItem from '../components/FavouriteItem'
import Button from '../components/Button'
export default {
  name: 'List',
  props: ['favourites'],
  components: { FavouriteItem, Button }
}
</script>

<style lang="sass" scoped>
// TITLE
.favourite__title-container
  display: flex
  justify-content: space-between
  align-items: center
legend
  font-size: 2rem
  font-family: 'Roboto Slab', serif        
  margin: 20px 0px
  text-transform: capitalize
.view-all
  border-radius: 1rem
  line-height: .1rem
  padding: .9rem 1.3rem
  font-weight: 300
  text-transform: capitalize
  display: flex
  align-items: center
  justify-content: center

// TABLE
table
  width: 100%
  border-collapse: collapse
th
  color: lighten(grey, 20)
  font-weight: 300
  text-transform: capitalize
  text-align: left
  // define width based on amount of content 
  &#song
    width: 50%
  &#artist
    width: 34%
  &#duration
    width: 16%

</style>
