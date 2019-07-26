<template>
    <section class="player">
        <img @load="onArtworkLoad" class="artwork" src="/static/demo/artwork.jpg" />
        <div>
            <p class="title">Don't Let Me Down</p>
            <p class="artist">The Chainsmokers</p>
        </div>
        <div class="visualizer">
            <div id="visualizer"></div>
        </div>
        <div class="duration">
            <p class="progress active">00:00</p>
            <p>{{duration}}</p>
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
import { formatSeconds } from '../utility/DateTime'
export default {
  name: 'PlayerBar',
  mounted () {
    let progress = this.$el.getElementsByClassName('progress')[0]
    this.wavesurfer = WaveSurfer.create({
      container: '#visualizer',
      waveColor: '#c3c3c3',
      progressColor: '#336cfb',
      cursorColor: 'rgba(0,0,0,0)',
      barWidth: 2,
      barHeight: 1,
      barGap: null,
      autoCenter: true,
      responsive: true,
      height: 64
    })
    this.wavesurfer.load('/static/demo/music.mp3')
    this.wavesurfer.on('ready', () => {
      this.duration = formatSeconds(this.getDuration())
      this.wavesurfer.container.style['height'] = '100%'
      console.log(this.wavesurfer.container)
    })
    let currentWidth = 0
    let hoverStatus = false
    let hoverWidth = '0px'
    let isSeek = false
    this.wavesurfer.on('audioprocess', (amount) => {
      currentWidth = progressWave.style.width
      if (hoverStatus && !isSeek) {
        progressWave.style.width = hoverWidth
      }
      isSeek = false
      progress.innerHTML = formatSeconds(amount)
    })
    let waves = this.wavesurfer.container.getElementsByTagName('wave')
    let progressWave = waves[1]
    let mainWave = waves[0]
    mainWave.addEventListener('mouseenter', (e) => {
      isSeek = false
      hoverStatus = true
    })
    mainWave.addEventListener('mousemove', (e) => {
      hoverWidth = e.offsetX + 'px'
      progressWave.style.width = hoverWidth
    })
    mainWave.addEventListener('mouseout', (e) => {
      hoverStatus = false
      progressWave.style.width = currentWidth
    })
    this.wavesurfer.on('seek', (amount) => {
      if (!this.playingStatus) {
        this.wavesurfer.drawer.progress(amount)
      }
      isSeek = true
      currentWidth = progressWave.style.width
    })
  },
  data () {
    return {
      playingStatus: false,
      duration: '00:00'
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
    },
    getVolume () {
      return this.wavesurfer.getVolume()
    },
    setVolume (volume) {
      this.wavesurfer.setVolume(volume)
    },
    getDuration () {
      return this.wavesurfer.getDuration()
    },
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
        position: relative
        div
          position: absolute
          left: 0
          top: 0
          bottom: 0
          margin: auto
          transition: height 500ms ease
          height: 0px
          width: 100%
          &.shade
              pointer-events: none
              opacity: 0.2
        wave
            overflow-x: hidden !important
            cursor: pointer
            transition: width 200ms ease
            height: 100% !important
</style>
