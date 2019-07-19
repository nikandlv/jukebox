<template>
  <div id="app">
    <DockableSidebar />
    <router-view></router-view>
    <PlayerBar />
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
</style>
