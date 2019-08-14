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
import Scrollbar from 'smooth-scrollbar'
import HorizontalScrollPlugin from '../utility/HorizontalScrollPlugin'
import Carousel from '../components/Carousel'
Scrollbar.use(HorizontalScrollPlugin)

export default {
  name: 'MusicRow',
  props: ['items', 'title'],
  components: { MusicBox, Carousel },
  mounted () {
    let container = this.$el.getElementsByClassName('items')[0]
    Scrollbar.init(container, { overscrollEffect: 'bounce', continuousScrolling: true, horizontal: true })
  }
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
