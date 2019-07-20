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
legend
    text-transform: uppercase
</style>
