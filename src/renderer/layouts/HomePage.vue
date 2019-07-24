<template>
    <section>
      <ActionBar />
      <div>
        <MusicRow :items='items' />
      </div>
    </section>
</template>

<script>
import ActionBar from './ActionBar'
import MusicRow from './MusicRow'
export default {
  name: 'HomePage',
  components: { ActionBar, MusicRow },
  data: () => {
    return {
      items: [
        {
          id: 0,
          title: 'Habiba',
          artist: 'Oldasinus',
          artwork: '/static/demo/habiba.jpg'
        },
        {
          id: 1,
          title: 'Starboy',
          artist: 'The Weeknd',
          artwork: '/static/demo/starboy.png'
        },
        {
          id: 2,
          title: 'Tilte',
          artist: 'Juice WRLD',
          artwork: '/static/demo/clever.jpg'
        },
        {
          id: 3,
          title: 'Habiba',
          artist: 'Oldasinus',
          artwork: '/static/demo/habiba.jpg'
        },
        {
          id: 4,
          title: 'Starboy',
          artist: 'The Weeknd',
          artwork: '/static/demo/starboy.png'
        },
        {
          id: 5,
          title: 'Tilte',
          artist: 'Juice WRLD',
          artwork: '/static/demo/clever.jpg'
        },
        {
          id: 6,
          title: 'Habiba',
          artist: 'Oldasinus',
          artwork: '/static/demo/habiba.jpg'
        },
        {
          id: 7,
          title: 'Starboy',
          artist: 'The Weeknd',
          artwork: '/static/demo/starboy.png'
        },
        {
          id: 8,
          title: 'Tilte',
          artist: 'Juice WRLD',
          artwork: '/static/demo/clever.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="sass">
section.page
    padding: 1rem 2.5rem
    overflow-x: hidden
    .VueCarousel-wrapper
        overflow: unset
</style>
