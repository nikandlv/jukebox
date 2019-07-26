<template>
  <li>
      <div class="song">
        <img :src="item.artwork" alt="Artwork">  
        {{item.title}}
      </div>

      <div class="artist">
        {{item.artist}}
      </div>

      <div class="duration">
        {{item.duration}}
      </div>
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: ['item']
}
</script>

<style lang="sass" scoped>
li
  width: 100%
  list-style: none
  display: flex
  justify-content: space-between
  margin-bottom: .6rem

  div.song
    display: flex
    align-items: center
    flex: 1 0 50%

  div.artist
    display: flex
    align-items: center
    flex: 1 0 40%

  div.duration
    display: flex
    align-items: center
    justify-content: center
    flex: 1 0 15%

  img
    width: 4rem
    height: 4rem
    margin-right: .6rem
    border-radius: 10rem
</style>

