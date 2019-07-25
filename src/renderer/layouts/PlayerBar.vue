<template>
    <section class="player">
        <img class="artwork" src="/static/demo/artwork.jpg" />
        <div>
            <p class="title">Perfidia</p>
            <p class="artist">Nat King Cole</p>
        </div>
        <div class="visualizer">
            <div id="visualizer"></div>
        </div>
    </section>
</template>

<script>
import WaveSurfer from 'wavesurfer.js'
export default {
  name: 'PlayerBar',
  mounted () {
    const wavesurfer = WaveSurfer.create({
      container: '#visualizer',
      waveColor: '#c3c3c3',
      progressColor: '#336cfb',
      barWidth: 2,
      barHeight: 1,
      barGap: null,
      autoCenter: true,
      height: 64,
      responsive: true
    })
    wavesurfer.load('/static/demo/music.mp3')
    wavesurfer.on('ready', function () {
      // wavesurfer.play()
    })
  }
}
</script>

<style lang="sass">
section.player
    display: flex
    align-items: center
    border-top: 1px solid rgba(0,0,0,0.1)
    height: 5rem
    img.artwork
        height: 100%
        width: auto
    p.title,p.artist
        font-size: .8rem
        margin: 8px 10px
    p.artist
        color: lighten(black,45)
    .visualizer
        flex-grow: 1
        height: 64px
        wave
            overflow-x: hidden !important
</style>
