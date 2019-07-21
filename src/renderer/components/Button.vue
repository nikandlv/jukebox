<template>
  <a href="#" role="button" class="btn" :class="className"><slot></slot></a>
</template>

<script>
export default {
  data () {
    return {
      className: `btn--` + this.type
    }
  },

  props: ['type']

}
</script>

<style lang="sass" scoped>
.btn 
  font-size: .9rem
  text-decoration: none
  padding: .5rem 1rem
  text-transform: capitalize
  border-radius: .375rem

  &--contained 
    background-color: #336cfb
    color: white
    font-weight: 600
    align-self: flex-starts

  #btn__icon
    width: 14px
    height: 14px
    fill: white

  &--flat 
    color: grey
    transition: all .2s ease-in-out
    &:hover 
      background-color: rgba(0,0,0,.15)

  &--raised 
    background-color: #336cfb
    color: white
    font-weight: 600
    box-shadow: 0 .6rem .6rem rgba(#336cfb , .5)

  &--outlined 
     background-color: white
     border: 1px solid #336cfb
     transition: all 0.2s ease-in-out
     &:hover
      background-color: #336cfb
      color: white
</style>

