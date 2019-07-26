<template>
  <tr>
      <td class="song">
        <img :src="item.artwork" alt="Artwork">  
        {{item.title}}
      </td>

      <td>
        {{item.artist}}
      </td>

      <td>
        {{item.duration}}
      </td>
  </tr>
</template>

<script>
export default {
  name: 'ListItem',
  props: ['item']
}
</script>

<style lang="sass" scoped>
tr
  width: 100%
  height: 100%
  padding: .3rem .5rem

  td
    vertical-align: middle

  img
    width: 3rem
    height: 3rem
    margin-right: .3rem
</style>

