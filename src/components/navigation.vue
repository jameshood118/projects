<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
    :class="navTheme"
  >
    <div class="navbar-brand">
      <router-link
        class="navbar-item is-hidden-touch"
        :to="{ name: 'Home' }"
        exact
      >
        <p class="is-family-roboto brand">Hood Studios</p>
      </router-link>

      <a
        role="button"
        class="navbar-burger burger is-large"
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
      <template v-for="route in $router.options.routes">
        <a
          :key="route.path"
          @click="handleNav(route.name)"
          class="navbar-item"
          :class="lightOrDark(navTheme == 'is-dark' ? '#000000' : '')"
          v-if="route.path != '*'"
        >
          {{ route.name }}
        </a>
      </template>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a
              href="https://github.com/jameshood118"
              target="_blank"
              class="px-2 py-2"
              :class="lightOrDark(navTheme == 'is-dark' ? '#000000' : '')"
            >
              <span class="icon">
                <i class="fab fa-github"></i>
              </span>
            </a>
            <a
              href="https://codepen.io/jameshood118"
              target="_blank"
              class="px-2 py-2"
              :class="lightOrDark(navTheme == 'is-dark' ? '#000000' : '')"
            >
              <span class="icon">
                <i class="fab fa-codepen"></i>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/jameshood118/"
              target="_blank"
              class="px-2 py-2"
              :class="lightOrDark(navTheme == 'is-dark' ? '#000000' : '')"
            >
              <span class="icon">
                <i class="fab fa-linkedin"></i>
              </span>
            </a>
            <a
              href="https://www.facebook.com/james.hood118"
              target="_blank"
              class="px-2 py-2"
              :class="lightOrDark(navTheme == 'is-dark' ? '#000000' : '')"
            >
              <span class="icon">
                <i class="fab fa-facebook"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import lightOrDark from '@/mixins/lightOrDark'
export default {
  name: 'Navbar',
  mixins: [lightOrDark],
  data() {
    return { mobileMenu: false, navTheme: 'is-dark' }
  },
  mounted() {
    document.body.classList.add('has-navbar-fixed-top')
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenu = !this.mobileMenu
    },
    handleNav(name) {
      if (name == this.$route.name) {
        return
      } else {
        if (this.mobileMenu == true) {
          this.mobileMenu = false
        }
        this.$router.push({ name: name })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}
.has-text-light:hover {
  color: black !important;
}

@media screen and (max-width: 1024px - 1px) {
  .navbar.is-fixed-top .navbar-menu,
  .navbar.is-fixed-top-touch .navbar-menu,
  .navbar .navbar-menu {
    overflow: initial;
    padding: 0;
    box-shadow: initial;
    overflow-y: auto;
  }
  .navbar-item {
    &.has-dropdown {
      & .navbar-link::after {
        display: block;
      }
      .navbar-dropdown {
        display: none;
      }
      &.is-active {
        .navbar-dropdown {
          display: block;
        }
      }
    }
  }
  .navbar-burger {
    height: initial;
  }
  .navbar.is-dark {
    .navbar-menu {
      .navbar-item,
      .navbar-item .buttons a {
        color: black !important;
      }
    }
  }
}
</style>
