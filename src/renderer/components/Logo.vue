<template>
    <span :class="{'nopadding' : nopadding === true}">
        <img src="/static/logo-2.svg" alt="Jukebox">
        Jukebox
    </span>
</template>

<script>
export default {
  name: 'Logo',
  props: ['nopadding']
}
</script>

<style lang="sass" scoped>
span
    margin-bottom: 12px
    font-size: 1.5rem
    color: lighten(black,40)
    &.nopadding
        margin-bottom: 0px

img
    width: 24px
    height: auto
</style>
