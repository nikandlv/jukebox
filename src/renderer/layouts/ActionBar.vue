<template>
    <section class="action-bar">
        <div class="search-wrapper">
          <BaseInput placeholder="Search" type="search">
            <svg version="1.1" class="search__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 52.966 52.966" style="enable-background:new 0 0 52.966 52.966;" xml:space="preserve">
              <path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
                c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
                C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
                S32.459,40,21.983,40z"/>
              <g></g>
            </svg>
          </BaseInput>
        </div>
        <div class="icon-wrapper">
          <Notification :BadgeNumber="5"></Notification>

          <Profile></Profile>

          <History></History>
        </div>
    </section>
</template>

<script>
import BaseInput from '../components/BaseInput'
import Notification from '../components/Notification'
import Profile from '../components/Profile'
import History from '../components/History'

export default {
  name: 'ActionBar',
  components: { BaseInput, Notification, Profile, History }
}
</script>

<style lang="sass">
section.action-bar
  display: flex
  align-items: center
  padding-bottom: 1rem
  .search-wrapper
    transition: width 200ms
    transition: margin-top 100ms
    flex-grow: 0.3
  .icon-wrapper
    flex-grow: 1
    align-items: center
    display: flex
@media(max-width: 800px)
  section.action-bar
    .search-wrapper
      flex-grow: 1
@media(max-width: 600px)
  section.action-bar
    flex-direction: column-reverse
    .search-wrapper
      width: 100%
      margin-top: 24px
</style>

