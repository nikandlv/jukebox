<template>
    <div class="dialog-wrapper" :class="{'open' :  open}">
        <div class="overlay" @click="onCloseEvent">

        </div>
        <div class="dialog">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: ['open', 'onClose'],
  computed: {
    onCloseEvent () {
      return this.onClose || (() => {})
    }
  }
}
</script>

<style scoped lang="sass">
.dialog-wrapper
    z-index: 1400
    position: absolute
    left: 0
    top: 0
    width: 100vw
    height: 100vh
    display: flex
    opacity: 0
    transition: opacity 150ms
    pointer-events: none
    align-items: center
    justify-content: center
    .overlay
        position: absolute
        left: 0
        top: 0
        width: 100%
        height: 100%
        background: rgba(black,0.3)
        z-index: 1400
    .dialog
        position: relative
        padding: 1rem
        background: white
        border-radius: 1rem
        max-width: 250px
        min-width: 250px
        z-index: 1400
        box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)
.dialog-wrapper.open
    pointer-events: all
    opacity: 1
    
</style>
