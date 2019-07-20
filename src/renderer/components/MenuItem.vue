<template>
    <router-link tag="li" :to="to" class="menu-item" :class="{'fade' : faded}">
        <span>
            <slot name="icon"></slot>
        </span>
        <a>
            <slot>Nothing to show</slot>
        </a>
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
    margin: 1rem 0
    &.fade
        a  
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
