<template>
  <div id="app" class="root">
    <DockableSidebar />
    <div class="page-wrapper">
      <router-view class="page" :class="{'fullscreen' : fullscreenStatus}"></router-view>
      <PlayerBar class="player-bar" />
    </div>
  </div>
</template>

<script>
import DockableSidebar from './layouts/DockableSidebar'
import PlayerBar from './layouts/PlayerBar'
import { mapGetters } from 'vuex'

export default {
  name: 'jukebox',
  components: { DockableSidebar, PlayerBar },
  computed: mapGetters(['fullscreenStatus'])
}
</script>

<style lang="sass">
@import 'normalize-scss'
@import 'lato-font/scss/_public-api.scss'
$FontPath: '/node_modules/roboto-slab-fontface-kit/fonts'
@import 'roboto-slab-fontface-kit/roboto-slab.scss'
@include normalize()
 
$lato-font-path: '/node_modules/lato-font/fonts'

@include lato-include-font('normal')


.root,.page-wrapper
  display: flex
  @include lato-font('normal')
  max-height: 100vh
  user-select: none
  overflow: hidden

.page-wrapper
  flex-direction: column
  flex-grow: 1
  height: 100vh
  box-sizing: border-box
  max-height: 100vh

  .page
    flex-grow: 1
    overflow-x: hidden
    transition: padding-top 300ms

img
  user-drag: none 
  user-select: none
  -moz-user-select: none
  -webkit-user-drag: none
  -webkit-user-select: none
  -ms-user-select: none

@media(max-width: 800px)
  .page
    padding-top: 64px
    &.fullscreen
      padding-top: 0px
</style>
