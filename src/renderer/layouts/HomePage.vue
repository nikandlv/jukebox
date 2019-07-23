<template>
    <section class="page">
      <ActionBar />
      <div>
        <MusicBox v-for="item in top" :key="item.id" :item="item" />
      </div>
    </section>
</template>

<script>
import ActionBar from './ActionBar'
import MusicBox from '../components/MusicBox'
export default {
  name: 'HomePage',
  components: { ActionBar, MusicBox },
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
        }
      ]
    }
  }
}
</script>

<style scoped lang="sass">
section.page
    padding: 1rem 2.5rem

</style>
