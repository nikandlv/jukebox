<template>
  <a href="#" role="button" class="button" :class="className">
    <slot name="icon"></slot>
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'Button',
  data () {
    return {
      className: `button--` + this.variant
    }
  },

  props: ['variant']

}
</script>

<style lang="sass" scoped>
.button 
  font-size: .9rem
  text-decoration: none
  padding: .5rem 1rem
  text-transform: capitalize
  border-radius: .375rem
  transition: background-color 200ms
  box-sizing: border-box
  outline: unset
  color: grey
  transition: all .2s ease-in-out
  svg
    width: 14px
    height: 14px
    transition: fill 200ms
    fill: gray
  &:hover
    background-color: rgba(0,0,0,0.05)
  &:focus,&:active
    background-color: rgba(0,0,0,.15)

  &--contained 
    background-color: #0076F9
    color: white
    font-weight: 600
    svg
        fill: white
    &:hover
      background-color: lighten(#0076F9,5)
    &:focus,&:active
      background-color: darken(#0076F9,5)

  &--raised 
    background-color: #0076F9
    color: white
    font-weight: 600
    box-shadow: 0 .3rem .7rem rgba(#0076F9 , .5)
    svg
        fill: white
    &:hover
      background-color: lighten(#0076F9,5)
    &:focus,&:active
      background-color: darken(#0076F9,5)
  &--outlined 
     background-color: white
     color: #0076F9
     border: 1px solid #0076F9
     svg
      fill: #0076F9
     &:focus,&:active
      background-color: darken(#0076F9,5)
      color: white
      svg
        fill: white
     &:hover
      background-color: #0076F9
      color: white
      svg
        fill: white
</style>

