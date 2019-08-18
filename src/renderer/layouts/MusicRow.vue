<template>
    <section class="music-row">
        <legend>{{title}}</legend>
        <Carousel>
          <MusicBox v-for="item in items" :key="item.id" :item="item" />
        </Carousel>
    </section>  
</template>

<script>
import MusicBox from '../components/MusicBox'
import Carousel from '../components/Carousel'

export default {
  name: 'MusicRow',
  props: ['items', 'title'],
  components: { MusicBox, Carousel },
}
</script>

<style lang="sass">

section.music-row
    legend
        font-size: 2rem
        font-family: 'Roboto Slab', serif        
        margin: 20px 0px
        white-space: nowrap
    .items
      overflow: visible !important
    .scroll-content
        display: flex
    .scrollbar-thumb,.scrollbar-track
      display: none !important
    
</style>
