<template>
    <section class="page">
      <ActionBar />
      <div>
        <MusicBox />
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
      top: []
    }
  }
}
</script>

<style scoped lang="sass">
section.page
    padding: 1rem 2.5rem

</style>
