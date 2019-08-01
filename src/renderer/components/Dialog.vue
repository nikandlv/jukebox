<template>
    <div class="dialog-wrapper" :class="{'open' : open}">
        <div class="overlay">

        </div>
        <div class="dialog">

        </div>
    </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: ['open']
}
</script>

<style scoped lang="sass">
.dialog-wrapper.open
    .overlay
        position: absolute
        left: 0
        top: 0
        width: 100vw
        height: 100vh
        background: rgba(black,0.1)
        z-index: 1400
    display: block
</style>
