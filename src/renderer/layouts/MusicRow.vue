<template>
    <section class="music-row">
        <legend>Top Rated</legend>
        <carousel :dots="false" :nav="false" :autoWidth="true" class="carousel-custom">
           <MusicBox v-for="item in items" :key="item.id" :item="item" />
        </carousel>
    </section>
</template>

<script>
import MusicBox from '../components/MusicBox'
import carousel from 'vue-owl-carousel'

export default {
  name: 'MusicRow',
  props: ['items'],
  components: { MusicBox, carousel }
}
</script>

<style lang="sass">

section.music-row
    legend
        font-size: 2rem
        font-family: 'Roboto Slab', serif        
        margin: 20px 0px
    .carousel-custom
      .owl-stage-outer
        overflow: unset
</style>
