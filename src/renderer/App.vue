<template>
  <div id="app" class="root">
    <DockableSidebar />
    <div class="page-wrapper">
      <router-view class="page"></router-view>
      <PlayerBar class="player-bar" />
    </div>
  </div>
</template>

<script>
import DockableSidebar from './layouts/DockableSidebar'
import PlayerBar from './layouts/PlayerBar'
import 'typeface-lato'
export default {
  name: 'jukebox',
  components: { DockableSidebar, PlayerBar }
}
</script>

<style lang="sass">
@import 'normalize-scss'
@include normalize()

.root,.page-wrapper
  display: flex
  font-family: 'Lato', sans-serif

.page-wrapper
  flex-direction: column
  flex-grow: 1
  height: 100vh
  box-sizing: border-box
  max-height: 100vh

  .page
    flex-grow: 1
    overflow: auto
</style>
