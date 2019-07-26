<template>
    <section>
      <ActionBar />
      <div class="upper-row">
        <MusicRow :items='items' />
      </div>

      <div class="middle-row">
        <List class="grow-half">
          <ListItem v-for="favourite in favourties" :key="favourite.id"></ListItem>
        </List>
        <div class="grow-half"></div>
      </div>

    </section>
</template>

<script>
import ActionBar from './ActionBar'
import MusicRow from './MusicRow'
import List from './FavouriteList'

export default {
  name: 'HomePage',
  components: { ActionBar, MusicRow, List },
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
      ],
      favourites: [
        {
          id: 1,
          title: 'Habiba',
          artist: 'Oldasinus',
          duration: '3:30',
          artwork: '/static/demo/habiba.jpg'
        },
        {
          id: 2,
          title: 'Starboy',
          artist: 'The Weeknd',
          duration: '4:30',
          artwork: '/static/demo/starboy.png'
        },
        {
          id: 3,
          title: 'Tilte',
          artist: 'Juice WRLD',
          duration: '5:30',
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

    .middle-row
      display: flex

    .grow-half
      flex: 1 0 50% // deviding the space equally between two element
</style>
