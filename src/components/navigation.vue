<template>
  <nav
    class="navbar is-primary has-text-white"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a role="button" class="navbar-burger">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start"></div>
      <router-link :to="{ name: 'Home' }" class="navbar-item">
        Home
      </router-link>
      <router-link :to="{ name: 'About' }" class="navbar-item">
        About
      </router-link>
      <router-link :to="{ name: 'Components' }" class="navbar-item">
        Components and Ideas
      </router-link>
      <div class="navbar-end"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
