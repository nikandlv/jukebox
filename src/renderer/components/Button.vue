<template>
  <a href="#" role="button" class="btn" :class="className">
    <slot name="icon"></slot>
    <slot></slot>
  </a>
</template>

<script>
export default {
  data () {
    return {
      className: `btn--` + this.variant
    }
  },

  props: ['variant']

}
</script>

<style lang="sass" scoped>
.btn 
  font-size: .9rem
  text-decoration: none
  padding: .5rem 1rem
  text-transform: capitalize
  border-radius: .375rem
  transition: background-color 200ms
  box-sizing: border-box
  outline: unset
  &--contained 
    background-color: #336cfb
    color: white
    font-weight: 600
    &:hover
      background-color: lighten(#336cfb,5)
    &:focus,&:active
      background-color: darken(#336cfb,5)

  svg
    width: 14px
    height: 14px
    fill: white
    transition: fill 200ms

  &--flat 
    color: grey
    transition: all .2s ease-in-out
    svg
      fill: gray
    &:hover
      background-color: rgba(0,0,0,0.05)
    &:focus,&:active
      background-color: rgba(0,0,0,.15)

  &--raised 
    background-color: #336cfb
    color: white
    font-weight: 600
    box-shadow: 0 .3rem .7rem rgba(#336cfb , .5)
    &:hover
      background-color: lighten(#336cfb,5)
    &:focus,&:active
      background-color: darken(#336cfb,5)
  &--outlined 
     background-color: white
     border: 1px solid #336cfb
     svg
      fill: #336cfb
     &:focus,&:active
      background-color: darken(#336cfb,5)
      color: white
      svg
        fill: white
     &:hover
      background-color: #336cfb
      color: white
      svg
        fill: white
</style>

