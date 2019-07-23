<template>
  <div>
      <input type="search" v-bind="query" :placeholder="placeholder">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  data () {
    return {
      query: null
    }
  },
  props: ['placeholder']
}
</script>


<style lang="sass" scoped>
  div
    display: flex
    justify-content: center
    width: 40%
  
    input
      width: 90%
      height: 100%
      border-radius: 15px
      padding: .4rem 1.5rem
      color: lighten(black, 30) 
      border: 1px solid lighten(grey, 40)
      margin-right: -2rem
      background-color: #f9f9f9
      transition: all .2s ease-in-out
      &::placeholder
        color: #a8abb3
        
      &:focus
        outline: none
        width: 100%

    svg
      width: 1.2rem
      height: 1.2rem
      cursor: pointer
      fill: #3b3c3d
</style>



