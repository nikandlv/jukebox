<template>
      <section>
        <section class="player">
          <img @load="onArtworkLoad" class="artwork" :src="playerQueue[this.currentlyPlaying].artwork" />
          <div>
              <p class="title">{{playerQueue[this.currentlyPlaying].title}}</p>
              <p class="artist">{{playerQueue[this.currentlyPlaying].artist}}</p>
          </div>
          <div class="visualizer">
              <div id="visualizer"></div>
              <div id="minimap" class="shade"></div>
          </div>
          <div class="duration">
              <p class="currentTime progress active">00:00</p>
              <p class="remainingTime">{{duration}}</p>
          </div>
          <div class="control-buttons">
              <IconButton variant="theme-icon" :click="toggleFavorite">
                <svg v-show="isFavorited" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path class="colorable" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                <svg v-show="!isFavorited" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path class="colorable" d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
              </IconButton>
              <IconButton variant="contained" :click="playPrevious" :disabled="(currentlyPlaying == 0)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
              </IconButton>
              <IconButton variant="contained large" :click="togglePlay">
                <svg v-show="playingStatus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                <svg v-show="!playingStatus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
              </IconButton>
              <IconButton variant="contained" :click="playNext" :disabled="(currentlyPlaying + 1) >= playerQueue.length">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
              </IconButton>
              <IconButton variant="contained" :click="toggleFullscreenStatus">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
              </IconButton>
          </div>
      </section>
      <section class="fullscreen" :class="{'active' : fullscreenStatus}">
              <IconButton variant="contained" :click="toggleFullscreenStatus">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
              </IconButton>
      </section>
    </section>
</template>

<script>
import WaveSurfer from 'wavesurfer.js'
import minimap from 'wavesurfer.js/dist/plugin/wavesurfer.minimap'
import color from 'dominant-color'
import { formatSeconds } from '../utility/DateTime'
import IconButton from '../components/IconButton'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'PlayerBar',
  components: { IconButton },
  data () {
    return {
      playingStatus: false,
      isFavorited: false,
      duration: '00:00',
      isFullscreen: false
    }
  },
  computed: mapGetters(['fullscreenStatus', 'currentlyPlaying', 'playerQueue']),
  mounted () {
    this.drawVisualizer()
  },
  updated () {
    this.wavesurfer.load(this.playerQueue[this.currentlyPlaying].stream)
  },
  methods: {
    drawVisualizer () {
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
        height: 64,
        plugins: [
          minimap.create({
            container: '#minimap',
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
        ]
      })
      this.wavesurfer.load(this.playerQueue[this.currentlyPlaying].stream)
      let readyCounter = 0
      this.wavesurfer.on('ready', () => {
        console.log('ready')
        readyCounter += 1
        this.duration = formatSeconds(this.getDuration())
        let map = this.wavesurfer.minimap.drawer.container
        this.wavesurfer.container.style['height'] = '100%'
        map.style['height'] = '100%'
        if (readyCounter > 0) {
          this.play()
        }
      })
      let currentWidth = 0
      let hoverStatus = false
      let hoverWidth = '0px'
      let isSeek = false
      let progressWave = this.wavesurfer.minimap.drawer.container.getElementsByTagName('wave')[1]
      progressWave.style['zIndex'] = 4
      let mainWave = this.wavesurfer.container.getElementsByTagName('wave')[0]
      this.wavesurfer.on('audioprocess', (amount) => {
        currentWidth = progressWave.style.width
        if (hoverStatus && !isSeek) {
          progressWave.style.width = hoverWidth
        }
        isSeek = false
        progress.innerHTML = formatSeconds(amount)
      })
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
    onArtworkLoad () {
      let img = this.$el.getElementsByTagName('img')[0]
      let controlIcons = this.$el.getElementsByClassName('control-buttons')[0].children
      color(img.src, (_, color) => {
        this.wavesurfer.setProgressColor(`#${color}`)
        this.wavesurfer.minimap.params.progressColor = `#${color}`
        this.wavesurfer.minimap.drawer.updateSize()
        for (let child in controlIcons) {
          if (typeof controlIcons[child] === 'object') {
            if (controlIcons[child].className.includes('no-theme')) {
              continue
            }
            if (controlIcons[child].className.includes('theme-icon')) {
              let paths = controlIcons[child].getElementsByTagName('path')
              for (let path in paths) {
                if (typeof paths[path] === 'object') {
                  if (paths[path].getAttribute('class') === null) {
                    continue
                  }
                  if (paths[path].getAttribute('class').includes('colorable')) {
                    paths[path].style.fill = `#${color}`
                  }
                }
              }
              continue
            }
            controlIcons[child].style.backgroundColor = `#${color}`
          }
        }
      })
    },
    playNext () {
      this.wavesurfer.container.style['height'] = '0%'
      let map = this.wavesurfer.minimap.drawer.container
      map.style['height'] = '0%'
      window.setTimeout(() => {
        this.playQueueItem(this.currentlyPlaying + 1)
      }, 500)
    },
    playPrevious () {
      this.wavesurfer.container.style['height'] = '0%'
      let map = this.wavesurfer.minimap.drawer.container
      map.style['height'] = '0%'
      window.setTimeout(() => {
        this.playQueueItem(this.currentlyPlaying - 1)
      }, 500)
    },
    play () {
      this.wavesurfer.play()
    },
    pause () {
      this.wavesurfer.pause()
      this.playingStatus = this.isPlaying()
    },
    stop () {
      this.wavesurfer.stop()
      this.playingStatus = this.isPlaying()
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
      if (this.isPlaying()) {
        this.pause()
      } else {
        this.play()
      }
      this.playingStatus = this.isPlaying()
    },
    toggleFavorite () {
      this.isFavorited = !this.isFavorited
    },
    ...mapActions(['toggleFullscreenStatus', 'playQueueItem'])
  }
}
</script>

<style lang="sass">
section.player
    display: flex
    align-items: center
    border-top: 1px solid rgba(0,0,0,0.1)
    height: 4.5rem
    background-color: white
    min-height: 4.5rem
    transition: height 500ms ease, min-height 500ms ease, width 500ms ease
    .control-buttons
      span
        margin: 0 0.2rem
      display: flex
      align-items: center
    img.artwork
        height: 4.5rem
        width: 4.5rem
    p.title,p.artist,.currentTime,.remainingTime
        font-size: .8rem
        margin: 8px 10px
    p.artist,.remainingTime
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
          z-index: 
          &.shade
              pointer-events: none
              z-index: 2
              opacity: .6
        wave
            overflow-x: hidden !important
            cursor: pointer
            transition: width 200ms ease
            height: 100% !important
section.fullscreen
  width: 100vw
  height: 100vh
  position: absolute
  overflow: hidden
  left: 0
  top: 0
  background-color: white
  z-index: 1400
  transition: transform 500ms ease-out
  transform: translate3d(0,+100vh,0)
  &.active
    transform: translate3d(0,0vh,0)
</style>
