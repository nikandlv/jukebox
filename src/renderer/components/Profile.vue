<template>
  <div class="profile__container">
    <img src="../assets/profile.jpg" alt="PROFILE" class="profile__image">
      <svg version="1.1" class="profile__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
        <g>
          <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
        </g>
      </svg>
  </div>  
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style lang="sass" scoped>
.profile
  &__container
    padding: 0
    margin-left: 1.5rem
    display: flex
    align-items: center
    cursor: pointer

  &__image
    width: 2rem
    height: 2rem
    border-radius: 50%

  &__icon
    width: .7rem
    height: .7rem
    margin-left: .313rem // 5px
</style>
