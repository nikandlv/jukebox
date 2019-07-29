<template>
    <section class="music-row">
        <legend>{{title}}</legend>
        <section class="items">
          <MusicBox v-for="item in items" :key="item.id" :item="item" />
        </section>
    </section>
</template>

<script>
import MusicBox from '../components/MusicBox'
import carousel from 'vue-owl-carousel'
import Scrollbar from 'smooth-scrollbar'
import HorizontalScrollPlugin from '../utility/HorizontalScrollPlugin'
Scrollbar.use(HorizontalScrollPlugin)

export default {
  name: 'MusicRow',
  props: ['items', 'title'],
  components: { MusicBox, carousel },
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
</style>
