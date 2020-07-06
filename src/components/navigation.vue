<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a
        role="button"
        class="navbar-burger burger has-text-black is-large"
        :class="{ 'is-active': mobileMenu }"
        @click="toggleMobileMenu()"
      >
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': mobileMenu }">
      <div class="navbar-start"></div>
      <router-link :to="{ name: 'Home' }" class="navbar-item has-text-primary">
        Home
      </router-link>
      <router-link :to="{ name: 'About' }" class="navbar-item has-text-primary">
        About
      </router-link>
      <router-link
        :to="{ name: 'Components' }"
        class="navbar-item has-text-primary"
      >
        Components
      </router-link>
      <div class="navbar-end">
        <a
          href="https://github.com/jameshood118"
          target="_blank"
          class="navbar-item"
        >
          <span class="icon">
            <i class="fab fa-github"></i>
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/jameshood118/"
          target="_blank"
          class="navbar-item"
        >
          <span class="icon">
            <i class="fab fa-linkedin"></i>
          </span>
        </a>
        <a
          href="https://www.facebook.com/james.hood118"
          target="_blank"
          class="navbar-item"
        >
          <span class="icon">
            <i class="fab fa-facebook"></i>
          </span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return { mobileMenu: false }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenu = !this.mobileMenu
    }
  }
}
</script>
