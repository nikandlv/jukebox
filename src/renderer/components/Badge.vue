<template>
  <span class="badge__container">
    <p class="badge__number">
      <slot></slot>
    </p>
  </span>
</template>

<script>
export default {
  name: 'Badge'
}
</script>

<style lang="sass" scoped>
.badge
  &__container
    // base styles
    width: 1rem
    height: 1rem
    background-color: #336cfb
    display: flex
    justify-content: center
    align-items: center
    border-radius: 50%
    border: 2px solid white
    // positioning according to the the icon
    position: absolute
    top: -0.2rem
    right: -.3rem
  &__number
    font-size: .8rem
    color: white
    font-weight: 600
    padding: 0 
    display: inline-block
</style>
