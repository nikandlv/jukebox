<template>
  <li>
      <div class="song">
        <img @load="onLoad" :src="item.artwork" alt="Artwork">  
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
import color from 'dominant-color'
export default {
  name: 'ListItem',
  props: ['item'],

  methods: {
    onLoad () {
      let img = this.$el.getElementsByTagName('img')[0]
      let list = this.$el.getElementsByTagName('li')[0]

      color(img.src, {format: 'hex'}, (_, color) => {
        list.style.backgroundColor = `#${color}`
      })
    }
  }
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
    
    img
      width: 4rem
      height: 4rem
      margin-right: .6rem
      border-radius: 50%

  div.artist
    display: flex
    align-items: center
    flex: 1 0 40%

  div.duration
    display: flex
    align-items: center
    justify-content: center
    flex: 1 0 15%

</style>

