<template>
  <div id="app">
    <Navigation />
    <main>
      <router-view />
    </main>
    <BottomFooter />
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
