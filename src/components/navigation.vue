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
      <div class="navbar-end"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return { mobileMenu: false };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenu = !this.mobileMenu;
    }
  }
};
</script>
