<template>
  <div id="app" class="root">
    <DockableSidebar />
    <div class="page-wrapper">
      <router-view></router-view>
      <PlayerBar />
    </div>
  </div>
</template>

<script>
import DockableSidebar from './layouts/DockableSidebar'
import PlayerBar from './layouts/PlayerBar'
export default {
  name: 'jukebox',
  components: {DockableSidebar, PlayerBar}
}
</script>

<style lang="sass">
@import "../../node_modules/normalize-scss/sass/normalize.scss"
.root,.page-wrapper
  display: flex
.page-wrapper
  flex-direction: column
  flex-grow: 1
</style>
