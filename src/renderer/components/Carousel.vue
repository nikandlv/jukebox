<template>
  <div class="container">

    <div class="content">
      <slot></slot>
    </div>

    <div class="navigation__container">
      <span class="navigation__left" id="left">
        <svg class="navigation__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
            <g>
                <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z"/>
            </g>
        </svg>
      </span>

      <span class="navigation__right" id="right">
        <svg class="navigation__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
            <g>
                <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/>
            </g>
        </svg>
      </span>

    </div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="sass" scoped>
div.container
    display: flex
    flex-direction: column
    padding: 1rem 2rem
div.content
    display: flex
    position: relative

.navigation
    &__container
        display: flex
        flex: 1 0 100%
        justify-content: space-between 
        padding: 1rem 2rem
    &__right,
    &__left 
        display: flex
        justify-content: center
        align-items: center
        padding: .5rem
        cursor: pointer
        border-radius: 50%
        &:hover 
            background: lighten(grey, 35)
    &__icon
        width: 25px
        heghit: 25px
        fill: #666
</style>

