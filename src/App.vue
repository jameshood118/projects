<template>
  <div id="app">
    <Navigation />
    <div class="container is-fluid">
      <router-view />
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            2020 <a href="mailto:jameshood118@gmail.com">James Hood</a>,
            <a
              href="https://docs.google.com/document/d/1e-krbKFX3JcDGjjka1TLR94q-zRZLJY3jJlOcOTrVXQ/edit#heading=h.gjdgxs"
              >Resume</a
            >
          </p>
        </div>
      </footer>
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
