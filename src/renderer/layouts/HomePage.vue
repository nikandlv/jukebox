<template>
    <section>
      <ActionBar />
      <div class="upper-row">
        <MusicRow :items='items' />
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

        <div class="grow-half recommend" >
          <div class="recommend__title">
            <legend>Recommended For You</legend>
            <h3>Rock</h3>
          </div>

          <carousel :dots="false" :nav="false" :autoWidth="true" class="carousel-custom">
            <MusicBox v-for="item in items" :key="item.id" :item="item" />
          </carousel>

          <!-- <carousel :dots="false" :nav="false" :autoWidth="true" class="carousel-custom">
            <MusicBox v-for="item in items" :key="item.id" :item="item" />
          </carousel> -->

        </div> <!-- recommended box -->
      </div>

    </section>
</template>

<script>
import ActionBar from './ActionBar'
import MusicRow from './MusicRow'
import List from './List'
import ListItem from '../components/ListItem'
import Button from '../components/Button'
import carousel from 'vue-owl-carousel'
import MusicBox from '../components/MusicBox'

export default {
  name: 'HomePage',
  components: { ActionBar, MusicRow, List, ListItem, Button, carousel, MusicBox },
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
        }
        // {
        //   id: 3,
        //   title: 'Tilte',
        //   artist: 'Juice WRLD',
        //   duration: '5:30',
        //   artwork: '/static/demo/clever.jpg'
        // }
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
      ]
    }
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Nothing+You+Could+Do&display=swap') // have to refactor this

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
      margin: 15px 0px 20px 0
      text-transform: capitalize

    h3
      font-size: 1.5rem
      font-weight: 200
      font-family: 'Nothing You Could Do', cursive;
      margin-left: 1rem
  .carousel-custom
      .owl-stage-outer
        overflow: unset

@media(max-width: 1000px)
  .middle-row
    flex-wrap: wrap

  .recommend
    margin-left: 0
    margin-top: 1.5rem
</style>
