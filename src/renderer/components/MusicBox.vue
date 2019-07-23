<template>
    <div class="music-box">
        <img @load="onLoad" src="/static/demo/artwork-5.png" alt="Artwork">
        <p class="title">Don't Hide - single</p>
        <p class="artist">Mike Perry & Willie Willie Willie</p>
    </div>
</template>

<script>
export default {
  name: 'MusicBox',
  methods: {
    onLoad () {
      this.$el.getElementsByTagName('img')[0].className = 'loaded'
    }
  }
}
</script>

<style scoped lang="sass">
div.music-box
    width: 150px
    img
        border-radius: 4px
        width: 100%
        height: auto
    p
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
        margin: 0.5rem 0
        &.title
            font-size: .9rem
        &.artist
            font-size: 0.8rem
            color: lighten(black,50)
</style>
