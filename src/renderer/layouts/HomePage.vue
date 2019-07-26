<template>
    <section>
      <ActionBar />
      <div class="upper-row">
        <MusicRow :items='items' />
      </div>

      <div class="middle-row">
        <div class="grow-half">
          <div class="favourite__title-container">
            <legend>favourite songs</legend>
            <Button variant="outlined" class="view-all">View All</Button>
          </div>
          
          <div class="favourite__list-header">
            <span class="song">
              <p>songs</p>
            </span>

            <span class="artist">
              <p>artist</p>
            </span>

            <span class="duration">
              <p>duration</p>
            </span>
          </div>
          <List >
            <ListItem v-for="favourite in favourites" :key="favourite.id" :item="favourite"></ListItem>
          </List>
        </div>

        <div class="grow-half"></div>
      </div>

    </section>
</template>

<script>
import ActionBar from './ActionBar'
import MusicRow from './MusicRow'
import List from './List'
import ListItem from '../components/ListItem'
import Button from '../components/Button'

export default {
  name: 'HomePage',
  components: { ActionBar, MusicRow, List, ListItem, Button },
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

.favourite
  &__list-header
    width: 100%
    padding: 0.3rem .6rem
    display: flex
    justify-content: space-between

    span.song
        flex: 1 0 50%
    span.artist
      flex: 1 0 40%
    span.duration
      flex: 1 0 10%

    p
      color: lighten(grey , 20)
      text-transform: capitalize
      
  &__title-container
    display: flex
    justify-content: space-between
    align-items: center

    legend
      font-size: 2rem
      font-family: 'Roboto Slab', serif        
      margin: 20px 0px
      text-transform: capitalize

    .view-all
      border-radius: 1rem
      line-height: .1rem
      padding: .9rem 1.3rem
      font-weight: 300
      text-transform: capitalize
      display: flex
      align-items: center
      justify-content: center
</style>
