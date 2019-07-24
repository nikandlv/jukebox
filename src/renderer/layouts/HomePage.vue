<template>
    <section>
      <ActionBar />
      <div>
        <Carousel class="carousel-custom" :paginationEnabled="false" :scrollPerPage="false" :perPageCustom="[[300, 2], [540, 3], [740, 4], [800, 3], [900, 4],  [1000, 4], [1200, 5]]">
          <Slide v-for="item in top" :key="item.id">
            <MusicBox  :item="item" />
          </Slide>
        </Carousel>
      </div>
    </section>
</template>

<script>
import ActionBar from './ActionBar'
import MusicBox from '../components/MusicBox'
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: 'HomePage',
  components: { ActionBar, MusicBox, Carousel, Slide },
  data: () => {
    return {
      top: [
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
