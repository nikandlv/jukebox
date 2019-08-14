<template>
  <div class="container">

    <div class="content">
      <slot></slot>
    </div>

    <div class="navigation__container">
      <span class="navigation__left" @click="carouselBackward">
        <svg class="navigation__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
            <g>
                <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z"/>
            </g>
        </svg>
      </span>

      <span class="navigation__right" @click="carouselForward">
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
export default {

  data() { 
    return { 
      currentTranslate : 0
    }
  },

  methods: { 
    carouselBackward() {
      const musicBoxes = this.$el.querySelectorAll('div.music-box');

      // getting the width of a music box to have dinamic translate value in different sizes
      const boxWidth = musicBoxes[0].clientWidth;


      // getting the current amount of translation needed 
      const numberOfItems = musicBoxes.length;
      if( this.currentTranslate === 0) { 
        this.currentTranslate = -boxWidth * numberOfItems; //going to the end of the list
      }

      this.currentTranslate += boxWidth


      /* getting the width of the entire music row and reducing it 7 (7 is the numbe of items showed in the carousel at every time) ,
       which means the other or in the overflow of screen,
       and when we translate equal to that result number * boxWidht it means that we are at the end of the carousel ,
       and we have to set the current translate to zero and come to the first again */

      // doing the transition and transform
      musicBoxes.forEach(musicBox => { 
        musicBox.style.transform = `translateX(${this.currentTranslate}px)`;
        musicBox.style.transition = 'all 0.3s';
      });
    },

    carouselForward() {
      const musicBoxes = this.$el.querySelectorAll('div.music-box');
      
      // getting the width of a music box to have dinamic translate value in different sizes
      const boxWidth = musicBoxes[0].clientWidth;


      // getting the current amount of translation needed 
      this.currentTranslate -= boxWidth


      /* getting the width of the entire music row and reducing it 7 (7 is the numbe of items showed in the carousel at every time) ,
       which means the other or in the overflow of screen,
       and when we translate equal to that result number * boxWidht it means that we are at the end of the carousel ,
       and we have to set the current translate to zero and come to the first again */
      const numberOfItems = musicBoxes.length;
    
      if( this.currentTranslate === -boxWidth * numberOfItems) { 
        this.currentTranslate = 0; // going to begining
      }

      
      // doing the transition and transform
      musicBoxes.forEach(musicBox => { 
        musicBox.style.transform = `translateX(${this.currentTranslate}px)`;
        musicBox.style.transition = 'all 0.3s';
      });
    }
  }
}
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

