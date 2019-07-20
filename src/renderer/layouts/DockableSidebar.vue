<template>
    <section>
        <MenuGroup>
            <template v-slot:title>Menu</template>
            <MenuItem to="/art">
                <template v-slot:icon>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18">
                        <image id="icons8-micro-64" width="18" height="18" xlink:href="data:image/png;base64,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"/>
                    </svg>    
                </template>
                Artists
            </MenuItem>        
        </MenuGroup>
        <MenuGroup class="grow">
            <template v-slot:title>Your playlists</template>
            <MenuItem to="/art">
                Hits of this summer
            </MenuItem>
            <MenuItem to="/art">
                Classical Music
            </MenuItem>
            <MenuItem to="/art">
                Chillout
            </MenuItem>
            <MenuItem to="/art">
                Workout
            </MenuItem>
        </MenuGroup >
        <MenuGroup>
            <MenuItem to="/art" :faded="true">
                Settings
            </MenuItem>
            <MenuItem to="/art" :faded="true">
                Version 0.0.1
            </MenuItem>
        </MenuGroup>
    </section>    
</template>

<script>
import MenuGroup from '../components/MenuGroup'
import MenuItem from '../components/MenuItem'
export default {
  name: 'DockableSidebar',
  components: { MenuGroup, MenuItem }
}
</script>

<style scoped lang="sass">
section
    width: 100%
    max-width: 250px
    min-height: 100vh
    padding: 2rem 3rem
    box-sizing: border-box
    background-color: #fcfcfc
    display: flex
    flex-direction: column
    overflow: auto 
    .grow
        flex-grow: 1
</style>
