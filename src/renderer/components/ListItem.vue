<template>
  <li :class="{ 'active': active === true }" @click="toggleActive">
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
  props: ['item'],

  data () {
    return {
      active: false
    }
  },

  methods: {
    toggleActive () {
      this.active = !this.active
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
  padding: .4rem .8rem
  border-radius: .5rem
  box-sizing: border-box
  &.active
    background-color: #0076F9
    color: white
    box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)
    
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

