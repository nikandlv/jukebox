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
.dialog
    display: block
</style>
