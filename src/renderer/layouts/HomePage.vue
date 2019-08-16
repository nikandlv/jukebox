<template>
      <section >
        <ActionBar class="action-bar" />
        <div class="upper-row" >
          <MusicRow :items='items' title="Top rated" />
        </div>

        <div class="middle-row">
          <div class="grow-half favourite">
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
          </div> <!-- favourite box-->

          <div class="grow-half recommend">
            <MusicRow :items='items' title="Recommended for you" class="carousel-custom half" /> 
          </div> <!-- recommended box -->
        </div>

        <div class="lower-row">
          <div class="genre">
            <MusicRow :items='geners' title="Top genres" class="carousel-custom half" /> 
          </div>
        </div>
      </section>
</template>

<script>
import ActionBar from './ActionBar'
import MusicRow from './MusicRow'
import List from './List'
import ListItem from '../components/ListItem'
import Button from '../components/Button'
import MusicBox from '../components/MusicBox'
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
Scrollbar.use(OverscrollPlugin)
export default {
  name: 'HomePage',
  components: { ActionBar, MusicRow, List, ListItem, Button, MusicBox },
  mounted () {
    let container = this.$el
    Scrollbar.init(container, { overscrollEffect: 'bounce', continuousScrolling: true, alwaysShowTracks: true })
  },
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
        },
        {
          id: 9,
          title: 'Habiba',
          artist: 'Oldasinus',
          artwork: '/static/demo/habiba.jpg'
        },
        {
          id: 10,
          title: 'Starboy',
          artist: 'The Weeknd',
          artwork: '/static/demo/starboy.png'
        },
        {
          id: 12,
          title: 'Tilte',
          artist: 'Juice WRLD',
          artwork: '/static/demo/clever.jpg'
        },
        {
          id: 13,
          title: 'Habiba',
          artist: 'Oldasinus',
          artwork: '/static/demo/habiba.jpg'
        },
        {
          id: 14,
          title: 'Starboy',
          artist: 'The Weeknd',
          artwork: '/static/demo/starboy.png'
        },
        {
          id: 15,
          title: 'Tilte',
          artist: 'Juice WRLD',
          artwork: '/static/demo/clever.jpg'
        },
        {
          id: 16,
          title: 'Habiba',
          artist: 'Oldasinus',
          artwork: '/static/demo/habiba.jpg'
        },
        {
          id: 17,
          title: 'Starboy',
          artist: 'The Weeknd',
          artwork: '/static/demo/starboy.png'
        },
        {
          id: 18,
          title: 'Tilte',
          artist: 'Juice WRLD',
          artwork: '/static/demo/clever.jpg'
        },
        {
          id: 19,
          title: 'Habiba',
          artist: 'Oldasinus',
          artwork: '/static/demo/habiba.jpg'
        },
        {
          id: 20,
          title: 'Starboy',
          artist: 'The Weeknd',
          artwork: '/static/demo/starboy.png'
        },
        {
          id: 21,
          title: 'Tilte',
          artist: 'Juice WRLD',
          artwork: '/static/demo/clever.jpg'
        },
        {
          id: 22,
          title: 'Habiba',
          artist: 'Oldasinus',
          artwork: '/static/demo/habiba.jpg'
        },
        {
          id: 23,
          title: 'Starboy',
          artist: 'The Weeknd',
          artwork: '/static/demo/starboy.png'
        },
        {
          id: 24,
          title: 'Tilte',
          artist: 'Juice WRLD',
          artwork: '/static/demo/clever.jpg'
        },
        {
          id: 25,
          title: 'Habiba',
          artist: 'Oldasinus',
          artwork: '/static/demo/habiba.jpg'
        },
        {
          id: 26,
          title: 'Starboy',
          artist: 'The Weeknd',
          artwork: '/static/demo/starboy.png'
        },
        {
          id: 27,
          title: 'Tilte',
          artist: 'Juice WRLD',
          artwork: '/static/demo/clever.jpg'
        },
        {
          id: 28,
          title: 'Habiba',
          artist: 'Oldasinus',
          artwork: '/static/demo/habiba.jpg'
        },
        {
          id: 29,
          title: 'Starboy',
          artist: 'The Weeknd',
          artwork: '/static/demo/starboy.png'
        },
        {
          id: 30,
          title: 'Tilte',
          artist: 'Juice WRLD',
          artwork: '/static/demo/clever.jpg'
        },
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
        }
      ],

      recommends: [
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
      geners: [
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
        },
        {
          id: 9,
          title: 'Habiba',
          artist: 'Oldasinus',
          artwork: '/static/demo/habiba.jpg'
        },
        {
          id: 10,
          title: 'Starboy',
          artist: 'The Weeknd',
          artwork: '/static/demo/starboy.png'
        },
        {
          id: 11,
          title: 'Tilte',
          artist: 'Juice WRLD',
          artwork: '/static/demo/clever.jpg'
        },
        {
          id: 12,
          title: 'Habiba',
          artist: 'Oldasinus',
          artwork: '/static/demo/habiba.jpg'
        },
        {
          id: 13,
          title: 'Starboy',
          artist: 'The Weeknd',
          artwork: '/static/demo/starboy.png'
        },
        {
          id: 14,
          title: 'Tilte',
          artist: 'Juice WRLD',
          artwork: '/static/demo/clever.jpg'
        },
        {
          id: 15,
          title: 'Habiba',
          artist: 'Oldasinus',
          artwork: '/static/demo/habiba.jpg'
        },
        {
          id: 16,
          title: 'Starboy',
          artist: 'The Weeknd',
          artwork: '/static/demo/starboy.png'
        },
        {
          id: 17,
          title: 'Tilte',
          artist: 'Juice WRLD',
          artwork: '/static/demo/clever.jpg'
        },
        {
          id: 18,
          title: 'Habiba',
          artist: 'Oldasinus',
          artwork: '/static/demo/habiba.jpg'
        },
        {
          id: 19,
          title: 'Starboy',
          artist: 'The Weeknd',
          artwork: '/static/demo/starboy.png'
        },
        {
          id: 20,
          title: 'Tilte',
          artist: 'Juice WRLD',
          artwork: '/static/demo/clever.jpg'
        },
        {
          id: 21,
          title: 'Habiba',
          artist: 'Oldasinus',
          artwork: '/static/demo/habiba.jpg'
        },
        {
          id: 22,
          title: 'Starboy',
          artist: 'The Weeknd',
          artwork: '/static/demo/starboy.png'
        },
        {
          id: 23,
          title: 'Tilte',
          artist: 'Juice WRLD',
          artwork: '/static/demo/clever.jpg'
        },
        {
          id: 24,
          title: 'Habiba',
          artist: 'Oldasinus',
          artwork: '/static/demo/habiba.jpg'
        },
        {
          id: 25,
          title: 'Starboy',
          artist: 'The Weeknd',
          artwork: '/static/demo/starboy.png'
        },
        {
          id: 26,
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
  .scrollbar-track-x,.scrollbar-thumb-x 
      display: none !important
  overflow-x: hidden
  .VueCarousel-wrapper
      overflow: unset
  .action-bar
    padding: 1rem 2.5rem
  .upper-row
    padding: 1rem 2rem
  .middle-row
    display: flex

  .grow-half
    flex: 1 0 50% 
    max-width: 50%
    &.recommend
      max-width: 40%

.favourite
  background: white
  padding: 1rem 2.5rem
  z-index: 10
  &__list-header
    width: 100%
    padding: 0.3rem 1.6rem
    box-sizing: border-box
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
      margin: 15px 0px
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

.recommend
  margin-left: 2rem
  padding: 0
  &__title
    display: flex
    align-items: center
    legend
      font-size: 2rem
      font-family: 'Roboto Slab', serif        
      margin: 25px 0
      text-transform: capitalize

    h3
      font-size: 1.5rem
      font-weight: 200
      margin-left: 1rem

@media(max-width: 1000px)
  .middle-row
    flex-wrap: wrap

  .recommend
    margin-left: 0
    margin-top: 1.5rem

.genre
  padding: 1rem 2.5rem
  &__title
    legend
      font-size: 2rem
      font-family: 'Roboto Slab', serif        
      margin: 15px 0px 20px 0
      text-transform: capitalize
  .carousel-custom
    .owl-stage-outer
      overflow: unset
</style>
