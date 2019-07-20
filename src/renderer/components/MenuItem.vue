<template>
    <router-link tag="li" :to="to">
        <a>
        <span>
            <slot name="icon"></slot>
        </span>
        <slot>Nothing to show</slot>
        </a>
    </router-link>
</template>

<script>
export default {
  name: 'MenuItem',
  props: ['to']
}
</script>

<style>

</style>
