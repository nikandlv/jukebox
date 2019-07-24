<template>
    <section>
        <img class="artwork" src="/static/demo/artwork-4.png" />
        <div>
            <p class="title">Perfidia</p>
            <p class="artist">Nat King Cole</p>
        </div>
    </section>
</template>

<script>
export default {
  name: 'PlayerBar'
}
</script>

<style lang="sass" scoped>
section
    display: flex
    align-items: center
    border-top: 1px solid rgba(0,0,0,0.1)
    height: 84px
    img.artwork
        height: 100%
        width: auto
        border-radius: 2px
    p.title,p.artist
        font-size: .8rem
        margin: 8px 10px
    p.artist
        color: lighten(black,45)
</style>
