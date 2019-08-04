<template>
  <span @click="onClick" role="button" class="icon-button" :class="{className, 'disabled': disabled}">
    <slot name="icon"></slot>
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'IconButton',
  data () {
    return {
      className: `icon-button--` + this.variant,
      onClick: this.click || (() => {})
    }
  },
  props: ['variant', 'click', 'disabled']

}
</script>

<style lang="sass" scoped>
.icon-button 
  display: flex
  justify-content: center
  align-items: center
  width: 38px
  cursor: pointer
  height: 38px
  text-decoration: none
  text-transform: capitalize
  border-radius: 100%
  transition: background-color 200ms
  box-sizing: border-box
  outline: unset
  color: grey
  transition: all .2s ease-in-out
  &.disabled
    background-color: rgba(0,0,0,.15) !important
    pointer-events: none
  &.large
    width: 48px
    height: 48px
    svg
        width: 32px
        height: 32px    
  &.small
    width: 32px
    height: 32px
    svg
        width: 14px
        height: 14px    
  svg
    width: 24px
    height: 24px
    transition: fill 200ms
    fill: white
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

