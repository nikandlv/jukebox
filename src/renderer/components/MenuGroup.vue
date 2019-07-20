<template>
    <div>
        <legend>
            <slot name="title"></slot>
        </legend>
        <ul>
            <slot></slot>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'MenuGroup'
}
</script>

<style lang="sass" scoped>
div
    margin-top: 12px
    legend
        color: lighten(gray,20)
        text-transform: uppercase
    ul
        padding: unset
    
</style>
