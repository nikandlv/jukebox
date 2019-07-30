<template>
  <div>
      <input :type="type" :placeholder="placeholder">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: ['placeholder', 'type']
}
</script>


<style lang="sass" scoped>
  div
    display: flex
    align-items: center
    border: 1px solid lighten(grey, 40)
    background-color: #f9f9f9
    border-radius: 100px
    padding: .3rem 1.5rem .3rem 0rem
    transition: width 200ms
    input
      height: 100%
      color: lighten(black, 30) 
      padding: .2rem 0rem .2rem 1.5rem
      min-width: unset
      border: unset
      background-color: unset
      box-sizing: border-box
      outline: none
      flex-grow: 1
      &::placeholder
        color: #a8abb3

    svg
      width: 1.2rem
      height: 1.2rem
      min-width: 1.2rem
      min-height: 1.2rem
      cursor: pointer
      fill: #3b3c3d
</style>



