<template>
    <section class="player">
        <img @load="onArtworkLoad" class="artwork" src="/static/demo/starboy.png" />
        <div>
            <p class="title">Perfidia</p>
            <p class="artist">Nat King Cole</p>
        </div>
        <div class="visualizer">
            <div id="visualizer"></div>
        </div>
        <div class="control-buttons">
            <div class="play-pause-button" @click="togglePlay">
                <svg v-show="!playingStatus" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-4 29V15l12 9-12 9z"/></svg>
                <svg v-show="playingStatus" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-2 28h-4V16h4v16zm8 0h-4V16h4v16z"/></svg>
            </div>
        </div>
    </section>
</template>

<script>
import WaveSurfer from 'wavesurfer.js'
import color from 'dominant-color'
export default {
  name: 'PlayerBar',
  mounted () {
    this.wavesurfer = WaveSurfer.create({
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
    this.wavesurfer.load('/static/demo/music.mp3')
  },
  data () {
    return {
      playingStatus: false
    }
  },
  methods: {
    onArtworkLoad () {
      let img = this.$el.getElementsByTagName('img')[0]
      color(img.src, (_, color) => {
        this.wavesurfer.setProgressColor(`#${color}`)
      })
    },
    play () {
      this.wavesurfer.play()
    },
    pause () {
      this.wavesurfer.pause()
    },
    stop () {
      this.wavesurfer.stop()
    },
    toggleMute () {
      this.wavesurfer.toggleMute()
    },
    setPlaybackRate (rate) {
      this.wavesurfer.setPlaybackRate(rate)
    },
    isPlaying () {
      return typeof this.wavesurfer === 'undefined' ? false : this.wavesurfer.isPlaying()
    },
    skip (offset) {
      this.wavesurfer.skip(offset)
    }
    togglePlay () {
      this.wavesurfer.playPause()
      this.playingStatus = this.isPlaying()
    }
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
