<template>
    <div class="music-box">
        <img @load="onLoad" :src="item.artwork" alt="Artwork">
        <p class="title">{{item.title}}</p>
        <p class="artist">{{item.artist}}</p>
    </div>
</template>

<script>
import color from 'dominant-color'
export default {
  name: 'MusicBox',
  props: ['item'],
  methods: {
    onLoad () {
      let img = this.$el.getElementsByTagName('img')[0]
      color(img.src, {format: 'rgb'}, (_, color) => {
        img.style['boxShadow'] = `0px 5px 55px 5px rgba(${color[0]},${color[1]},${color[2]},0.60),0px 10px 40px 4px rgba(${color[0]},${color[1]},${color[2]},0.40)`
      })
    }
  }
}
</script>

<style scoped lang="sass">
div.music-box
    width: 8.4rem
    min-width: 8.4rem
    margin: 0 1rem
    img
        border-radius: 100%
        width: 100%
        height: auto
        box-shadow: 0px 10px 60px -2px rgba(0,0,0,0.60)
        transition: box-shadow 500ms
    p
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
        margin: 0.5rem 0
        text-align: center
        &.title
            font-size: .9rem
        &.artist
            font-size: 0.8rem
            color: lighten(black,50)
</style>
