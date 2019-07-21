<template>
    <router-link tag="li" :to="to" class="menu-item" :class="{'fade' : faded}">
        <span>
            <slot name="icon"></slot>
        </span>
        <span>
            <slot>Nothing to show</slot>
        </span>
    </router-link>
</template>

<script>
export default {
  name: 'MenuItem',
  props: ['to', 'faded']
}
</script>

<style lang="sass">
li.menu-item
    display: flex
    align-items: center
    padding: 0.5rem
    border-radius: 100px
    cursor: pointer
    transition: background-color 300ms
    font-size: 0.9rem
    &:hover
        background-color: rgba(0,0,0,0.05)
    &.fade
        span 
            outline: unset
            color: lighten(gray,20) 
    a
        text-decoration: none
        color: black
        font-size: 1rem
    span
        svg
            padding-right: 10px
            width: 22px
            height: auto
</style>
