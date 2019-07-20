<template>
    <section>
        Sidebar

        <MenuGroup>
            <template v-slot:title>Test</template>
            <MenuItem to="/">
                Home
            </MenuItem>
            <MenuItem to="/art">
                Artists
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
    padding: 2rem 3rem
    box-sizing: border-box
    background-color: #fcfcfc
</style>
