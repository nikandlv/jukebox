<template>
    <section>
        <img class="artwork" src="/static/demo/artwork.jpg" />
        <div>
            <p class="title">Perfidia</p>
            <p class="artist">Nat King Cole</p>
        </div>
        <div class="bars">
            <audio ref="visualizer" autoplay src="/static/demo/music.mp3"></audio>
                <av-waveform
      ref-link="visualizer"
      :playtime-line-width="0" :canv-width="800" :canv-height="64" :playtime="false" :playtime-font-size="0" noplayed-line-color="#336cfb" playtime-line-color="#ABC123" :playtime-slider="true"
    ></av-waveform>
        </div>
    </section>
</template>

<script>
export default {
  name: 'PlayerBar'
}
</script>

<style lang="sass" scoped>
section
    display: flex
    align-items: center
    border-top: 1px solid rgba(0,0,0,0.1)
    height: 84px
    img.artwork
        height: 100%
        width: auto
        border-radius: 2px
    p.title,p.artist
        font-size: .8rem
        margin: 8px 10px
    p.artist
        color: lighten(black,45)
</style>
