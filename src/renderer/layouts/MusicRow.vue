<template>
    <section>
        <Carousel class="carousel-custom" :paginationEnabled="false" :scrollPerPage="false" :perPageCustom="[[300, 2], [540, 3], [740, 4], [800, 3], [900, 4],  [1000, 4], [1200, 5] , [1300, 6]]">
          <Slide v-for="item in items" :key="item.id">
            <MusicBox  :item="item" />
          </Slide>
        </Carousel>
    </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import MusicBox from '../components/MusicBox'
export default {
  name: 'MusicRow',
  props: ['items'],
  components: { MusicBox, Carousel, Slide }
}
</script>

<style>

</style>
