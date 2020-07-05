<template>
  <div id="app">
    <Navigation />
    <div class="container is-fluid">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from './components/navigation.vue'
export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
@import './styles/main.scss';
</style>
