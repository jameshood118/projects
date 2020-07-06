<template>
  <div id="app">
    <Navigation />
    <div class="container is-fluid">
      <router-view />
      <BottomFooter />
    </div>
  </div>
</template>

<script>
import Navigation from './components/navigation.vue'
import BottomFooter from './components/bottom-footer.vue'
export default {
  name: 'App',
  components: {
    Navigation,
    BottomFooter
  }
}
</script>

<style lang="scss">
@import './styles/main.scss';
</style>
